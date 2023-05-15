/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        apiEndpoint: process.env.NEXT_API_ENDPOINT
    }
}

module.exports = nextConfig
