export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  //category: string;
};

// Coloque as fotos reais na pasta /public/produtos e ajuste os caminhos abaixo
export const products: Product[] = [
  {
    id: "1",
    name: "off white",
    description: "Conjunto off white ",
    price: 70.0,
    image:"/produtos/vestiddo-offwhite.jpeg",
    //category: "Vestidos",
  },
  {
    id: "2",
    name: "Vestido cinza",
    description: "Vestido cinza elegante para ocasiões especiais",
    price: 80.0,
    image: "/produtos/vestido-cinza.jpeg",
    //category: "Vestidos",
  },
  {
    id: "3",
    name: "Conjunto marrom-madeira",
    description: "Conjunto confortável em tecido macio",
    price: 70.0,
    image: "/produtos/marrom-madeira.jpeg",
    //category: "Vestidos",
  },
  {
    id: "4",
    name: "Conjunto verde-musgo",
    description: "Conjunto casual para o dia a dia",
    price: 70.0,
    image: "/produtos/verde-musgo.jpeg",
    //category: "Vestidos",
  },
  
];