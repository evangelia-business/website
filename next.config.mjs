/** @type {import('next').NextConfig} */
const nextConfig = {
    // Specify the custom directory structure
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    experimental: {
        appDir: true,
    },
    // Add the basePath property
    basePath: '/src',
}

export default nextConfig
