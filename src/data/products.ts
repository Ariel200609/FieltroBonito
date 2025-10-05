export interface Product {
  id: number;
  name: string;
  category?: 'polaroids' | 'stickers' | 'cuadros' | 'otros';
  price?: number;
  image: string;
  description: string;
  featured?: boolean;
}

// Importar imágenes de productos
import img1 from '../assets/images/productos/f1 (10).jpg';


export const products: Product[] = [
  // Polaroids (7 productos - usando tus imágenes)
  {
    id: 1,
    name: "Cuadro Deco Souvenirs",
    image: img1,
    description: "SOUVENIRS PERSONALIZADOS DE VIDRIO Y MADERA medida 10x13cm",
    featured: true
  },
  {
    id: 2,
    name: "Cuadro",
    image: img1,
    description: "Ideal para souvenires de boda, cumpleaños, etc.",
    featured: true
  },
  {
    id: 3,
    name: "Tu Historia en Fotos",
    image: img1,
    description: "Personaliza tu cuadro con fotos de tus recuerdos"
  },
  {
    id: 4,
    name: "Polaroid Iman-Souvenir,6 unidades",
    image: img1,
    description: "Se hace precio por mayor!"
  },
  {
    id: 5,
    name: "Cuadro de Madera Barnizada con vidrio",
    image : img1,
    description: "con frases o simple"
  },
  {
    id: 6,
    name: "Polaroid 8x5, 12 unidades",
    image: img1,
    description: "Llevando mas cantidad el precio es menor!",
    featured: true
  },
  {
    id: 7,
    name: "Polaroid clásicas 10x10",
    image: img1,
    description: "llevando mas cantidad el precio es menor!"
  },

  // Stickers (6 productos)
  {
    id: 8,
    name: "Polar scuare 9x8 6 unidades",
    image: img1,
    description: "6 unidades,consultar por combos!."
  },
  {
    id: 9,
    name: "Polaroid 10x7 8 unidades",
    image: img1,
    description: "llevando mas cantidad el precio es menor!"
  },
  {
    id: 10,
    name: "Cuadro Deco",
    image: img1,
    description: "totalmente personalizado.ideal para regalar o decorar",
    featured: true
  },
  {
    id: 11,
    name: "BOX",
    image: img1,
    description: "caja box rectangular,totalmente personalizable"
  },
  {
    id: 12,
    name: "Cuadro Dia de la Madre",
    image: img1,
    description: "Regalo del dia de la madre"
  },
  {
    id: 13,
    name: "Cuadro Deco XXL",
    image: img1,
    description: "Cuadro vidrio 4mm de 30x17cm + base de madera"
  },

  // Cuadros (7 productos)
  {
    id: 14,
    name: "Cuadro Deco XL",
    image: img1,
    description: "Cuadro con el mapa del cielo de tu fecha especial. Tamaño 30x40cm.",
    featured: true
  },
  {
    id: 15,
    name: "Porta Retrato 13x18",
    image: img1,
    description: "plantilla personalizada o foto a elección"
  },
  {
    id: 16,
    name: "kit stickers",
    image: img1,
    description: "plancha a4 de stickers"
  },
  {
    id: 17,
    name: "Calendarios por Mayor",
    image: img1,
    description: "impresión premium"
  },
  {
    id: 18,
    name: "Porta Retrato Premium",
    image: img1,
    description: "portaretrato a elección"
  },
  {
    id: 19,
    name: "Cuadro Día del Padre",
    image: img1,
    description: "regala lo mejor para tu papá"
  },
  {
    id: 20,
    name: "Clásicos Todo tipo de medida",
    image: img1, // Reutilizando primera imagen
    description: "todo tipo de medida!!",
    featured: true
  },
  {
    id: 21,
    name: "Kit emprendedores - Pack de 24 y 35 unidades",
    image: img1,
    description: "Stickers redondos de 4 y 4,5 cm de diámetro"
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};
