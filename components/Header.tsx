export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-pink-600">Ana Kids</h1>
          <p className="text-xs text-gray-500">Moda Infantil Feminina</p>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#catalogo" className="hover:text-pink-600 transition">
            Catálogo
          </a>
          <a href="#sobre" className="hover:text-pink-600 transition">
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
}