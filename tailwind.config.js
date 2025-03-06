/** @type {import('tailwindcss').Config} */
import colors, { purple, pink, slate as _slate } from "tailwindcss/colors";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      twinkle: "twinkle 4s infinite",
      "shooting-star": "shooting 3s infinite",
    },
    keyframes: {
      twinkle: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0.3" },
      },
      shooting: {
        "0%": {
          transform: "rotate(45deg) translateX(0)",
          opacity: "1",
          width: "0",
        },
        "50%": {
          width: "100px",
        },
        "100%": {
          transform: "rotate(45deg) translateX(1000px)",
          opacity: "0",
        },
      },
    },
  },
  colors: {
    ...colors,
    primary: purple,
    secondary: pink,
    slate: _slate, // Ensures you're using the correct 'slate' color
  },
};
export const plugins = [];
