/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you are using next/image, you must disable image optimization:
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
