import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        putih: "#f2f0ed",
       
      },
      keyframes: {
        cloudLoop: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
      animation: {
        cloudLoop: "cloudLoop 80s linear infinite",
      },
       fontFamily: {
        norman: ["Norman", "sans-serif"],
        stopsn: ["StopSN", "sans-serif"],
        custom: ["CustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
