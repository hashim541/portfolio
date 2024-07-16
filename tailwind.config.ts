import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: {addUtilities: any}) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px rgba(0,0,0,.7)',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-fill-transparent': {
          color: 'transparent',
        },
        '.blur-effect-lg': {
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter' : 'blur(12px)',
        }
      });
    },
  ],
};
export default config;
