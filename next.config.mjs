/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the custom directory structure
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    appDir: true, // Enable the app directory feature
  },
}

export default nextConfig
