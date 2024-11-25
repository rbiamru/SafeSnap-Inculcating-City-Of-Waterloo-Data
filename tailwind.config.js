/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#888",
          "200": "#828282",
          "300": "rgba(255, 255, 255, 0.4)",
          "400": "rgba(0, 0, 0, 0.8)",
        },
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e0",
          "300": "#d9d9d9",
        },
        darkslategray: {
          "100": "#454545",
          "200": "#38373a",
        },
        silver: "#c1c1c1",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#eee",
        },
        darkgray: "#aaa",
        dodgerblue: {
          "100": "#5a92ff",
          "200": "#2898ff",
          "300": "rgba(41, 152, 255, 0.74)",
          "400": "rgba(0, 116, 222, 0.49)",
          "500": "rgba(40, 152, 255, 0.61)",
          "600": "rgba(89, 146, 255, 0.43)",
        },
        dimgray: "#5e5e61",
        royalblue: "#4078e6",
        tomato: "rgba(255, 58, 58, 0.54)",
        gold: "rgba(255, 228, 90, 0.38)",
        cornflowerblue: "#5588eb",
      },
      spacing: {},
      fontFamily: {
        "small-text": "Inter",
        text: "'Be Vietnam'",
      },
      borderRadius: {
        "981xl": "1000px",
        "7xl": "26px",
        xl: "20px",
        "41xl": "60px",
        "4xs": "9px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      smi: "13px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq733: {
        raw: "screen and (max-width: 733px)",
      },
      mq720: {
        raw: "screen and (max-width: 720px)",
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
