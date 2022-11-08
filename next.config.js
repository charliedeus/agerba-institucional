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
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_STRAPI_API_BASEURL,
        pathname: '/uploads/**',
      },
    ],
  },
  output: 'standalone',
  trailingSlash: true,
})

module.exports = nextConfig
