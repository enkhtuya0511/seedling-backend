/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    PRIVATEKEY: process.env.PRIVATEKEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  // images: {
  //   domains: ["firebasestorage.googleapis.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
