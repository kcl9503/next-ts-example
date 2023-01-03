// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require('next-with-less')
const nextConfig = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {},
})

module.exports = nextConfig
