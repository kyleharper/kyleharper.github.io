import mdx from "@mdx-js/rollup";
import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import recmaExportFilepath from "recma-export-filepath";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		mdx({
			/* jsxImportSource: …, otherOptions… */
			recmaPlugins: [recmaExportFilepath],
		}),
		remixCloudflareDevProxy(),
		remix(),
		tsconfigPaths(),
	],
});
