// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        deigo: {
          "primary": "#0284c7",   // sky-600
          "secondary": "#38bdf8", // sky-400
          "accent": "#f59e0b",
          "neutral": "#1e293b",
          "base-100": "#f9fafb",  // <- background color light
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ],
  },
};
