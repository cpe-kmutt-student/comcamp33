/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platform-lookaside.fbsbx.com']
  },
  i18n: {
    locales: ["th"],
    defaultLocale: "th",
  },
}

module.exports = nextConfig
