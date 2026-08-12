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
    name: "Conjunto Off-White",
    description: "1 até 2 anos ",
    price: 70.0,
    image:"/produtos/vestiddo-offwhite.jpeg",
    //category: "Vestidos",
  },
   {
    id: "2",
    name: "Conjunto rosa-claro",
    description: "7 à 8 anos",
    price: 70.0,
    image: "/produtos/conjunto-rosa claro.jpeg",
    //category: "Vestidos",
  },
 
 
  {
    id: "3",
    name: "Conjunto marrom-madeira",
    description: "3 à 4 anos",
    price: 70.0,
    image: "/produtos/marrom-madeira.jpeg",
    //category: "Vestidos",
  },
  {
    id: "4",
    name: "Conjunto verde-musgo",
    description: "5 à 6 anos",
    price: 70.0,
    image: "/produtos/verde-musgo.jpeg",
    //category: "Vestidos",
  },
  {
    id: "5",
    name: "Macaquinho-Estampado",
    description: "1 à 2 anos",
    price: 60.0,
    image: "/produtos/Macaquinho-estampado01.jpeg",
    //category: "Vestidos",
  },
   
   {
    id: "6",
    name: "Vestido Estampado",
    description: "7 à 8 anos",
    price: 80.0,
    image: "/produtos/Vestido-Estampado02.jpeg",
    //category: "Vestidos",
  },

    {
    id: "7",
    name: "Vestido-Princesa",
    description: "1 à 2 anos",
    price: 80.0,
    image: "/produtos/vestido-princesa.jpeg",
    //category: "Vestidos",
  },
   
  {
    id: "8",
    name: "Vestido Estampado",
    description: "7 à 8 anos",
    price: 80.0,
    image: "/produtos/Vestido-Estampado.jpeg",
    //category: "Vestidos",
  },

 {
    id: "9",
    name: "Vestido Preto",
    description: "7 até 9 anos",
    price: 80.0,
    image: "/produtos/vestido-preto.jpeg",
    //category: "Vestidos",
  },
   {
    id: "10",
    name: "Vestido Azul-Claro",
    description: "7 até 9 anos",
    price: 80.0,
    image: "/produtos/vestido azul-claro.jpeg",
    //category: "Vestidos",
  },
   {
    id: "11",
    name: "Vestido Verde-Musgo",
    description: "2 à 3 anos",
    price: 80.0,
    image: "/produtos/vestido verde-musgo.jpeg",
    //category: "Vestidos",
  },

  {
    id: "12",
    name: "Vestido Vermelho",
    description: "7 até 9 anos",
    price: 80.0,
    image: "/produtos/vestido-vermelho.jpeg",
    //category: "Vestidos",
  },
];