module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bgShape: "url('../img/bg-shape.png')",
      }),
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        80: "80%",
      },
      fontFamily: {
        sonsie: ["Sonsie One"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
