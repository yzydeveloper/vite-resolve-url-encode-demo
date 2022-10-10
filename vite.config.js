const fs = require('fs')
const { createVuePlugin } = require('vite-plugin-vue2')

fs.cpSync('packages/ui-components', 'node_modules/@ui/components', { recursive: true })

module.exports = {
  base: './',
  plugins: [
    createVuePlugin()
  ]
}
