'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const menuItems = ['Classes', 'About'];

  return (
    <div className="relative z-50">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-pink-300 to-teal-300 rounded transition-all duration-300 ${
            open ? 'rotate-45 translate-y-2' : 'group-hover:scale-x-110'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-pink-300 to-teal-300 rounded transition-all duration-300 ${
            open ? 'opacity-0' : 'group-hover:scale-x-110'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gradient-to-r from-pink-300 to-teal-300 rounded transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-2' : 'group-hover:scale-x-110'
          }`}
        ></span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg shadow-pink-300/10 py-2 animate-fadeIn">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block px-5 py-2 text-gray-200 hover:bg-gray-700/60 hover:text-teal-300 rounded-md transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}