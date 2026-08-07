import Header from "@/components/Header";
import Hero from "@/components/Hero";
//import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen">
      <Header />
      <Hero />
    
      <FeaturedProducts />
      <Footer />
    </main>
  );
}