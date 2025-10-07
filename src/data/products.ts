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
import img1 from '../assets/images/productos/AROS.jpg';
import img2 from '../assets/images/productos/Aros1.jpg';
import img3 from '../assets/images/productos/Gato1.jpg';
import img4 from '../assets/images/productos/Gatos.jpg';
import img5 from '../assets/images/productos/Miniatura.jpg';
import img7 from '../assets/images/productos/RATON  (1).jpg';
import img8 from '../assets/images/productos/RATON  (2).jpg';
import img9 from '../assets/images/productos/RATON .jpg';
import img10 from '../assets/images/productos/RATON.jpg';
import img11 from '../assets/images/productos/leprechaun.jpg';
import img12 from '../assets/images/productos/leprechaun2.jpg';
import img13 from '../assets/images/productos/llaveroStitch.jpg';
import img14 from '../assets/images/productos/miniatura (2).jpg';
import img15 from '../assets/images/productos/personalizados.jpg';
import img17 from '../assets/images/productos/prendedor.jpg';
import img18 from '../assets/images/productos/raton(4).jpg';

export const products: Product[] = [
  // Polaroids (7 productos - usando tus imágenes)
  {
    id: 1,
    name: "Aros",
    image: img1,
    description: "",
    featured: true
  },
  {
    id: 2,
    name: "Aros",
    image: img2,
    description: "",
    featured: true
  },
  {
    id: 3,
    name: "Gato",
    image: img3,
    description: ""
  },
  {
    id: 4,
    name: "Gatos",
    image: img4,
    description: ""
  },
  {
    id: 5,
    name: "Miniatura",
    image : img5,
    description: ""
  },
  {
    id: 6,
    name: "Ratones",
    image: img7,
    description: "",
    featured: true
  },
  {
    id: 7,
    name: "Raton Personalizado",
    image: img8,
    description: ""
  },
  {
    id: 8,
    name: "Raton Personalizado",
    image: img9,
    description: ""
  },
  {
    id: 9,
    name: "Raton Personalizado",
    image: img10,
    description: ""
  },
  {
    id: 10,
    name: "Leprechaun",
    image: img11,
    description: "",
    featured: true
  },
  {
    id: 11,
    name: "Leprechaun",
    image: img12,
    description: ""
  },
  {
    id: 12,
    name: "Llavero Stitch",
    image: img13,
    description: ""
  },
  {
    id: 13,
    name: "Miniatura",
    image: img14,
    description: ""
  },

  // Cuadros (7 productos)
  {
    id: 14,
    name: "Personalizado",
    image: img15,
    description: "",
    featured: true
  },
  {
    id: 15,
    name: "Prendedor",
    image: img17,
    description: ""
  },
  {
    id: 16,
    name: "Raton",
    image: img18,
    description: ""
  },
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
