/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   NEXT_PUBLIC_AppDomain:    process.env.NEXT_PUBLIC_AppDomain,
//   NEXT_PUBLIC_ApiDomain:    process.env.NEXT_PUBLIC_ApiDomain,
//   NEXT_PUBLIC_ImageDomain:  process.env.NEXT_PUBLIC_ImageDomain
// }
module.exports = {
  compilerOptions: {
   noImplicitReturns: true,
   noImplicitAny: false,
  },
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
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GAdsenseClient_Square:process.env.NEXT_PUBLIC_GAdsenseClient_Square
  }
}

//module.exports = nextConfig;
