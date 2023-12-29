/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
}

module.exports = nextConfig
