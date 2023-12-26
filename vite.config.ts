import { relative } from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hittheroad',
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        sw: './src/sw/index.ts',
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === 'index'
            ? 'assets/[name].[hash].js'
            : '[name].js';
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [
          // Image loader for loading image asset in the
          // vanilla-extract .css.ts style file.
          {
            name: 'image-loader',
            setup(build) {
              build.onLoad(
                {
                  filter: /[.](svg|png|jpe?g|gif|webp)$/,
                },
                ({ path }) => ({
                  loader: 'js',
                  contents: `export default '/${relative(
                    build.initialOptions.absWorkingDir ?? '/',
                    path,
                  ).replace(/\\/g, '/')}';`,
                }),
              );
            },
          },
        ],
      },
    }),
    {
      name: 'async-css',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          return html.replace(
            /(?![\r\n])[\s]*?<link[^<>]?rel="stylesheet"[^<>]*?\/?>/g,
            (cssTag) => {
              return [
                cssTag.replace('rel="stylesheet"', 'rel="preload" as="style"'),
                cssTag.replace(
                  /<link rel="stylesheet"/,
                  `<link rel="stylesheet" media="print" onload="this.media='all';"`,
                ),
                cssTag
                  .replace('>', '></noscript>')
                  .replace(/<link/, '<noscript><link'),
              ].join('\n');
            },
          );
        },
      },
    },
  ],

  server: {
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
});
