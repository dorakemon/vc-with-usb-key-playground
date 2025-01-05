import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "lab-blue": {
          "50": "#eefafd",
          "100": "#d4f0f9",
          "200": "#aee1f3",
          "300": "#76caea",
          "400": "#38aad8",
          "500": "#1d94c7",
          "600": "#1a71a0",
          "700": "#1c5c82",
          "800": "#1f4d6b",
          "900": "#1e415b",
          "950": "#0e293e",
        },
        "lab-pink": {
          "50": "#fcf3f8",
          "100": "#fae9f3",
          "200": "#f6d4e7",
          "300": "#f0b1d3",
          "400": "#e680b6",
          "500": "#db5d9c",
          "600": "#c83a7a",
          "700": "#ac2a61",
          "800": "#8f2551",
          "900": "#772446",
          "950": "#480f26",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
