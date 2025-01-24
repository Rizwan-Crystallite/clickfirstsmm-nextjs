/** @type {import("tailwindcss").Config} */
import { fontFamily } from "tailwindcss/defaultTheme"

export const darkMode = ["class"]
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  container: {
    center: "true",
    padding: "0.5rem"
  },
  screens: {
    "xs": {
      "max": "576px"
    },
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "xl": "1200px",
    "2xl": "1400px"
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans]
    },
    colors: {
      primary: "#2948FF",
      secondary: "#F6AC00",
      text: "#535353",
      accent: "#F3F3F3"
    },
    keyframes: {
      awards: {
        "0%, 100%": { transform: "translateX(20px)" },
        "50%": { transform: "translateY(-20px)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      }
    },
    animation: {
      "bounce-slow": "bounce 5s linear infinite",
      awards: "awards 3s ease-in-out infinite",
      rotate: "rotate 3s linear infinite",
    },
    listStyleImage: {
      "li-dot": 'url("/li_dot.png")',
      "li-mar": 'url("/li_mar.png")',
    },
  }
}
export const plugins = []