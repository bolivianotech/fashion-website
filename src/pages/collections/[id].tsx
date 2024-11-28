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
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        <Link 
          href="/"
          className="flex items-center text-gray-800 hover:text-black transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Volver</span>
        </Link>
      </div>
    </nav>

    <div className="pt-16"> 
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contenedor de imagen significativamente reducido */}
          <div className="w-full flex justify-center">
            <div className="w-[25%] sm:w-[35%] md:w-[25%]"> {/* Reducido significativamente */}
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={collection.images[0]}
                  alt={collection.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ maxWidth: '100%', height: 'auto' }} // Asegurar que la imagen no exceda el contenedor
                />
              </div>
            </div>
          </div>

          {/* Columna de información más compacta */}
          <div className="sticky top-24 space-y-4 max-w-md">
            <div>
              <h1 className="text-xl font-bold mb-2">{collection.title}</h1>
              <p className="text-gray-600 text-sm">{collection.description}</p>
            </div>

            <div className="py-3 border-y border-gray-200">
              <h2 className="font-medium mb-3 text-sm">Características</h2>
              <ul className="space-y-2">
                {collection.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-1 h-1 bg-black rounded-full mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3">
              <button className="w-full bg-black text-white px-4 py-2 rounded-md 
                               hover:bg-gray-900 transition-all duration-300 
                               text-sm font-medium">
                Solicitar Información
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Recibe asesoramiento personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default CollectionDetail;