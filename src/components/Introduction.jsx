import React from "react";
import IntroImg from "../assets/introimg.png"; // replace with your own image or video thumbnail

export default function Intro() {
  return (
    <section className="relative w-full py-20 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}


        {/* Right Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={IntroImg}
              alt="Deigo Studio Intro"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-sky-400/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
        </div>
                <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Deigo Studio</span>
          </h2>
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            At Deigo Studio, we believe that every cut tells a story. Our mission is to inspire and teach creative shortcuts
            that blend speed with precision — empowering barbers and stylists everywhere to create their signature style.
          </p>
          <a
            href="#tutorials"
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Tutorials
          </a>
        </div>
      </div>
    </section>
  );
}
