// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// starlight plugins
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightVersions from "starlight-versions";
import cloudflare from "@astrojs/cloudflare";
import emoji from "remark-emoji";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      lastUpdated: true,
      plugins: [
        starlightAutoSidebar(),
        starlightHeadingBadges(),
        starlightVersions({
          versions: [{ slug: "0.0.2" }, { slug: "0.0.1" }],
        }),
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      title: "Mobilfunk Wiki",
      defaultLocale: "root", // optional
      locales: {
        root: {
          label: "Deutsch",
          lang: "de", // lang is required for root locales
        },
        en: {
          label: "English",
          lang: "en", // lang is required for root locales
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dslmobilfunkwiki/dslwiki",
        },
      ],
      sidebar: [
        {
          label: "Allgemeine Informationen",
          autogenerate: { directory: "allgemein" },
        },
        {
          label: "Netzbetreiber & Provider",
          autogenerate: { directory: "providers" },
        },
        {
          label: "Anbieter & Marken",
          autogenerate: { directory: "anbieter" },
        },
      ],
    }),
    mdx({
      // `syntaxHighlight` inherited from Markdown

      // Markdown `remarkPlugins` ignored,
      // only `remarkPlugin2` applied.
      remarkPlugins: [emoji],
      // `gfm` overridden to `false`
      gfm: true,
    }),
    yeskunallumami({
      id: "9f05e666-265a-4e30-b90c-14e60c0cdc36",
      endpointUrl: "https://stats.dsl.wiki/",
    }),
  ],

  adapter: cloudflare({
    imageService: "passthrough",
  }),
});
// https://astro.build/config
