'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, ShoppingBag, Search, Globe, ArrowRight } from 'lucide-react';

const FashionLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      title: "Elegancia Atemporal",
      description: "Colección que celebra la sofisticación y el diseño innovador",
      image: "/images/cards/card-1.jpg",
      link: "#coleccion1"
    },
    {
      id: 2,
      title: "Vanguardia Urbana",
      description: "Fusión perfecta entre el estilo contemporáneo y la comodidad",
      image: "/images/cards/card-2.jpg",
      link: "#coleccion2"
    },
    {
      id: 3,
      title: "Esencia Minimalista",
      description: "Diseños que destacan por su simplicidad y elegancia",
      image: "/images/cards/card-3.jpg",
      link: "#coleccion3"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

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
            <div className="relative w-12 h-12">
              <img
                src="/images/logo/hs-logo.svg"
                alt="Herland Salazar"
                className="w-full h-full object-contain brightness-0 invert"
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

      {/* Sección de Colecciones */}
      <section id="colecciones" className="min-h-screen bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-16">COLECCIONES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeCard === index ? 'scale-110 blur-sm' : ''
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300 ${
                    activeCard === index ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{collection.description}</p>
                    <a 
                      href={collection.link}
                      className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
                    >
                      Ver Colección <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                {/* Overlay de interacción */}
                <div className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${
                  activeCard === index ? 'border-white/30 scale-95' : ''
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionLanding;