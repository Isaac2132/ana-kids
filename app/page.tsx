import Image from "next/image";

const produtos = [
  {
    id: 1,
    nome: "Vestido Floral Rosa",
    preco: "R$ 79,90",
    imagem: "/produtos/vestido1.jpg",
  },
  {
    id: 2,
    nome: "Vestido Branco",
    preco: "R$ 89,90",
    imagem: "/produtos/vestido2.jpg",
  },
  {
    id: 3,
    nome: "Vestido Lilás",
    preco: "R$ 79,90",
    imagem: "/produtos/vestido3.jpg",
  },
  {
    id: 4,
    nome: "Vestido Azul",
    preco: "R$ 69,90",
    imagem: "/produtos/vestido4.jpg",
  },
];

const telefone = "5563999999999";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <header className="py-10 text-center border-b">
        <h1 className="text-4xl font-semibold text-pink-500">
          Ana Kids
        </h1>

        <p className="text-gray-500 mt-2">
          Moda Infantil Feminina
        </p>
      </header>

      <section className="max-w-6xl mx-auto p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {produtos.map((produto) => (

            <div
              key={produto.id}
              className="rounded-xl border p-4 shadow-sm hover:shadow-lg transition"
            >

              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={400}
                height={500}
                className="rounded-lg w-full h-[360px] object-cover"
              />

              <h2 className="text-lg font-medium mt-4">
                {produto.nome}
              </h2>

              <p className="text-pink-500 text-2xl font-bold mt-2">
                {produto.preco}
              </p>

              <a
                href={`https://wa.me/${telefone}?text=Olá! Tenho interesse no ${produto.nome}`}
                target="_blank"
                className="block mt-5 bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-medium transition"
              >
                Comprar no WhatsApp
              </a>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}