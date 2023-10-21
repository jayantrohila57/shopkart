/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
