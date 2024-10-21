// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        textTitle:'var(--text-title)',
        textSecondary:'var(--text-secondary)',
        textHover: 'var(--text-hover)',
        card: 'var(--card)',
        cardHover: 'var(--card-hover)',
        background: 'var(--background)',
        badge: 'var(----badge)',
        complement: 'var(--complement)',
        complementHover: 'var(--complement-hover)',
      },
    },
  },
  plugins: [],
};
export default config;
