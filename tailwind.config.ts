import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "base": "#0051aa",
          "tint-1": "#1167c5",
          "tint-2": "#458edd",
          "tint-3": "#6aa6e8",
          "tint-4": "#8fbef2",
          "tint-5": "#b4d2f3",
          "shade-1": "#02458f",
          "shade-2": "#023874",
          "shade-3": "#032e5c",
          "shade-4": "#032346",
          "shade-5": "#01152b",
        },
        "background": "#F4F6FF",
        "neutral": {
          100: "#FFF",
          200: "#F9F9F9",
          300: "#EDEDED",
          400: "#E3E3E3",
          500: "#CBCBCB",
          600: "#ADADAD",
          700: "#757575",
          800: "#626262",
          900: "#353535",
          'black': "#1B1B1B",
        },
        "error": {
          'base': '#C62020',
          'light': '#ED2E2E',
          'extraLight': '#FFF2F2',
        },
        "success": {
          'base': '#00966D',
          'light': '#00BA88',
          'extraLight': '#F3FDFA',
        },
        "warning": {
          'base': '#A9791C',
          'light': '#F4B740',
          'extraLight': '#FFF8E1',
        },
      },
      boxShadow: {
        "hover": "0px 0px 18.6px 0px rgba(61, 131, 97, 0.22)"
      },
    },
  },
  plugins: [],
};
export default config;
