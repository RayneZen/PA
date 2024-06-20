/** @type {import('next').NextConfig} */

export const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sangw.in', 'localhost', 'picsum.photos','192.168.86.242'], // <== Domain name
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: '/*/**',
      },
    ],
  }
}

export default nextConfig;
