export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // indigo
        secondary: "#06B6D4", // cyan
        accent: "#F59E0B",    // amber
        surface: "#F9FAFB",
        "on-surface": "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};