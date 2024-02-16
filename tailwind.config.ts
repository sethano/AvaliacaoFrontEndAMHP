import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "amhp-green": "#058288",
      "amhp-dark": {
        100: "#000000de",
        300: "#404758",
      },
      "amhp-gray": {
        100: "#fafafa",
        300: "#707070",
      },
    },
  },
  plugins: [],
};
export default config;
