import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#100F0E",
          deep: "#0A0909",
          surface: "#181615",
          border: "#242220",
        },
        charcoal: {
          DEFAULT: "#292725",
          light: "#383533",
          border: "#3F3C39",
        },
        espresso: {
          DEFAULT: "#39271F",
          dark: "#261914",
          light: "#4D362B",
        },
        cacao: {
          DEFAULT: "#4A3328",
          dark: "#2E1F18",
          rich: "#5C3E31",
          light: "#785342",
        },
        gold: {
          DEFAULT: "#B39154",
          antique: "#B39154",
          champagne: "#C9B99F",
          muted: "#8C7343",
          light: "#D8C29D",
          dim: "rgba(179, 145, 84, 0.2)",
        },
        ivory: {
          DEFAULT: "#EAE1D5",
          warm: "#EAE1D5",
          soft: "#D5CBC0",
          pure: "#F5F0E8",
        },
        ash: {
          DEFAULT: "#898075",
          dark: "#5A544D",
          light: "#A39B91",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "sans-serif"],
        display: ["var(--font-bodoni)", "Didot", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight":
          "radial-gradient(circle at 50% 0%, rgba(179, 145, 84, 0.12) 0%, rgba(16, 15, 14, 0) 70%)",
        "gold-shimmer":
          "linear-gradient(105deg, transparent 20%, rgba(179, 145, 84, 0.25) 50%, transparent 80%)",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "gold-glow": "0 0 25px rgba(179, 145, 84, 0.25)",
        "gold-subtle": "0 0 15px rgba(179, 145, 84, 0.15)",
      },
      letterSpacing: {
        widest: ".25em",
        editorial: ".35em",
        ritual: ".45em",
      },
    },
  },
  plugins: [],
};

export default config;
