/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0a",
          soft: "#111113",
          card: "#121215",
          border: "#1f1f23",
        },
        accent: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
          soft: "rgba(99, 102, 241, 0.12)",
          ring: "rgba(99, 102, 241, 0.35)",
        },
        muted: "#a1a1aa",
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
        glow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 10px 40px -10px rgba(99, 102, 241, 0.25)",
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
