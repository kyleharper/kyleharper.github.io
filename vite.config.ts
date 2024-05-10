import mdx from '@mdx-js/rollup';
import { vitePlugin as remix } from '@remix-run/dev';
import recmaExportFilepath from 'recma-export-filepath';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    mdx({
      /* jsxImportSource: …, otherOptions… */
      recmaPlugins: [recmaExportFilepath],
    }),
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
