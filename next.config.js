/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: process.env.REPO_NAME,
    assetPrefix: process.env.REPO_NAME
}
module.exports = nextConfig