'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, ShoppingBag, Search, Globe } from 'lucide-react';
import Image from 'next/image';

const FashionLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Video de Fondo */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navbar Fijo */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo siempre visible */}
            <div className="relative w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <Image
                src="/images/logo/hs_logo.svg"
                alt="Herland Salazar"
                width={40}
                height={40}
                className="brightness-0 invert"
                priority
              />
            </div>

            {/* Enlaces de navegación - visibles en desktop */}
            <div className="hidden md:flex space-x-6">
              <a href="#colecciones" className="text-white hover:text-gray-200 transition-colors">
                COLECCIONES
              </a>
              <a href="#sobremi" className="text-white hover:text-gray-200 transition-colors">
                SOBRE MÍ
              </a>
              <a href="#contacto" className="text-white hover:text-gray-200 transition-colors">
                CONTACTO
              </a>
            </div>

            {/* Iconos y Menú Móvil */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Search className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
                <Globe className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
                <ShoppingBag className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Menú móvil desplegable */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md">
              <div className="px-4 py-3 space-y-3">
                <a href="#colecciones" className="block text-white hover:text-gray-200">
                  COLECCIONES
                </a>
                <a href="#sobremi" className="block text-white hover:text-gray-200">
                  SOBRE MÍ
                </a>
                <a href="#contacto" className="block text-white hover:text-gray-200">
                  CONTACTO
                </a>
                <div className="flex space-x-4 pt-3 border-t border-gray-700">
                  <Search className="h-6 w-6 text-white cursor-pointer" />
                  <Globe className="h-6 w-6 text-white cursor-pointer" />
                  <ShoppingBag className="h-6 w-6 text-white cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div 
          className="text-center transform"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            COLECCIÓN
            <br />
            OTOÑO
          </h1>
          <div className="space-y-4">
            <button className="w-48 bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
              DESCUBRIR MÁS
            </button>
            <button className="w-48 block mx-auto border-2 border-white text-white px-8 py-3 hover:bg-white/10 transition-colors">
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </section>

      {/* Sección Temporal para Scroll */}
      <section className="min-h-screen bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-8">PRÓXIMAMENTE</h2>
          <p className="text-center text-gray-600">
            Aquí irán las colecciones y más contenido...
          </p>
        </div>
      </section>
    </div>
  );
};

export default FashionLanding;