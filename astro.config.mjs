// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Prompt",
        cssVariable: "--font-prompt",
      },
      {
        provider: "local",
        name: "Britannic",
        cssVariable: "--font-britannic",
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/fonts/britannic.woff"],
          },
        ],
      },
    ],
  },

  image: {
    domains: ["images.ctfassets.net"],
  },

  integrations: [icon()],
});
