'use client';
import HamburgerMenu from './Hamburger';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 md:px-20 border-b border-gray-800 bg-gray-900/95 backdrop-blur-md shadow-lg z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-4xl sm:text-5xl font-extrabold text-pink-300 drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)] hover:text-teal-300 transition-all duration-300"
      >
        APex
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
        <a
          href="#"
          className="relative group transition-all duration-300 hover:text-pink-300"
        >
          Features
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#"
          className="relative group transition-all duration-300 hover:text-pink-300"
        >
          Pricing
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#about"
          className="relative group transition-all duration-300 hover:text-pink-300"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#"
          className="relative font-semibold text-white hover:text-teal-300 transition-all duration-300"
        >
          Login
        </a>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden px-3">
        <HamburgerMenu />
      </div>
    </nav>
  );
}