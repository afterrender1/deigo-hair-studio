import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Step1Img from "../assets/step1.jpg";
import Step2Img from "../assets/step2.jpg";
import Step3Img from "../assets/step3.jpg";
import Step4Img from "../assets/step4.jpg";
import Step5Img from "../assets/step5.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Consultation", description: "We understand your style goals and assess your hair type.", img: Step1Img },
    { id: 2, title: "Precision Cutting", description: "Our expert stylists execute your haircut with accuracy and flair.", img: Step2Img },
    { id: 3, title: "Styling & Finish", description: "Final touches, styling tips, and product recommendations.", img: Step3Img },
    { id: 4, title: "Color & Treatments", description: "Optional color or treatment services to enhance your look.", img: Step4Img },
    { id: 5, title: "Review & Advice", description: "We ensure satisfaction and give tips for maintaining your style.", img: Step5Img },
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
    <section ref={sectionRef} className="w-full py-20 bg-gradient-to-br from-sky-100 via-white to-sky-200 h-screen mb-80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 text-center mb-6">
          Our Process
        </h1>
        <p className="text-slate-700 text-base sm:text-lg lg:text-xl text-center mb-12 leading-relaxed">
          Follow our step-by-step process to see how Deigo Hair Studio transforms your style.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Step Indicator */}
          <div className="relative md:w-1/4 flex flex-col items-start gap-6">
            {/* Vertical Line */}
            <div className="absolute top-5 left-4 md:left-6 h-80 w-1 bg-gray-300 rounded-full"></div>
            {/* Fill Line */}
            <div
              className="absolute top-5 left-4 md:left-6 w-1 bg-sky-500 rounded-full transition-all duration-500"
              style={{
                height: `${((activeStep - 1) / (steps.length - 1)) * 89}%`,
              }}
            ></div>

            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 z-10 relative px-3 py-4 rounded-full font-semibold text-sm sm:text-base transition-colors ${
                  activeStep >= step.id
                    ? "bg-sky-500 text-white"
                    : "bg-white border border-sky-300 text-sky-900 hover:bg-sky-100"
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-sky-500 bg-white text-sky-500 font-semibold">
                  {step.id}
                </span>
                <span className="truncate">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="md:w-3/4">
            {steps
              .filter((step) => step.id === activeStep)
              .map((step) => (
                <div key={step.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Text */}
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-500 mb-4">
                      Step {step.id}: {step.title}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
