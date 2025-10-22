'use client';
import Navbar from '../components/Navbar';
import APClasses from '../components/APClasses';

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <section className="pt-24 pb-12 text-center relative z-10">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">AP Classes</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of our AP classes — exploring language, mathematics, physics, history, and environmental science.
        </p>
      </section>

      {/* Subtle glowy side panels behind the AP classes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[200%] bg-gradient-to-r from-pink-500/10 via-transparent to-teal-400/10 pointer-events-none"></div>

      {/* AP Classes Component */}
      <section className="px-6 relative z-10">
        <APClasses />
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center border-t border-gray-800 text-gray-500 relative z-10">
        {new Date().getFullYear()}, Topher and Katie
      </footer>
    </main>
  );
}