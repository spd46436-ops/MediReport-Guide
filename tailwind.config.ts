import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#102A43", mint: "#00B894", mist: "#F3FAF8", coral: "#F97360" }, boxShadow: { lift: "0 24px 70px rgba(16,42,67,.12)" } } },
  plugins: [],
} satisfies Config;
