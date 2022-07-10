const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://traffic-light-nine.vercel.app/',
    reporter: "mochawesome",
        reporterOptions: {
          reportDir: "cypress/reports",
          reportFilename: "report",
          overwrite: false,
          html: true,
          json: true,
          charts: true
        },
    video: false,
    pageLoadTimeout:40000, 
    chromeWebSecurity: false,
    defaultCommandTimeout:5000,
  }
})
