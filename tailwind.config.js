/** @type {import('tailwindcss').Config} */
import colors, { slate as _slate, zinc, neutral } from "tailwindcss/colors";

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  fontFamily: {
    sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  },
  extend: {
    colors: {
      primary: "#0F0F11", // Dark background
      accent: "#F7E924",  // Yellow accent (retain as brand color)
      highlight: "#F15A2B", // Orange accent (if needed)
      card: "#1C1D22",  // Dark card background
      cardSoft: "#2A2B30",  // Slightly lighter than card
      grayText: "#B4B4B6", // Light grey for less important text
      mutedText: "#8F8F92", // Even softer text color
      lightBorder: "#2D2E33", // Subtle borders
      background: "#18191C", // App background
      softGray: "#C7C8C9", // Button icons
      buttonBg: "#2F3035",  // Button background
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
      bounce: 'bounce 0.6s', // Ensure bounce is present
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
