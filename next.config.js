/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp']
  },
  i18n: {
    locales: ["th"],
    defaultLocale: "th",
  },
}

module.exports = nextConfig
