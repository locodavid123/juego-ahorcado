/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: ["192.168.1.3", "localhost"],
};

module.exports = nextConfig;