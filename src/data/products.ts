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

import img2 from '../assets/images/productos/Aros1.jpg';

import img4 from '../assets/images/productos/Gatos.jpg';

import img8 from '../assets/images/productos/RATON  (2).jpg';

import img11 from '../assets/images/productos/leprechaun.jpg';

import img13 from '../assets/images/productos/llaveroStitch.jpg';
import img14 from '../assets/images/productos/miniatura (2).jpg';

import img17 from '../assets/images/productos/prendedor.jpg';


export const products: Product[] = [
  // Polaroids (7 productos - usando tus imágenes)
  {
    id: 2,
    name: "Aros",
    image: img2,
    description: "Lo que pienses, lo puedo hacer, para ir a la moda y combinar con tus outfits💁🏻‍♀️🌸",
    
  },
  /*{
    id: 3,
    name: "Gato",
    image: img3,
    description: ""
  },*/
  {
    id: 4,
    name: "Gatos",
    image: img4,
    description: "¡Son muy tiernos! suaves y abrazables. No te quedes sin el tuyo 😸✨"
  },
  /*{
    id: 5,
    name: "Miniatura",
    image : img5,
    description: ""
  },*/
  /*{
    id: 6,
    name: "Ratones",
    image: img7,
    description: "",
    featured: true
  },*/
  {
    id: 7,
    name: "Ratones",
    image: img8,
    description: "Ratoncitos que expresan amor, dulzura y calidez, los pequeños gestos que alegran el corazón💕🐭",
    featured:true
  },
  /*{
    id: 8,
    name: "Raton Personalizado",
    image: img9,
    description: ""
  },*/
  /*{
    id: 9,
    name: "Raton Personalizado",
    image: img10,
    description: ""
  },*/
  {
    id: 10,
    name: "Leprechauns",
    image: img11,
    description: "La suerte va a estar de tu lado si llevas con vos un Leprechaun🍀🎉",
  },
  /*{
    id: 11,
    name: "Leprechaun",
    image: img12,
    description: ""
  },*/
  {
    id: 12,
    name: "Llaveros",
    image: img13,
    description: "¡Te acompañarán para siempre y protegerán las llaves de tu hogar!❣️🏠"
  },
  {
    id: 13,
    name: "Miniaturas",
    image: img14,
    description: "Cuanto más pequeños, ¡más tiernos!🥰🩷"
  },

  // Cuadros (7 productos)
  {
    id: 15,
    name: "Prendedores",
    image: img17,
    description: "Sumale un toque sofisticado a tus outfits.❤️‍🔥🎀"
  },
  /*{
    id: 16,
    name: "Raton",
    image: img18,
    description: ""
  },*/
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
