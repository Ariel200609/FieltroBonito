export interface Product {
  id: number;
  name: string;
  category: 'polaroids' | 'stickers' | 'cuadros' | 'otros';
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

// Importar imágenes de productos
import img1 from '../assets/images/productos/CuadroDecoSouvenirs.webp';
import img3 from '../assets/images/productos/c.webp';
import img4 from '../assets/images/productos/1.webp';
import img5 from '../assets/images/productos/2.webp';
import img6 from '../assets/images/productos/3.webp';
import img7 from '../assets/images/productos/4.webp';
import img8 from '../assets/images/productos/5.webp';
import img9 from '../assets/images/productos/6.webp';
import img10 from '../assets/images/productos/7.webp';
import nenita from '../assets/images/productos/nenita.webp';
import img12 from '../assets/images/productos/9.webp';
import img13 from '../assets/images/productos/10.webp';
import img14 from '../assets/images/productos/11.webp';
import img15 from '../assets/images/productos/12.webp';
import img16 from '../assets/images/productos/13.webp';
import img17 from '../assets/images/productos/14.webp';
import img18 from '../assets/images/productos/15.webp';
import mama from '../assets/images/productos/mama.webp';
import img19 from '../assets/images/productos/stickers.webp';


export const products: Product[] = [
  // Polaroids (7 productos - usando tus imágenes)
  {
    id: 1,
    name: "Cuadro Deco Souvenirs",
    category: "cuadros",
    price: 9000,
    image: img1,
    description: "SOUVENIRS PERSONALIZADOS DE VIDRIO Y MADERA medida 10x13cm",
    featured: true
  },
  {
    id: 2,
    name: "Cuadro",
    category: "cuadros",
    price: 8500,
    image: nenita,
    description: "Ideal para souvenires de boda, cumpleaños, etc.",
    featured: true
  },
  {
    id: 3,
    name: "Tu Historia en Fotos",
    category: "cuadros",
    price: 13500,
    image: img3,
    description: "Personaliza tu cuadro con fotos de tus recuerdos"
  },
  {
    id: 4,
    name: "Polaroid Iman-Souvenir,6 unidades",
    category: "polaroids",
    price: 4800,
    image: img4,
    description: "Se hace precio por mayor!"
  },
  {
    id: 5,
    name: "Cuadro de Madera Barnizada con vidrio",
    category: "cuadros",
    price: 15000,
    image: img5,
    description: "con frases o simple"
  },
  {
    id: 6,
    name: "Polaroid 8x5, 12 unidades",
    category: "polaroids",
    price: 4400,
    image: img6,
    description: "Llevando mas cantidad el precio es menor!",
    featured: true
  },
  {
    id: 7,
    name: "Polaroid clásicas 10x10",
    category: "polaroids",
    price: 620,
    image: img7,
    description: "llevando mas cantidad el precio es menor!"
  },

  // Stickers (6 productos)
  {
    id: 8,
    name: "Polar scuare 9x8 6 unidades",
    category: "polaroids",
    price: 3900,
    image: img8,
    description: "6 unidades,consultar por combos!."
  },
  {
    id: 9,
    name: "Polaroid 10x7 8 unidades",
    category: "polaroids",
    price: 3950,
    image: img9,
    description: "llevando mas cantidad el precio es menor!"
  },
  {
    id: 10,
    name: "Cuadro Deco",
    category: "cuadros",
    price: 3500,
    image: nenita,
    description: "totalmente personalizado.ideal para regalar o decorar",
    featured: true
  },
  {
    id: 11,
    name: "BOX",
    category: "otros",
    price: 12200,
    image: img10,
    description: "caja box rectangular,totalmente personalizable"
  },
  {
    id: 12,
    name: "Cuadro Dia de la Madre",
    category: "cuadros",
    price: 10000,
    image: mama,
    description: "Regalo del dia de la madre"
  },
  {
    id: 13,
    name: "Cuadro Deco XXL",
    category: "cuadros",
    price: 15000,
    image: img17,
    description: "Cuadro vidrio 4mm de 30x17cm + base de madera"
  },

  // Cuadros (7 productos)
  {
    id: 14,
    name: "Cuadro Deco XL",
    category: "cuadros",
    price: 13000,
    image: img12,
    description: "Cuadro con el mapa del cielo de tu fecha especial. Tamaño 30x40cm.",
    featured: true
  },
  {
    id: 15,
    name: "Porta Retrato 13x18",
    category: "otros",
    price: 9500,
    image: img13,
    description: "plantilla personalizada o foto a elección"
  },
  {
    id: 16,
    name: "kit stickers",
    category: "stickers",
    price: 4100,
    image: img14,
    description: "plancha a4 de stickers"
  },
  {
    id: 17,
    name: "Calendarios por Mayor",
    category: "otros",
    price: 300,
    image: img15,
    description: "impresión premium"
  },
  {
    id: 18,
    name: "Porta Retrato Premium",
    category: "otros",
    price: 0,
    image: img16,
    description: "portaretrato a elección"
  },
  {
    id: 19,
    name: "Cuadro Día del Padre",
    category: "cuadros",
    price: 10000,
    image: img17,
    description: "regala lo mejor para tu papá"
  },
  {
    id: 20,
    name: "Clásicos Todo tipo de medida",
    category: "otros",
    price: 500,
    image: img18, // Reutilizando primera imagen
    description: "todo tipo de medida!!",
    featured: true
  },
  {
    id: 21,
    name: "Kit emprendedores - Pack de 24 y 35 unidades",
    category: "stickers",
    price: 3400,
    image: img19,
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
