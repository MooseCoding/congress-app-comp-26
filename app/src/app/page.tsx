'use client';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Page() {
  // Hook for scroll-triggered animation
  function useAnimateOnScroll(className: string) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add(className);
            } else {
              el.classList.remove(className);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [className]);

    return ref;
  }

  const heroRef = useAnimateOnScroll('animate-slideUp');
  const succeedRef = useAnimateOnScroll('animate-slideUp');
  const ctaRef = useAnimateOnScroll('animate-slideUp');

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Navbar */}
      <nav className="flex px-20 py-5 justify-center border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur-md z-10 shadow-lg">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="text-center py-28 px-6 opacity-0 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[200%] bg-gradient-to-r from-pink-500/10 via-transparent to-teal-400/10 blur-3xl"></div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-pink-300 drop-shadow-[0_4px_8px_rgba(236,72,153,0.3)]">
          Master Your AP Exams with{' '}
          <span className="text-teal-300">Confidence</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Study guides, notes, lessons and interactive activities from and for AP students.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-300 to-teal-300 text-gray-900 rounded-lg font-semibold shadow-md hover:shadow-xl hover:from-pink-400 hover:to-teal-400 transition-all duration-300 transform hover:-translate-y-1">
            Explore
          </button>
          <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800/60 transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* How to Succeed Section */}
      <section
        ref={succeedRef}
        className="py-24 px-6 border-t border-gray-800 bg-gray-950/60 opacity-0"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-300 mb-4 drop-shadow-[0_2px_6px_rgba(236,72,153,0.3)]">
            How to Succeed
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Built by students who’ve been in your shoes. We've taken nearly every AP exam and performed exceptionally and want to share our study methods and tools that would have helped us with you.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: '📘', title: 'Smart Study Guides', color: 'text-pink-300', text: 'Concise, organized notes for AP topics.' },
              { icon: '⚡', title: 'Interactive Activities', color: 'text-teal-300', text: 'Certain topics have functions that help you study.' },
              { icon: '📊', title: 'Lessons', color: 'text-yellow-300', text: 'Lesson topics for key units and information for AP exams.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-800 rounded-xl bg-gray-800/40 hover:shadow-lg hover:shadow-pink-300/20 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className={`text-3xl mb-3 ${item.color}`}>{item.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-24 px-6 text-center border-t border-gray-800 bg-gradient-to-t from-gray-950 to-gray-900 opacity-0"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-300 drop-shadow-[0_4px_8px_rgba(45,212,191,0.3)]">
          Start Studying Today
        </h2>
        <button className="px-8 py-3 bg-gradient-to-r from-pink-300 to-teal-300 text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-xl hover:from-pink-400 hover:to-teal-400 transition-all duration-300 transform hover:-translate-y-1">
          <Link 
          href="/classes">
            Get Started
          </Link>
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
        {new Date().getFullYear()}, Topher and Katie
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}