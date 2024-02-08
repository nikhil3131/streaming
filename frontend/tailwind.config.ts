import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-image": "url('/images/footer-bg.jpeg')"
      },
      colors:{
        'f-blue': '#00ACC1',
        'f-light-blue': '#09d2eb',
        'f-gray': '#181818',
        'f-zinc': '#648388'
      },
    },
  },
  plugins: [],
};
export default config;
