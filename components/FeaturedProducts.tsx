import Image from "next/image";
import { products } from "@/app/data/products";


// Troque pelo número real da loja, com código do país + DDD, sem espaços ou símbolos
const WHATSAPP_NUMBER = "5563900000000";

export default function FeaturedProducts() {
  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Produtos em destaque
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const message = encodeURIComponent(
            `Olá! Tenho interesse no produto "${product.name}" (R$ ${product.price
              .toFixed(2)
              .replace(".", ",")}).`
          );
          const whatsappLink = `https://wa.me/${5563992274286}?text=${message}`;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-semibold text-gray-800">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500 flex-1">
                  {product.description}
                </p>
                <p className="text-pink-600 font-bold mt-2">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold text-center py-2 rounded-full transition"
                >
                  Comprar no WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}