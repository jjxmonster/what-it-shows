import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
      layout: {
        runbook: path.join(root, 'src/lib/layouts/runbook.svelte')
      },
      layoutPropForwarding: 'runes'
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '#lib': 'src/lib'
    }
  }
};

export default config;
