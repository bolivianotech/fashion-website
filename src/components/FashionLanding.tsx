'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, ShoppingBag, Search, Globe, ArrowRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Image from 'next/image';

// Tipos para la búsqueda
type SearchItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

// Configuración de EmailJS
const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};

// Inicializar EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

const FashionLanding = () => {
  // Estados existentes
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Estados para nuevas funcionalidades
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  // Nuevo estado para el idioma
 // const [currentLanguage, setCurrentLanguage] = useState('es');
 
  // Actualizar searchableItems para que coincidan con las rutas dinámicas
  const searchableItems: SearchItem[] = [
    {
      id: 'elegancia-atemporal', // ID debe coincidir con la ruta
      title: "Elegancia Atemporal",
      category: "Colección",
      description: "Colección que celebra la sofisticación y el diseño innovador",
      image: "/images/cards/card-1.jpg",
      link: "/collections/elegancia-atemporal"
    },
    {
      id: 'vanguardia-urbana',
      title: "Vanguardia Urbana",
      category: "Colección",
      description: "Fusión perfecta entre el estilo contemporáneo y la comodidad",
      image: "/images/cards/card-2.jpg",
      link: "/collections/vanguardia-urbana"
    },
    {
      id: 'esencia-minimalista',
      title: "Esencia Minimalista",
      category: "Colección",
      description: "Diseños que destacan por su simplicidad y elegancia",
      image: "/images/cards/card-3.jpg",
      link: "/collections/esencia-minimalista"
    }
  ];

  // Y actualizar el array de collections para que coincida
  const collections = [
    {
      id: 'elegancia-atemporal', // Cambiar de número a string
      title: "Elegancia Atemporal",
      description: "Colección que celebra la sofisticación y el diseño innovador",
      image: "/images/cards/card-1.jpg",
      link: "/collections/elegancia-atemporal"
    },
    {
      id: 'vanguardia-urbana',
      title: "Vanguardia Urbana",
      description: "Fusión perfecta entre el estilo contemporáneo y la comodidad",
      image: "/images/cards/card-2.jpg",
      link: "/collections/vanguardia-urbana"
    },
    {
      id: 'esencia-minimalista',
      title: "Esencia Minimalista",
      description: "Diseños que destacan por su simplicidad y elegancia",
      image: "/images/cards/card-3.jpg",
      link: "/collections/esencia-minimalista"
    }
  ];

  // Manejadores de eventos
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchableItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_email: 'jim@boliviantech.com'
        }
      );

      alert('¡Mensaje enviado correctamente!');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AÑADIR ESTOS DOS NUEVOS useEffect AQUÍ
  // Efecto para cargar el idioma guardado al iniciar
//  useEffect(() => {
//    const savedLanguage = localStorage.getItem('preferredLanguage');
//    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
//      setCurrentLanguage(savedLanguage);
//    }
//  }, []);

  // Efecto para guardar el idioma cuando cambie
  //useEffect(() => {
  //  localStorage.setItem('preferredLanguage', currentLanguage);
  //}, [currentLanguage]);

  
  if (!mounted) return null;

  return (
    <div className="min-h-screen">

{/* parte 2*/}

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

      {/* Navbar actualizado con búsqueda */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative w-12 h-12">
            <img
              src="/images/logo/hs-logo.svg"
              alt="Herlan Salazar"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>

        {/* Enlaces desktop */}
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

        {/* Iconos y funcionalidades */}
        <div className="flex items-center space-x-4">
          {/* Búsqueda */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="group relative"
              title="Buscar"
            >
              <Search className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
            </button>
            
            {/* Panel de búsqueda */}
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-md shadow-lg">
                <div className="p-4">
                  {/* Barra de búsqueda */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar colecciones..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => handleSearch('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  {/* Resultados de búsqueda */}
                  {searchQuery && (
                   // En la sección de resultados de búsqueda
                    <div className="space-y-4">
                      {searchResults.map((item) => (
                        <Link
                          key={item.id}
                          href={`/collections/${item.id}`} // Actualizar el link para que coincida con las rutas dinámicas
                          className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <div className="relative w-16 h-16">
                            <div className="relative w-full h-full">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="64px"
                                className="object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Otros iconos */}
          <Globe className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
          <ShoppingBag className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />

          {/* Menú móvil */}
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

{/*parte 3 en la versión anterior acá salia un Video de Fondo */}

{/* Hero Section */}
<section className="min-h-screen flex items-center justify-center px-4">
<div 
  className="text-center transform"
  style={{
    transform: `translateY(${scrollY * 0.3}px)`
  }}
>
  {/*<h1 className="text-6xl md:text-8xl font-bold text-white mb-8">*/}
  <h1 className="mb-8 relative inline-flex flex-col items-start">
      <div className="flex items-center">
        <span className="text-9xl text-white leading-none font-light pr-2">J</span> {/* Añadido pr-6 */}
        <div className="flex flex-col -ml-2"> {/* Ajustado margen negativo */}
          <span className="text-6xl text-white tracking-[0.3em] mb-[-0.25rem] font-light translate-y-2">AQUE</span>
          {/* Añadido translate-y-2 para alinear mejor verticalmente */}
          <span className="text-6xl text-white tracking-[0.3em] font-light">MATE</span>
        </div>
      </div>
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
        <Image
          src={collection.image}
          alt={collection.title}
          width={500}  // Define un ancho base
          height={667} // Mantiene el aspect ratio 3:4
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
            <Link 
              href={collection.link}
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors group"
            >
              <span>Ver Colección</span>
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

{/* parte 4*/}

{/* Sección Sobre Mí */}
<section id="sobremi" className="relative z-10 bg-black text-white py-24">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Imagen del diseñador */}
      <div className="relative aspect-[3/4] overflow-hidden"> {/* Mantén el contenedor con aspect ratio */}
        <div className="relative w-full h-full"> {/* Contenedor adicional para Image con fill */}
          <Image
            src="/images/about/herlan-profile.jpg"
            alt="Herlan Salazar"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority // Como es una imagen importante, la cargamos con prioridad
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

    {/* Contenido */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-8">SOBRE MÍ</h2>
      <div className="space-y-4 text-gray-300">
        <p>
          Soy Herlan Salazar, diseñador de moda con una pasión por crear 
          piezas que reflejen la individualidad y elegancia de cada persona.
          Mi viaje en el mundo de la moda comenzó con un sueño de transformar
          la forma en que las personas se expresan a través de la ropa.
        </p>
        
        <p>
          Mi experiencia en el diseño de moda abarca más de 5 años, durante
          los cuales he desarrollado un estilo único que combina la elegancia
          atemporal con toques contemporáneos. Mi enfoque se centra en la
          calidad, el detalle y la personalización.
        </p>
        
        <p>
          Cada diseño que creo es más que una prenda; es una expresión de
          identidad, una pieza de arte que cobra vida en quien la viste.
          Mi objetivo es crear no solo ropa, sino experiencias y confianza
          a través de la moda.
        </p>
      </div>

      {/* Estadísticas/Logros */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <span className="block text-3xl font-bold text-yellow-400">5+</span>
          <span className="text-sm text-gray-400">Años de Experiencia</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-yellow-400">500+</span>
          <span className="text-sm text-gray-400">Clientes Satisfechos</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-bold text-yellow-400">50+</span>
          <span className="text-sm text-gray-400">Diseños Exclusivos</span>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

{/* Sección de Contacto */}
<section id="contacto" className="relative z-10 bg-white py-24">
<div className="max-w-7xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-16">CONTACTO</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Información de Contacto */}
    <div className="bg-black p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
      <div className="space-y-6">
        <p className="text-gray-300">
          Completa el formulario y me pondré en contacto contigo lo antes posible para 
          discutir tu proyecto de diseño personalizado.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>herlansalazar6@gmail.com</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+591 60960079</span>
          </div>
        </div>
      </div>
    </div>

    {/* Formulario */}
    <div className="bg-gray-50 p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
      </form>
    </div>
  </div>
</div>
</section>

{/* parte 5*/}

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
          alt="Herlan Salazar"
          width={48}  // añadir width explícito
          height={48} // añadir height explícito
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
          <a href="https://wa.me/59160960079" className="hover:text-white transition-colors">
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

                {/* Google Maps con zoom mejorado y detalles */}
                <div>
              <h3 className="text-lg font-bold mb-4">Ubicación</h3>
              <div className="space-y-2">
                {/* Mapa con zoom aumentado y marcador */}
                <div className="w-full h-[250px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.2667471819945!2d-68.14749492390185!3d-16.523078042466744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21a37821f699%3A0x3f7f50ba0f72ec91!2sHS%20Herlan%20Salazar!5e0!3m2!1ses!2sbo!4v1699849134108!5m2!1ses!2sbo&zoom=19&markers=color:red%7C-16.523078,-68.147495&maptype=roadmap&style=element:labels|visibility:on|element:geometry.stroke|visibility:on|element:road|visibility:on"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
                {/* Dirección y coordenadas */}
                <div className="text-gray-400 text-sm">
                  <p>Av. 20 de Octubre, La Paz, Bolivia</p>
                  <p className="text-xs opacity-75">
                    Lat: -16.523078, Long: -68.147495
                  </p>
                  <p className="mt-2 text-yellow-400 hover:text-yellow-300">
                    <a 
                      href="https://maps.app.goo.gl/h1Fj72HKSjHTxFwV7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span>Ver ruta en Google Maps</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

    {/* Copyright */}
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Bolivianotech. Todos los derechos reservados.</p>
    </div>
  </div>
  </footer>
  </div>
  );
};

export default FashionLanding;

