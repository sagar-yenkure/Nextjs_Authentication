import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          "hero-pattern": "url('/public/svg/pattern.svg)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
