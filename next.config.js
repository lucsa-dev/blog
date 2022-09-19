/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_REPO_NAME,
    assetPrefix: process.env.NEXT_PUBLIC_REPO_NAME
}
module.exports = nextConfig