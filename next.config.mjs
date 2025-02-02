import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['play-lh.googleusercontent.com', 'lh3.googleusercontent.com', '*.com', 'png.pngtree.com'], // Add the external domain here
  },
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
  },
};


export default withNextIntl(nextConfig);