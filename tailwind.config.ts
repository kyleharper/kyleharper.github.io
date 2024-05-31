import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
