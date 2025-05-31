/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#00c3c7",
        // primary: "#ebbe2d",
        primary: "#19284f",
        "primary-foreground": "#ffffff",

        // secondary: "#eb1e44",
        secondary: "#F2C36F",
        "secondary-foreground": "#000000",
        
        destructive: "#ff0000",
        "destructive-foreground": "#ffffff",
        
        foreground: "#000000",
        background: "#ffffff",
        border: "#e2e8f0",
        accent: "#f1f5f9",
        "accent-foreground": "#0f172a",
        card: "#ffffff",
        "card-foreground": "#000000",
        "muted-foreground": "#64748b",
        ring: "#19284f",
        
        dark: "#ffcf22",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
