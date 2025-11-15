import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		imageService: 'passthrough',
	}),
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		mdx(),
	],
	vite: {
		ssr: {
			external: ['node:buffer', 'node:path', 'node:fs'],
		},
	},
});
