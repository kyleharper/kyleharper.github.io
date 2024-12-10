import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
