'use client';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  // Custom hook for scroll-triggered animation
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
              // Remove to allow re-trigger on re-entry
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

  const heroTextRef = useAnimateOnScroll('animate-slideUp');
  const heroImgRef = useAnimateOnScroll('animate-fadeIn');
  const missionRef = useAnimateOnScroll('animate-slideUp');
  const teamRef = useAnimateOnScroll('animate-slideUp');
  const ctaRef = useAnimateOnScroll('animate-slideUp');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Navbar */}
      <nav className="flex px-20 py-5 justify-center border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur-md z-10 shadow-lg">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-32 px-6 sm:px-12 gap-12 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[200%] bg-gradient-to-r from-pink-500/10 via-transparent to-teal-400/10 blur-3xl"></div>

        <div
          ref={heroTextRef}
          className="md:w-1/2 relative z-10 opacity-0"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-300 leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(236,72,153,0.3)]">
            About <span className="text-teal-300">APex</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            We wanted to make an app that can help students with their difficult AP classes, like we dealt with ourselves throughout our time in highschool
            by compiling resources, videos and lessons for classes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="flex flex-col md:flex-row items-center justify-between py-20 px-6 sm:px-12 gap-10 bg-gray-950/60 opacity-0">
        <div className="md:w-1/2 bg-gradient-to-br from-pink-400 to-teal-400 rounded-xl shadow-lg transform transition duration-700 hover:rotate-1 hover:scale-[1.03]"></div>

        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-pink-300 mb-3">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To help students learn and guide them along their journey to college.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-teal-300 mb-3">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To eventually became a usable platform for others to contribute to, expanding resources available for students.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="px-6 sm:px-12 py-24 bg-gradient-to-t from-gray-950 to-gray-900 opacity-0">
        <h2 className="text-4xl font-bold text-pink-300 text-center mb-16">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 grid-center">
          {[
            { name: 'Topher Fontana', role: 'Programming Lead', color: 'bg-teal-300' },
            { name: 'Katie Saadeh', role: 'Team Lead', color: 'bg-pink-300 ' },
          ].map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-800/50 p-8 rounded-2xl shadow-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-pink-300/20"
            >
              <div className={`w-32 h-32 ${member.color} rounded-full mb-5 shadow-inner shadow-gray-900`}></div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="text-center py-24 px-6 sm:px-12 bg-gray-950 opacity-0">
        <h2 className="text-4xl font-bold text-teal-300 mb-6">
          Ready to start?
        </h2>
        <Link
          href="/classes"
          className="inline-block bg-gradient-to-r from-pink-300 to-teal-300 text-gray-900 font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-xl hover:from-pink-400 hover:to-teal-400 transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}