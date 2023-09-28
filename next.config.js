/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjswp.dreamhosters.com'
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com'
      }
    ]
  }
}

module.exports = nextConfig
