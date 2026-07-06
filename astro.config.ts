import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://matoanselmo.tech",

  integrations: [sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains",
        weights: [300, 400, 500, 700],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
