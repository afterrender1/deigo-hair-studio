import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Intro", href: "#intro" },
    { name: "Cuts", href: "#cuts" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3">
           
              <span className="text-lg font-semibold text-slate-900">Deigo Studio</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div>
              <a
                href="#contact"
                className="ml-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-sky-600 to-sky-300 text-white shadow-md hover:opacity-95"
                aria-label="Contact / Get Started"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 px-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full block text-center px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
