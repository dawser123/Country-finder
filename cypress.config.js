const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://country-finder-sigma-two.vercel.app/',
		includeShadowDom: true,
		chromeWebSecurity: true,
  },
});
