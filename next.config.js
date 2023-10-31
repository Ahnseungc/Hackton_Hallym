/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://hallym-hack-images.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
