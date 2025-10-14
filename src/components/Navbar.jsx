import React, { useState } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Intro", href: "#intro" },
    { name: "Cuts", href: "#cuts" },
    { name: "Contact", href: "#contact" },
  ];

  const CTAButton = (
    <a href="#contact">
      <button className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 overflow-hidden tracking-tighter text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-white bg-sky-500 rounded-md group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute bottom-0 left-0 h-full -ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-full opacity-100 object-stretch"
            viewBox="0 0 487 487"
          >
            <path
              fillOpacity=".1"
              fillRule="nonzero"
              fill="#FFF"
              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
            />
          </svg>
        </span>
        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="object-cover w-full h-full"
            viewBox="0 0 487 487"
          >
            <path
              fillOpacity=".1"
              fillRule="nonzero"
              fill="#FFF"
              d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
            />
          </svg>
        </span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
        <span className="relative text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-semibold">
          Get Started!
        </span>
      </button>
    </a>
  );

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/30 bg-sky-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-sky-900 tracking-wide">
              <span className="text-sky-600">Deigo</span> Hair Studio
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-sky-900 font-medium hover:text-sky-700 transition-colors duration-200 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-white/30"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            <span className="flex gap-1 sm:gap-1.5 justify-center items-center text-xs sm:text-sm md:text-base text-sky-500">
              <Phone size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />{" "}
              <span className="font-medium">+1 245 6484388</span>
            </span>

            {CTAButton}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-sky-900 hover:bg-white/30"
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
          <div className="md:hidden mt-2 sm:mt-3 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
            <ul className="space-y-1 sm:space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-sky-900 text-sm sm:text-base hover:bg-white/60 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile CTA Button */}
            <div className="flex justify-center mt-2">{CTAButton}</div>
          </div>
        )}
      </nav>
    </header>
  );
}
