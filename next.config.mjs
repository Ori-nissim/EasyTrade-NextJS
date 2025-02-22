import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['play-lh.googleusercontent.com', 'lh3.googleusercontent.com', '*', 'png.pngtree.com'], // Add the external domain here
  },

};


export default withNextIntl(nextConfig);