// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// starlight plugins
import starlightHeadingBadges from "starlight-heading-badges";
import emoji from "remark-emoji";
import starlightSidebarTopics from "starlight-sidebar-topics";

import yeskunallumami from "@yeskunall/astro-umami";

import node from "@astrojs/node";

// https://astro.build/config
// @ts-ignore
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://mobilfunk.wiki",
  integrations: [
    starlight({
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/dslmobilfunkwiki/mobilfunkwiki/edit/main/",
      },
      components: {
        // Override the default `Sidebar` component with a custom one.
        Sidebar: "./src/components/Sidebar.astro",
      },
      plugins: [
        starlightHeadingBadges(),
        starlightSidebarTopics([
          {
            label: "Allgemeine Infos",
            link: "/allgemein/",
            icon: "seti:info",
            items: [
              {
                label: "Allgemeine Infos",
                autogenerate: { directory: "allgemein" },
              },
            ],
          },
          {
            label: "Netzbetreiber & Provider",
            link: "/providers/",
            icon: "seti:info",
            items: [
              {
                label: "Netzbetreiber & Provider",
                autogenerate: { directory: "providers" },
              },
            ],
          },
          {
            label: "Prepaid",
            link: "/prepaid/",
            icon: "seti:info",
            items: [
              {
                label: "Prepaid Anbieter & Marken",
                autogenerate: { directory: "prepaid" },
              },
            ],
          },
          {
            label: "Postpaid",
            link: "/postpaid/",
            icon: "seti:info",
            items: [
              {
                label: "Postpaid Anbieter & Marken",
                autogenerate: { directory: "postpaid" },
              },
            ],
          },
        ]),
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
          href: "https://github.com/dslmobilfunkwiki/mobilfunkwiki",
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
  adapter: node({
    mode: "standalone",
  }),
});
// https://astro.build/config
