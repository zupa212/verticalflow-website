/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/terracube',
        destination: '/',
        permanent: true,
      },
      {
        source: '/agency',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/old',
        destination: '/',
        permanent: true,
      },
      {
        source: '/branding',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/video',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/web',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/digital',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;