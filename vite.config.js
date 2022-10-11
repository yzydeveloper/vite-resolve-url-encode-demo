const fs = require('fs')
const { createVuePlugin } = require('vite-plugin-vue2')

// Suppose this is a dependency that is not packaged and has been published
fs.cpSync('packages/ui-components', 'node_modules/@ui/components', { recursive: true })

module.exports = {
  base: './',
  plugins: [
    createVuePlugin()
  ]
}
