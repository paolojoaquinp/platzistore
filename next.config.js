/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com','api.lorem.space','vuzoon.com','www.complementosdelcafe.com'],
  }
/*   swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://google.com',
        permanent: true,
      }
    ]
  } */
}

module.exports = nextConfig
