import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '../../components/Navbar';
import ClassMenu from '../../components/ClassMenu';

interface LessonPageProps {
  params: { slug: string; lesson: string };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lesson } = params;

  const classDir = path.join(process.cwd(), 'content', slug);

  const lessons = fs.existsSync(classDir)
    ? fs.readdirSync(classDir)
        .filter((f) => f.endsWith('.md'))
        .map((f) => f.replace('.md', ''))
    : [];

  const filePath = path.join(classDir, lesson + '.md');
  if (!fs.existsSync(filePath)) return <p>Lesson not found.</p>;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-7xl mx-auto px-6 py-12 gap-8">
        <ClassMenu classSlug={slug} lessons={lessons} />
        <div className="flex-1 bg-gray-900/40 p-6 rounded-xl shadow-lg prose max-w-full text-gray-100">
          <h1 className="text-3xl font-bold text-pink-300 mb-4">{lesson.replace(/-/g, ' ')}</h1>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </main>
  );
}