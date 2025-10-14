import React, { useEffect, useRef } from "react";
import IntroImg from "../assets/introimg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20" id="intro">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-5xl font-bold text-sky-500 drop-shadow-lg">
          Introduction
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2">
          Watch, learn & style like a pro with Diego
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-500">
              Deigo Studio
            </span>
          </h2>
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            At Deigo Studio, we believe that every cut tells a story. Our
            mission is to inspire and teach creative shortcuts that blend speed
            with precision — empowering barbers and stylists everywhere to
            create their signature style.
          </p>

          {/* CTA Button */}
          <a href="#tutorials">
            <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-sky-500 rounded-md group">
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
              <span className="relative text-base font-semibold">
                Explore Tutorials!
              </span>
            </button>
          </a>
        </div>

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
      </div>
    </section>
  );
}
