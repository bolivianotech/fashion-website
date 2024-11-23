// src/pages/collections/[id].tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Define el tipo para los datos de la colección
interface CollectionData {
  id: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
}

// Datos de las colecciones
const collections: { [key: string]: CollectionData } = {
  'elegancia-atemporal': {
    id: 'elegancia-atemporal',
    title: 'Elegancia Atemporal',
    description: 'Una colección que celebra la sofisticación y el diseño innovador...',
    images: [
      '/images/cards/card-1.jpg',
      '/images/cards/card-2.jpg',
      '/images/cards/card-3.jpg'
    ],
    features: [
      'Materiales premium importados',
      'Diseños exclusivos',
      'Confección artesanal',
      'Diseños personalizables'
    ]
  },
  'vanguardia-urbana': {
    id: 'vanguardia-urbana',
    title: 'Vanguardia Urbana',
    description: 'Fusión perfecta entre el estilo contemporáneo y la comodidad...',
    images: [
      '/images/cards/card-2.jpg',
      '/images/cards/card-1.jpg',
      '/images/cards/card-3.jpg'
    ],
    features: [
      'Diseños modernos y versátiles',
      'Materiales de alta calidad',
      'Perfecto para el día a día',
      'Estilo único y distintivo'
    ]
  },
  'esencia-minimalista': {
    id: 'esencia-minimalista',
    title: 'Esencia Minimalista',
    description: 'Diseños que destacan por su simplicidad y elegancia...',
    images: [
      '/images/cards/card-3.jpg',
      '/images/cards/card-1.jpg',
      '/images/cards/card-2.jpg'
    ],
    features: [
      'Líneas limpias y elegantes',
      'Paleta de colores neutral',
      'Versatilidad en cada pieza',
      'Atención al detalle'
    ]
  }
};

const CollectionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeImage, setActiveImage] = useState(0);

  // Asegurarse de que el ID es un string
  const collectionId = typeof id === 'string' ? id : '';
  const collection = collections[collectionId];

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Colección no encontrada</p>
          <Link 
            href="/"
            className="text-gray-600 hover:text-black transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            href="/"
            className="group flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Volver</span>
          </Link>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="pt-16"> {/* Ajuste para la nav fija */}
        {/* Sección Hero */}
        <div className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagen principal */}
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={collection.images[activeImage]}
                  alt={collection.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Información */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">{collection.title}</h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {collection.description}
                </p>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Características</h2>
                  <ul className="space-y-3">
                    {collection.features.map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-center space-x-3 hover:translate-x-2 transition-transform"
                      >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"/>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Galería</h2>
          <div className="grid grid-cols-3 gap-4">
            {collection.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg 
                  ${activeImage === index ? 'ring-2 ring-yellow-400' : ''}
                  hover:opacity-90 transition-opacity`}
              >
                <img
                  src={image}
                  alt={`${collection.title} - Vista ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sección CTA */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">¿Interesado en esta colección?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Agenda una cita para ver las piezas en persona y recibir asesoramiento personalizado.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 
                               transition-colors hover:shadow-lg">
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollectionDetail;