/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the custom directory structure
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds (next build)
  },
  // Add the basePath property
  basePath: '/src',
}

export default nextConfig
