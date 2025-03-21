
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/bbienz/Visual Studio Code/PhoenixTheatrical-Site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/bbienz/Visual Studio Code/PhoenixTheatrical-Site/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/bbienz/Visual Studio Code/PhoenixTheatrical-Site/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bbienz/Visual Studio Code/PhoenixTheatrical-Site/src/pages/index.js"))
}

