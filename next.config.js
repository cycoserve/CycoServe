/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'i.ytimg.com', 'image.com', 'i9.ytimg.com'],
  },
}

module.exports = nextConfig