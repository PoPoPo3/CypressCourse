const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: "**/2-advanced-examples/*",
    excludeSpecPattern: "**/1-getting-started/*",
    baseUrl: "https://rocknrolls23.ru/"
  }
})