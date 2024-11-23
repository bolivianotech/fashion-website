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
                className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out
                    ${activeCard === index ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
                />

                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                    transition-opacity duration-500 ease-in-out
                    ${activeCard === index ? 'opacity-90' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 overflow-hidden">
                  <h3 
                    className={`text-2xl font-bold text-white mb-3 transform transition-all duration-500 ease-out
                      ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {collection.title}
                  </h3>

                  <p 
                    className={`text-white/90 text-base mb-4 transform transition-all duration-500 delay-100 ease-out
                      ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {collection.description}
                  </p>

                  <div 
                    className={`transform transition-all duration-500 delay-200 ease-out
                      ${activeCard === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    <a 
                      href={collection.link}
                      className="inline-flex items-center text-white hover:text-yellow-400 transition-colors group"
                    >
                      <span>Ver Colección</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Grid del Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo y Descripción */}
            <div className="space-y-4">
              <div className="w-16 h-16">
                <img
                  src="/images/logo/hs-logo.svg"
                  alt="Herland Salazar"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Diseño de moda contemporáneo y creativo,<br />
                creando piezas únicas y sofisticadas.
              </p>
            </div>

            {/* Información de Contacto */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:herlansalazar6@gmail.com" className="hover:text-white transition-colors">
                    herlansalazar6@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+59160960079" className="hover:text-white transition-colors">
                    +591 60960079
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {/* TikTok */}
                <a 
                  href="https://tiktok.com/@herlansalazar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/herlan.salazar.92?mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://instagram.com/hsherlansalazar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-lg font-bold mb-4">Ubicación</h3>
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0668033355755!2d-68.14749492390185!3d-16.523078042466744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21a37821f699%3A0x3f7f50ba0f72ec91!2sHS%20Herlan%20Salazar!5e0!3m2!1ses-419!2sbo!4v1699849134108!5m2!1ses-419!2sbo"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Herland Salazar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionLanding;