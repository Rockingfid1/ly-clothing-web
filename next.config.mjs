/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/ly-clothing-web/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
