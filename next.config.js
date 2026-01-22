/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages deployment
  // If your repository is named 'username.github.io', leave basePath empty
  // If your repository has a different name, set basePath to '/repository-name'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig

