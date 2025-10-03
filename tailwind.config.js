// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // dùng Inter toàn app
      },
      colors: {
        brand: {
          DEFAULT: "#f97316", // cam (brand chính)
          dark: "#ea580c",    // cam đậm khi hover
        },
      },
    },
  },
  plugins: [],
}
