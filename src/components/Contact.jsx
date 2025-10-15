import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Loading from "./Loading";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);
  const [loading , setLoading] = useState(false)

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
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log("📩 Contact Form Data:", formData);
    // alert("Thank you! Your message has been sent. (Check console)");
   setTimeout(() => {
    setLoading(false)
    setFormData({ name: "", email: "", message: "" });

   }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-16 xs:py-20 sm:py-24 "
    >
      <div className="max-w-5xl mx-auto px-4 xs:px-6 lg:px-10">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-sky-500 text-center mb-4 xs:mb-6 sm:mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-slate-600 text-sm xs:text-base sm:text-lg mb-8 xs:mb-10 sm:mb-12 max-w-2xl mx-auto">
          Have questions or want to collaborate? Send me a message below — I’ll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-6 xs:p-8 sm:p-10 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-4 xs:space-y-6 sm:space-y-8 border border-sky-200"
        >
          {/* Name */}
          <div>
            <label className="block text-sky-900 font-semibold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-3 xs:px-4 py-2 xs:py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80 text-sm xs:text-base sm:text-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sky-900 font-semibold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-3 xs:px-4 py-2 xs:py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80 text-sm xs:text-base sm:text-lg"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sky-900 font-semibold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              rows="5"
              className="w-full px-3 xs:px-4 py-2 xs:py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80 text-sm xs:text-base sm:text-lg resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-6 xs:px-8 py-2.5 xs:py-3 overflow-hidden tracking-tighter text-white bg-sky-500 rounded-md group shadow-lg text-sm xs:text-base sm:text-lg"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative z-10 font-semibold flex items-center gap-3">

                {loading && <Loading size="w-4 h-4"/>} Send Message
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
