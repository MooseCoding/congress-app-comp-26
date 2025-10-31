import Link from 'next/link';

interface ClassMenuProps {
  classSlug: string;
  lessons?: string[]; // optional
  activeLesson?: string;
}

export default function ClassMenu({ classSlug, lessons = [], activeLesson }: ClassMenuProps) {
  return (
    <aside className="w-64 bg-gray-900/40 p-4 rounded-xl shadow-lg flex-shrink-0 space-y-2">
      {/* Back to class button */}
      {(activeLesson!=="none") &&
        <Link
          href={`/classes/${classSlug}`}
          className="block px-3 py-2 rounded bg-gray-800/70 hover:bg-gray-800 text-gray-100 font-semibold transition"
        >
          ← Back to Class
        </Link>
      }

      {/* Lesson links */}
      {lessons.length > 0 ? (
        lessons.map((lesson) => (
          <Link
            key={lesson}
            href={`/classes/${classSlug}/lesson/${lesson}`}
            className={`block px-3 py-2 rounded transition ${
              activeLesson === lesson
                ? 'bg-pink-400 text-gray-900 font-semibold'
                : 'hover:bg-gray-800 text-gray-100'
            }`}
          >
            {lesson.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </Link>
        ))
      ) : (
        <p className="text-gray-400 text-sm">No lessons found.</p>
      )}
    </aside>
  );
}