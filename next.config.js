/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "cloudinary",
    path: "https://github.com/crys-cross/landingpage-a/tree/main/assets",
  },
};

module.exports = nextConfig;
