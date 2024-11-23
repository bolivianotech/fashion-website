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
  // Añade esto para ignorar errores de TypeScript en producción si es necesario
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig