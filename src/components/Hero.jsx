import React from "react";
import HeroVideo from "../assets/herovideo.mp4";

export default function Hero() {
  return (
    <section className="w-full backdrop-blur-md pt-24  pb-12 h-screen flex flex-col justify-center bg-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Hair Shortcut by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500">
            Deigo
          </span>
        </h1>
        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
          Learn how to master quick and stylish hair shortcuts with Deigo’s
          signature techniques.
        </p>

        {/* Video Section */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden ">
            <video
              className="w-full h-full object-cover"
              src={HeroVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
