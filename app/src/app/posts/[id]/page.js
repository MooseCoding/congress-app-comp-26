import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }

  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}

// Optional: generate static pages for all posts
import { getAllPostIds } from '../../../lib/posts';
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(({ params }) => ({ id: params.id }));
}