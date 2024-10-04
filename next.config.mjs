import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the custom directory structure
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default withNextIntl(nextConfig)
