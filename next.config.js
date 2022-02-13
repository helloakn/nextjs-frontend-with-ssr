/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  NEXT_PUBLIC_AppDomain:process.env.NEXT_PUBLIC_AppDomain,
  NEXT_PUBLIC_ApiDomain:process.env.NEXT_PUBLIC_ApiDomain,
  NEXT_PUBLIC_ImageDomain:process.env.NEXT_PUBLIC_ImageDomain
}

module.exports = nextConfig
