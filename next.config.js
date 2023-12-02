/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

module.exports = nextConfig;
