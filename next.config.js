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
    domains: ['localhost:4000', 'images.unsplash.com', 'agerba.ba.gov.br', '10.71.246.210:4000'],
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
        hostname: '10.71.246.210',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'agerba.ba.gov.br',
        port: '4000',
        pathname: '/uploads/**',
      },
    ],
  },
  output: 'standalone',
  trailingSlash: true,
})

module.exports = nextConfig
