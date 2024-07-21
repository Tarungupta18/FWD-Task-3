/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff6745",
        tomato: {
          "100": "#f2652b",
          "200": "#f16429",
          "300": "#e64d2b",
        },
        white: "#fff",
        darkslategray: {
          "100": "rgba(23, 65, 104, 0.5)",
          "200": "rgba(23, 65, 104, 0.2)",
        },
        gray: {
          "100": "#909090",
          "200": "#232323",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "#d1d9e1",
        },
        black: "#174168",
        dodgerblue: "rgba(1, 133, 255, 0.2)",
        light: "#f0f7fd",
        black1: "#000",
        snow: "#fbf7f4",
        darksalmon: "#fcb28e",
        darkgray: "#a7a7a7",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        roboto: "Roboto",
        karla: "Karla",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
