/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'i.ytimg.com', 'image.com', 'i9.ytimg.com', 'content-api.cycoserve.com',],
  },
}

webpack: (config, { isServer }) => {
  // Only run this on the server
  if (isServer) {
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.fs = false;
  }

  return config;
},

module.exports = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}


module.exports = nextConfig