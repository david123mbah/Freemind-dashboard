/** @type {import('tailwindcss').Config} */
import colors, { slate as _slate, zinc, neutral } from "tailwindcss/colors";

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
    sans: [
      'Montserrat', // Primary font for professional vibe
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ],
  },
  extend: {
    colors: {
      primary: "#0F0F11",
      accent: "#F7E924",
      highlight: "#F15A2B",
      card: "#1C1D22",
      cardSoft: "#2A2B30",
      grayText: "#B4B4B6",
      mutedText: "#8F8F92",
      lightBorder: "#2D2E33",
      background: "#18191C",
      softGray: "#C7C8C9",
      buttonBg: "#2F3035",
      border: "hsl(var(--border))",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      twinkle: "twinkle 4s infinite",
      "shooting-star": "shooting 3s infinite",
      marquee: 'marquee 40s linear infinite',
      marquee2: 'marquee2 40s linear infinite',
      bounce: 'bounce 0.6s',
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
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-200%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(200%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
  },
  colors: {
    ...colors,
    slate: _slate,
    zinc,
    neutral,
  },
};

export const plugins = [];

module.exports = {
  content,
  theme,
  plugins,
  darkMode: 'class',
};
