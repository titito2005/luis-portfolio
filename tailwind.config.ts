import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',

      'md': '700px',

      'lg': '1800px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'base-blue': 'rgb(21 37 60)',
        'blue-hover': 'rgb(16 26 52)',
        'second-color': 'rgb(146 227 169)',
      },
    },
  },
  plugins: [],
};
export default config;
