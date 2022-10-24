const rewrites = async () => {
  return [
    {
      source: "/mon-dossier",
      destination: "/my-directory",
    },
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites,
};

module.exports = nextConfig;
