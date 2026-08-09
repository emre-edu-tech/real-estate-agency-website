/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3A5F",
          hover: "#16304D"
        },
        slategray: "#64748B",
        gold: {
          DEFAULT: "#C89B3C",
          hover: "#B48932"
        },
        page: "#F8FAFC",
        cardbg: "#FFFFFF",
        primarytext: "#0F172A",
        mutedtext: "#475569",
        borderline: "#E2E8F0"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)",
        cardHover: "0 10px 25px -10px rgb(15 23 42 / 0.18), 0 8px 10px -6px rgb(15 23 42 / 0.10)"
      }
    }
  },
  plugins: []
};
