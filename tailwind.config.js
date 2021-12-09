module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "60em",
      "big-desktop": "90em",
    },
    colors: {
      "dark-blue-intro-email-bg": "hsl(217, 28%, 15%)",
      "dark-blue-main-bg": "hsl(218, 28%, 13%)",
      "dark-blue-footer-bg": "hsl(216, 53%, 9%)",
      "dark-blue-testamonials-bg": "hsl(219, 30%, 18%)",
      "cyan-inside-cta-gradient": "hsl(176, 68%, 64%)",
      "blue-inside-cta-gradient": "hsl(198, 60%, 50%)",
      "light-red-error": "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      body: "'Open Sans', sans-serif",
      "heading-cta-headernav": "'Raleway', sans-serif",
    },
    extend: {
      fontSize: {
        "body-copy": "0.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
