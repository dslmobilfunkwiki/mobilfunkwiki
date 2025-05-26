# Mobilfunk Wiki

[![Built with Starlight](https://astro.badg.es/starlight/built-with-starlight.svg)](https://starlight.astro.build)

Mobilfunk Wiki is a comprehensive knowledge base dedicated to German mobile network providers, services, and related topics. The live site can be accessed at [https://mobilfunk.wiki](https://mobilfunk.wiki).

## About the Project

This project aims to provide clear and detailed information covering a range of mobile communication topics relevant to Germany. This includes:

*   **General Information:** Fundamental concepts and FAQs related to mobile networks and services.
*   **Network Providers:** In-depth details about major German network operators (e.g., Telekom, Vodafone, O2) and other providers.
*   **Prepaid Plans:** Information on various prepaid tariffs, their features, and providers.
*   **Postpaid Plans:** Information on contract-based postpaid tariffs, their features, and providers.

The content is structured to be easily navigable and informative for users seeking to understand the German mobile landscape.

## Tech Stack

The Mobilfunk Wiki is built using modern web technologies:

*   **[Astro](https://astro.build/):** The web framework for building fast, content-focused websites.
*   **[Starlight](https://starlight.astro.build/):** An Astro-based documentation theme used for the site's structure and features.
*   **[TailwindCSS](https://tailwindcss.com/):** A utility-first CSS framework for styling.
*   **[MDX](https://mdxjs.com/):** Used for creating content, allowing the use of JSX components within Markdown.

## Project Structure

This project is a standard [Starlight](https://starlight.astro.build/) project. You can learn more about Starlight in its [documentation](https://starlight.astro.build/).

The main content of the wiki is located in the `src/content/docs/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Installs dependencies                        |
| `pnpm dev`        | Starts local dev server at `localhost:9000`  |
| `pnpm build`      | Build your production site to `./dist/`      |
| `pnpm preview`    | Preview your build locally, before deploying |

## Repository

The source code for Mobilfunk Wiki is hosted on GitHub: [https://github.com/dslmobilfunkwiki/mobilfunkwiki](https://github.com/dslmobilfunkwiki/mobilfunkwiki)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is currently unlicensed.
