/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00274e",
          secondary: "#4da8da",
          accent: "#9b59b6",
          neutral: "#d1d5db",
          "base-100": "#f4f4f4",
          info: "#59bd99",
          success: "#5cb85c",
          warning: "#f0ad4e",
          error: "#d9535f",
        },
      },
    ],
  },
};
