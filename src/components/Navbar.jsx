import React, { useState } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/#hero" },
    { name: "Tutorials", href: "/#tutorials" },
    { name: "Intro", href: "/#intro" },
    { name: "Cuts", href: "/#cuts" },
    { name: "Contact", href: "/#contact" },
    { name: "Process", href: "#process" },
  ];

  const CTAButton = (
    <a href="#contact" className="w-full sm:w-auto">
      <button className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 overflow-hidden tracking-tighter text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-white bg-sky-500 rounded-md group w-full sm:w-auto">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
        <span className="relative text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-semibold">
          Get in Touch!
        </span>
      </button>
    </a>
  );

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/30 bg-sky-100">
      <nav className="px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 3xl:px-40">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-lg sm:text-xl md:text-lg lg:text-2xl font-semibold text-sky-900 tracking-wide">
              <span className="text-sky-600">Deigo</span> Hair Studio
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="block text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-sky-900 font-medium hover:text-sky-700 transition-colors duration-200 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-white/30"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end gap-3 shrink-0">
            {CTAButton}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-sky-900 hover:bg-white/30 transition-colors"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {open && (
          <div className="md:hidden mt-2 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 flex flex-col gap-3">
            <ul className="space-y-1 text-start">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 sm:px-4 py-2 rounded-md font-medium text-sky-900 text-sm sm:text-base hover:bg-white/60 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex justify-center mt-2">{CTAButton}</div>

            {/* Phone Info */}
            <div className="flex justify-center items-center mt-2 gap-2 text-sm text-sky-500">
              <Phone size={16} /> +1 245 6484388
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
