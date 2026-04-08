/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'roofrepairchicagonow.com' }],
        destination: 'https://www.roofrepairchicagonow.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Allow AI crawlers to read content
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
