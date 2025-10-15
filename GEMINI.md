
# GEMINI.md

## Project Overview

This is a Next.js and Tailwind CSS project, specifically a blog, based on the "Spotlight" template from Tailwind Plus. It uses MDX for writing articles, which are stored in the `src/app/articles` directory. The project is written in TypeScript.

The main page, located at `src/app/page.tsx`, displays a hero section, social media links, a photo gallery, a list of recent articles, and a newsletter signup form. Articles are dynamically loaded and rendered from MDX files.

## Building and Running

To get started with this project, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the following, replacing `https://example.com` with your site's public URL:
    ```
    NEXT_PUBLIC_SITE_URL=https://example.com
    ```što

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at [http://localhost:3000](http://localhost:3000).

4.  **Build for production:**
    ```bash
    npm run build
    ```

5.  **Start the production server:**
    ```bash
    npm run start
    ```

6.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Framework:** The project is built with [Next.js](https://nextjs.org/).
*   **Styling:** Styling is done with [Tailwind CSS](https://tailwindcss.com/).
*   **Content:** Articles are written in MDX (`.mdx` files) and are located in the `src/app/articles` directory. Each article should be in its own subdirectory with a `page.mdx` file.
*   **Components:** Reusable components are located in the `src/components` directory.
*   **TypeScript:** The project is written in TypeScript.
*   **Linting:** The project uses ESLint for linting.
*   **Formatting:** The project uses Prettier for code formatting.
