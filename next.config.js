/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  publicRuntimeConfig: {
    favicon: './app/favicon.ico', // اسم ملف الأيقونة في المجلد العام
  },
};

module.exports = nextConfig;
