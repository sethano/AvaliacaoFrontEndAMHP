import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "amhp-green": "#058288",
        "amhp-dark": {
          100: "#404758",
          300: "#000000de",
        },
        "amhp-gray": {
          100: "#fafafa",
          300: "#707070",
        },
      },
    },
  },
  plugins: [],
};
export default config;
