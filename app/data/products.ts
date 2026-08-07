export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

// Coloque as fotos reais na pasta /public/produtos e ajuste os caminhos abaixo
export const products: Product[] = [
  {
    id: "1",
    name: "Vestido Floral Rosa",
    description: "Vestido leve estampado, ideal para o dia a dia",
    price: 79.9,
    image: "/produtos/vestido-floral-rosa.jpg",
    category: "Vestidos",
  },
  {
    id: "2",
    name: "Vestido Branco",
    description: "Vestido branco elegante para ocasiões especiais",
    price: 89.9,
    image: "/produtos/vestido-branco.jpg",
    category: "Vestidos",
  },
  {
    id: "3",
    name: "Vestido Lilás",
    description: "Vestido confortável em tecido macio",
    price: 79.9,
    image: "/produtos/vestido-lilas.jpg",
    category: "Vestidos",
  },
  {
    id: "4",
    name: "Vestido Azul",
    description: "Vestido casual para o dia a dia",
    price: 69.9,
    image: "/produtos/vestido-azul.jpg",
    category: "Vestidos",
  },
];