import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://1blogastro.netlify.app/",
  integrations: [preact()],
});