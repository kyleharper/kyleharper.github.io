import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
