import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontSize: {
        'custom': '40px', // Custom font size
      },
      lineHeight: {
        'custom': '48px', // Custom line height
      },
    },
    fontFamily:{
      body: ['Montserrat'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
