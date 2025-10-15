import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Step1Img from "/hairstyles.webp";
import Step2Img from "/barbertools.webp";
import Step3Img from "/barberseat.avif";
import Step4Img from "/barberteaching.png";
import Step5Img from "/finallook.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Pick Your Favorite Hairstyle",
      description: "Choose the look you want to master.",
      img: Step1Img,
    },
    {
      id: 2,
      title: "Grab Your Tools",
      description: "Get your scissors, trimmer, and all the essentials ready.",
      img: Step2Img,
    },
    {
      id: 3,
      title: "Take Your Seat",
      description: "Find a comfortable spot with good lighting and a mirror.",
      img: Step3Img,
    },
    {
      id: 4,
      title: "Follow Along with the Video",
      description:
        "Watch and cut carefully — stay safe while doing it.",
      img: Step4Img,
    },
    {
      id: 5,
      title: "Admire Your Fresh Look",
      description:
        "You did it yourself! Enjoy your new style with confidence.",
      img: Step5Img,
    },
  ];

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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="w-full py-20 bg-gradient-to-br from-sky-100 via-white to-sky-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* 🔹 Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 text-center mb-4">
          Learn to Cut Your Own Hair with Confidence
        </h1>
        <p className="text-slate-700 text-base sm:text-lg lg:text-xl text-center mb-12 leading-relaxed">
          Follow our simple step-by-step guide to master your own haircut like a pro.
        </p>

        {/* 🔹 Main Content */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          {/* Step Indicators (Left) */}
          <div className="relative md:w-1/4 flex flex-col items-center gap-6">
            {/* Vertical Line */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 h-[85%] w-1 bg-gray-300 rounded-full"></div>

            {/* Fill Line */}
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-1 bg-sky-500 rounded-full transition-all duration-500"
              style={{
                height: `${((activeStep - 1) / (steps.length - 1)) * 85}%`,
              }}
            ></div>

            {/* Step Buttons */}
   {steps.map((step) => (
  <button
    key={step.id}
    onClick={() => setActiveStep(step.id)}
    className={`flex flex-row items-center justify-start gap-3 z-10 relative px-4 py-4 rounded-full font-semibold transition-colors w-full sm:w-64 md:w-80 text-center ${
      activeStep >= step.id
        ? "bg-sky-500 text-white"
        : "bg-white border border-sky-300 text-sky-900 hover:bg-sky-100"
    }`}
  >
    <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-sky-500 bg-white text-sky-500 font-semibold">
      {step.id}
    </span>
    <span className="text-sm sm:text-base md:text-sm lg:text-base text-left whitespace-normal leading-snug">
      {step.title}
    </span>
  </button>
))}

          </div>

          {/* Step Content (Right / Below in mobile) */}
          <div className="md:w-3/4">
            {steps
              .filter((step) => step.id === activeStep)
              .map((step) => (
                <div
                  key={step.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
                >
                  {/* Text First */}
                  <div className="order-1 md:order-1 text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-500 mb-3 sm:mb-4">
                      Step {step.id}: {step.title}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Image Below (on mobile) */}
                  <div className="order-2 md:order-2">
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
