'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function APClasses() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>('.class-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (!target.classList.contains('animated')) {
              target.classList.add('animate-fadeInUp', 'animated');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const classes = [
    { name: 'AP Lang', color: 'text-pink-300', link: "/classes/ap-lang" },
    { name: 'AP Calc BC', color: 'text-teal-300', link: "/classes/ap-calc" },
    { name: 'AP Physics 1 & C Mechanics', color: 'text-yellow-300', link: "/classes/ap-physics" },
    { name: 'AP US History', color: 'text-blue-300', link: "/classes/ap-ush" },
    { name: 'AP Environmental Science', color: 'text-green-300', link: "/classes/ap-es" },
  ];

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        Explore Our AP Classes
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {classes.map((cls, idx) => (
          <div
            key={idx}
            className="class-card p-6 border border-gray-700 rounded-xl text-center bg-gray-800/40 hover:bg-gray-800 transition transform hover:scale-105 opacity-0"
          >
            <Link href={cls.link} className={`text-2xl font-semibold mb-2 ${cls.color}`}>
              {cls.name}
            </Link>
            <p className="text-gray-400">Click to learn more about this class.</p>
          </div>
        ))}
      </div>
    </section>
  );
}