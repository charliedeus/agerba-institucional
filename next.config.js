/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = nextConfig
