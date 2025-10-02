import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Page() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1>My Markdown Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link> ({date})
          </li>
        ))}
      </ul>
    </div>
  );
}