import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { Teko } from 'next/font/google';

//const teko = Teko({
//  weight: ['300', '400', '500'],
//  subsets: ['latin'],
//});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Herland Salazar - Diseño de Moda',
  description: 'Colección de moda contemporánea',
  icons: {
    // Favicon tradicional
    icon: [
      { url: '/images/logo/hs-logo.svg', type: 'image/svg+xml' },
    ],
    // Para dispositivos Apple
    apple: [
      { url: '/images/logo/hs-logo.svg', sizes: '180x180' }
    ],
    // Favicon alternativo
    shortcut: '/images/logo/hs-logo.svg',
  },
  // Asegura que el favicon se actualice
  other: {
    'msapplication-TileImage': '/images/logo/hs-logo.svg',
    'msapplication-TileColor': '#000000'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/hs-logo.svg" />
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

