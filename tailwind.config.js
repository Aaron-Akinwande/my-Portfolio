/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      colors: {
        // Main accent - Amber
        primary: "#f59e0b", // amber-500 - main CTA/highlight color
        "primary-hover": "#fbbf24", // amber-400 - hover states, brighter
        "primary-muted": "#d97706", // amber-600 - subtle text accents

        // Secondary accent - Teal
        secondary: "#2dd4bf", // teal-400 - badges, tags, secondary signal
        "secondary-hover": "#5eead4", // teal-300
        "secondary-muted": "#0d9488", // teal-600

        // Backgrounds - Slate
        dark: "#0f1215", // near-black slate, main background
        "dark-secondary": "#1a1f24", // card backgrounds
        "dark-tertiary": "#242a30", // hover states, subtle borders

        // Text
        light: "#f1f5f9", // slate-100, main body text
        tertiary: "#94a3b8", // slate-400, muted/description text

        // Borders
        "border-slate": "#334155", // slate-700, card borders
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
