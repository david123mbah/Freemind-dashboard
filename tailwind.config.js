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
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
