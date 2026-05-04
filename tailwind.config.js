/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          soft: "#161b22",
          card: "#161b22",
          border: "#21262d",
        },
        accent: {
          DEFAULT: "#2f81f7",
          hover: "#58a6ff",
          soft: "rgba(47, 129, 247, 0.12)",
          ring: "rgba(47, 129, 247, 0.35)",
        },
        muted: "#8b949e",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47, 129, 247, 0.25), 0 10px 40px -10px rgba(47, 129, 247, 0.30)",
      },
      animation: {
        "blink-caret": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
