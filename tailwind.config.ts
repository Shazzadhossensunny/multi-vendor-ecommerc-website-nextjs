import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(0 0% 89.8%)",
        input: "hsl(0 0% 89.8%)",
        ring: "hsl(0 0% 3.9%)",
        background: "hsl(0 0% 93%)", // #ECECEC
        foreground: "hsl(0 0% 3.9% / 0.6)", // rgba(15, 14, 14, 0.60)
        primary: {
          DEFAULT: "hsl(0 0% 3.9%)", // #0F0E0E
          foreground: "hsl(0 0% 93%)", // #ECECEC
        },
        secondary: {
          DEFAULT: "hsl(222 83% 60%)", // #4361EE
          foreground: "hsl(0 0% 100%)",
        },
        destructive: {
          DEFAULT: "hsl(342 85% 60%)", // #EF476F
          foreground: "hsl(0 0% 93%)", // #ECECEC
        },
        muted: {
          DEFAULT: "hsl(0 0% 87%)", // #DEDEDE
          foreground: "hsl(0 0% 45%)", // #737373
        },
        accent: {
          DEFAULT: "hsl(173 58% 39%)", // #2A9D8F
          foreground: "hsl(0 0% 93%)", // #ECECEC
        },
        popover: {
          DEFAULT: "hsl(0 0% 93%)", // #ECECEC
          foreground: "hsl(0 0% 3.9% / 0.6)", // rgba(15, 14, 14, 0.60)
        },
        card: {
          DEFAULT: "hsl(0 0% 96%)", // #F5F5F5
          foreground: "hsl(0 0% 3.9% / 0.6)", // rgba(15, 14, 14, 0.60)
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
