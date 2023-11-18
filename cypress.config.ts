import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "9f6qve",
  fixturesFolder: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    baseUrl: "http://localhsot:3000",
  },
});
