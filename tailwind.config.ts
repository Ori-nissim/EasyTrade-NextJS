// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        textTitle: "var(--text-title)",
        textNav: "var(--text-nav)",
        textNavSelected: "var(--text-nav-selected)",
        textSecondary: "var(--text-secondary)",
        textHover: "var(--text-hover)",
        card: "var(--card)",
        tradeCard: "var(--tradeCard)",
        cardHover: "var(--card-hover)",
        background: "var(--background)",
        badge: "var(----badge)",
        complement: "var(--complement)",
        complementHover: "var(--complement-hover)",
        buttonEnabled: "var(--button-enabled)",
        buttonBlocked: "var(--button-blocked)",
        themeButton: "var(--theme-button)",
        themeButtonBackground: "var(--theme-button-background)",
      },
    },
  },
  plugins: [],
};
export default config;
