/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
//   NEXT_PUBLIC_ApiDomain:    process.env.NEXT_PUBLIC_ApiDomain,
//   NEXT_PUBLIC_ImageDomain:  process.env.NEXT_PUBLIC_ImageDomain
// }
module.exports = {
  noImplicitAny:false,
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
    NEXT_PUBLIC_ApiDomain:    process.env.NEXT_PUBLIC_ApiDomain,
    NEXT_PUBLIC_ImageDomain:  process.env.NEXT_PUBLIC_ImageDomain 
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
    NEXT_PUBLIC_ImageDomain:  process.env.NEXT_PUBLIC_ImageDomain,
    staticFolder: '/static',
  }
}

//module.exports = nextConfig;
