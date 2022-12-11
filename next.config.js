/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    runtimeCaching,
  },
  images: {
    domains: ['localhost:4000', 'images.unsplash.com'],
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  trailingSlash: true,
})

module.exports = nextConfig
