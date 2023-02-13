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
    domains: [
      'localhost',
      '200.187.9.138',
      'images.unsplash.com',
      'agerba.ba.gov.br',
    ],
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
        hostname: '200.187.9.138',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '200.187.9.138',
        pathname: '/**',
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
  // assetPrefix: 'http://localhost.com:3000',
})

module.exports = nextConfig
