import fs from 'fs';
import path from 'path';
import Navbar from '../../components/Navbar';
import ClassMenu from '../../components/ClassMenu';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

interface ClassPageProps {
  params: { slug: string };
}

export default function ClassPage({ params }: ClassPageProps) {
  const { slug } = params;

  // Read markdown files dynamically
  const classDir = path.join(process.cwd(), 'content', slug);
  let lessons: string[] = [];
  if (fs.existsSync(classDir)) {
    lessons = fs.readdirSync(classDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace('.md', ''));
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Lessons menu */}
        <ClassMenu classSlug={slug} lessons={lessons} />
        
        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-pink-300">{slug.replace('-', ' ').toUpperCase()}</h1>
          <p className="text-gray-300">
            Welcome to {slug.replace('-', ' ').toUpperCase()} class page. Select a lesson from the menu.
          </p>

        </div>
      </div>
    </main>
  );
}