const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [ 'ts', 'tsx', 'md', 'mdx'],
  webpack(config, options) {
    return config
  },
};

module.exports = withVanillaExtract(withMDX(nextConfig));
