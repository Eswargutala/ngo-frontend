/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@ngo-ecommerce/shared'],

  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Ensure source maps are disabled for production
  productionBrowserSourceMaps: false,

  // Webpack config for monorepo
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },

  // Output configuration
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
};

module.exports = nextConfig;

// touch
