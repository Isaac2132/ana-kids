export default function Footer() {
  return (
    <footer id="sobre" className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm">
        <p className="font-bold text-white mb-1">Ana Kids</p>
        <p>Moda infantil feminina com carinho e qualidade.</p>
        <p className="mt-4 text-gray-500">
          © {new Date().getFullYear()} Ana Kids. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}