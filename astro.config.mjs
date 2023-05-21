import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  vite: {
    ssr: {
      noExternal: ["flowbite"]
    }
  },
  output: "server",
  adapter: netlify()
});

