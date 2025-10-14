import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Contact Form Data:", formData);
    alert("Thank you! Your message has been sent. (Check console)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-br from-sky-100 via-white to-sky-200"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <h2 className="text-5xl font-bold text-sky-500 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          Have questions or want to collaborate? Send me a message below — I’ll
          get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-6 border border-sky-200"
        >
          {/* Name */}
          <div>
            <label className="block text-sky-900 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sky-900 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sky-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white/80 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden tracking-tighter text-white bg-sky-500 rounded-md group shadow-lg"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative z-10 font-semibold">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
