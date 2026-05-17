// @ts-check
import { defineConfig } from 'astro/config';

// When deploying via `wix release`, the Wix CLI adds its own integration.
// For local builds/previews, use: npm run build
export default defineConfig({
  output: 'static',
});
