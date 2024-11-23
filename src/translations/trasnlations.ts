// translations.ts
type Translation = {
    [key: string]: {
      nav: {
        collections: string;
        about: string;
        contact: string;
        search: string;
        searchPlaceholder: string;
        noResults: string;
      };
      hero: {
        collection: string;
        checkmateName: string;
        discoverMore: string;
        shopNow: string;
      };
      collections: {
        title: string;
        viewCollection: string;
        timelessElegance: {
          title: string;
          description: string;
        };
        urbanAvantGarde: {
          title: string;
          description: string;
        };
        minimalistEssence: {
          title: string;
          description: string;
        };
      };
      about: {
        title: string;
        description: string[];
        stats: {
          experience: string;
          years: string;
          clients: string;
          satisfiedClients: string;
          designs: string;
          exclusiveDesigns: string;
        };
      };
      contact: {
        title: string;
        info: {
          title: string;
          description: string;
        };
        form: {
          fullName: string;
          email: string;
          phone: string;
          subject: string;
          message: string;
          sending: string;
          send: string;
        };
      };
      footer: {
        description: string;
        contact: string;
        followUs: string;
        location: string;
        address: string;
        viewRoute: string;
        rights: string;
      };
    };
  };
  
  export const translations: Translation = {
    es: {
      nav: {
        collections: "COLECCIONES",
        about: "SOBRE MÍ",
        contact: "CONTACTO",
        search: "Buscar",
        searchPlaceholder: "Buscar colecciones...",
        noResults: "No se encontraron resultados"
      },
      hero: {
        collection: "COLECCIÓN",
        checkmateName: "JAQUE MATE",
        discoverMore: "DESCUBRIR MÁS",
        shopNow: "COMPRAR AHORA"
      },
      collections: {
        title: "COLECCIONES",
        viewCollection: "Ver Colección",
        timelessElegance: {
          title: "Elegancia Atemporal",
          description: "Colección que celebra la sofisticación y el diseño innovador"
        },
        urbanAvantGarde: {
          title: "Vanguardia Urbana",
          description: "Fusión perfecta entre el estilo contemporáneo y la comodidad"
        },
        minimalistEssence: {
          title: "Esencia Minimalista",
          description: "Diseños que destacan por su simplicidad y elegancia"
        }
      },
      about: {
        title: "SOBRE MÍ",
        description: [
          "Soy Herland Salazar, diseñador de moda con una pasión por crear piezas que reflejen la individualidad y elegancia de cada persona. Mi viaje en el mundo de la moda comenzó con un sueño de transformar la forma en que las personas se expresan a través de la ropa.",
          "Mi experiencia en el diseño de moda abarca más de 5 años, durante los cuales he desarrollado un estilo único que combina la elegancia atemporal con toques contemporáneos. Mi enfoque se centra en la calidad, el detalle y la personalización.",
          "Cada diseño que creo es más que una prenda; es una expresión de identidad, una pieza de arte que cobra vida en quien la viste. Mi objetivo es crear no solo ropa, sino experiencias y confianza a través de la moda."
        ],
        stats: {
          experience: "Años de Experiencia",
          years: "5+",
          clients: "500+",
          satisfiedClients: "Clientes Satisfechos",
          designs: "50+",
          exclusiveDesigns: "Diseños Exclusivos"
        }
      },
      contact: {
        title: "CONTACTO",
        info: {
          title: "Información de Contacto",
          description: "Completa el formulario y me pondré en contacto contigo lo antes posible para discutir tu proyecto de diseño personalizado."
        },
        form: {
          fullName: "Nombre Completo",
          email: "Correo Electrónico",
          phone: "Teléfono",
          subject: "Asunto",
          message: "Mensaje",
          sending: "Enviando...",
          send: "Enviar Mensaje"
        }
      },
      footer: {
        description: "Diseño de moda contemporáneo y creativo, creando piezas únicas y sofisticadas.",
        contact: "Contacto",
        followUs: "Síguenos",
        location: "Ubicación",
        address: "Av. 20 de Octubre, La Paz, Bolivia",
        viewRoute: "Ver ruta en Google Maps",
        rights: "Bolivianotech. Todos los derechos reservados."
      }
    },
    en: {
      nav: {
        collections: "COLLECTIONS",
        about: "ABOUT ME",
        contact: "CONTACT",
        search: "Search",
        searchPlaceholder: "Search collections...",
        noResults: "No results found"
      },
      hero: {
        collection: "COLLECTION",
        checkmateName: "CHECKMATE",
        discoverMore: "DISCOVER MORE",
        shopNow: "SHOP NOW"
      },
      collections: {
        title: "COLLECTIONS",
        viewCollection: "View Collection",
        timelessElegance: {
          title: "Timeless Elegance",
          description: "Collection that celebrates sophistication and innovative design"
        },
        urbanAvantGarde: {
          title: "Urban Avant-Garde",
          description: "Perfect fusion between contemporary style and comfort"
        },
        minimalistEssence: {
          title: "Minimalist Essence",
          description: "Designs that stand out for their simplicity and elegance"
        }
      },
      about: {
        title: "ABOUT ME",
        description: [
          "I'm Herland Salazar, a fashion designer with a passion for creating pieces that reflect the individuality and elegance of each person. My journey in the fashion world began with a dream of transforming the way people express themselves through clothing.",
          "My experience in fashion design spans over 5 years, during which I've developed a unique style that combines timeless elegance with contemporary touches. My focus is on quality, detail, and customization.",
          "Each design I create is more than a garment; it's an expression of identity, a piece of art that comes to life in who wears it. My goal is to create not just clothing, but experiences and confidence through fashion."
        ],
        stats: {
          experience: "Years of Experience",
          years: "5+",
          clients: "500+",
          satisfiedClients: "Satisfied Clients",
          designs: "50+",
          exclusiveDesigns: "Exclusive Designs"
        }
      },
      contact: {
        title: "CONTACT",
        info: {
          title: "Contact Information",
          description: "Fill out the form and I'll get back to you as soon as possible to discuss your custom design project."
        },
        form: {
          fullName: "Full Name",
          email: "Email",
          phone: "Phone",
          subject: "Subject",
          message: "Message",
          sending: "Sending...",
          send: "Send Message"
        }
      },
      footer: {
        description: "Contemporary and creative fashion design, creating unique and sophisticated pieces.",
        contact: "Contact",
        followUs: "Follow Us",
        location: "Location",
        address: "20 de Octubre Ave, La Paz, Bolivia",
        viewRoute: "View route on Google Maps",
        rights: "Bolivianotech. All rights reserved."
      }
    }
  };