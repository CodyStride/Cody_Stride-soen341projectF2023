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
    baseUrl: "http://localhost:3000",
  },
});
