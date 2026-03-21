// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// starlight plugins
import starlightHeadingBadges from "starlight-heading-badges";
import emoji from "remark-emoji";
import starlightSidebarTopics from "starlight-sidebar-topics";
import {
  remarkExtendedTable,
  extendedTableHandlers,
} from "remark-extended-table";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    starlight({
      defaultLocale: "de",
      pagination: false,
      editLink: {
        baseUrl: "https://github.com/dslmobilfunkwiki/dslwiki/edit/main/",
      },
      components: {
        // Override the default `Sidebar` component with a custom one.
        Sidebar: "./src/components/Sidebar.astro",
      },
      lastUpdated: true,
      plugins: [
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
            label: "Netzbetreiber & Netz",
            link: "/providers/",
            icon: "seti:broadcast",
            items: [
              {
                label: "Netzbetreiber & Netz",
                autogenerate: { directory: "providers" },
              },
            ],
          },
          {
            label: "Prepaid Tarife",
            link: "/prepaid/",
            icon: "seti:credit-card",
            items: [
              {
                label: "Prepaid Tarife",
                autogenerate: { directory: "prepaid" },
              },
            ],
          },
          {
            label: "Postpaid Verträge",
            link: "/postpaid/",
            icon: "seti:document",
            items: [
              {
                label: "Postpaid Verträge",
                autogenerate: { directory: "postpaid" },
              },
            ],
          },
        ]),
        starlightHeadingBadges(),
      ],
      title: "DSL Wiki",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dslmobilfunkwiki/dslwiki",
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],
  markdown: {
    // `syntaxHighlight` inherited from Markdown

    // Markdown `remarkPlugins` ignored,
    // only `remarkPlugin2` applied.
    remarkPlugins: [emoji, [remarkExtendedTable, { tableCellPadding: false }]],
    // `gfm` overridden to `true`
    gfm: true,
    remarkRehype: {
      handlers: { ...extendedTableHandlers },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
