/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Añade esto para mejor manejo de errores
  onError: async (err, req, res) => {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  },
}

module.exports = nextConfig