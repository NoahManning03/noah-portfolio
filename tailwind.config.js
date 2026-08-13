/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0f17",
          soft: "#111622",
          card: "#111622",
          border: "#1e293b",
        },
        accent: {
          DEFAULT: "#2f81f7",
          hover: "#58a6ff",
          soft: "rgba(47, 129, 247, 0.12)",
          ring: "rgba(47, 129, 247, 0.35)",
        },
        violet: {
          cyber: "#a855f7",
          soft: "rgba(168, 85, 247, 0.14)",
        },
        muted: "#94a3b8",
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
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47, 129, 247, 0.25), 0 10px 40px -10px rgba(47, 129, 247, 0.30)",
        "glow-violet":
          "0 0 0 1px rgba(168, 85, 247, 0.25), 0 10px 40px -10px rgba(168, 85, 247, 0.28)",
        glass: "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 100%",
      },
      animation: {
        "blink-caret": "blink 1s step-end infinite",
        "gradient-x": "gradient-x 7s ease infinite",
        "pulse-glow": "pulse-glow 2.2s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 46s linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        aurora: "aurora 12s ease-in-out infinite",
        glitch: "glitch 2.4s steps(2, end) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 1px rgba(47, 129, 247, 0.25), 0 8px 28px -10px rgba(47, 129, 247, 0.35)",
          },
          "50%": {
            boxShadow:
              "0 0 0 1px rgba(168, 85, 247, 0.45), 0 12px 40px -8px rgba(168, 85, 247, 0.45)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        aurora: {
          "0%, 100%": { opacity: "0.35", transform: "translateX(-8%) rotate(0deg)" },
          "50%": { opacity: "0.7", transform: "translateX(8%) rotate(8deg)" },
        },
        glitch: {
          "0%, 92%, 100%": { transform: "translate(0)" },
          "93%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "96%": { transform: "translate(-1px, 2px)" },
        },
      },
    },
  },
  plugins: [],
};
