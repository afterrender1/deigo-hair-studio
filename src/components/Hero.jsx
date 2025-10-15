import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        w-full 
        min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen 
        flex flex-col justify-center 
        bg-sky-100 
        py-16 sm:py-20 lg:py-28 
        px-4 sm:px-6 lg:px-8
        relative overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* 🌟 Hero Title */}
        <h1
          className="
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl 
            font-bold 
            text-slate-900 
            leading-tight 
            mb-4 sm:mb-6 
          "
        >
          Hair Shortcut by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500">
            Deigo
          </span>
        </h1>

        {/* 🌟 Subtext */}
        <p
          className="
            text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
            text-slate-600 
            max-w-2xl md:max-w-3xl lg:max-w-4xl 
            mx-auto 
            leading-relaxed 
            mb-8 sm:mb-10 md:mb-12
          "
        >
          Learn how to master quick and stylish hair shortcuts with{" "}
          <span className="font-semibold text-sky-500">Deigo’s signature techniques.</span>
        </p>

        {/* 🌟 Video Section */}
        <div
          className="
            w-full 
            max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 
            aspect-video 
            rounded-2xl overflow-hidden 
            shadow-2xl border border-sky-200
            transition-transform duration-500 hover:scale-[1.02]
          "
        >
          <video
            className="w-full h-full object-cover"
            src="/herovideo.mp4"
            poster="/poster.png"  
            autoPlay
            loop
            muted
            playsInline
            preload="none"                   
          />
        </div>
      </div>
    </section>
  );
}
