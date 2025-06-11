export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-6 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Beate Zöllner · KI-Navigatorin</p>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <a href="/datenschutz" className="hover:underline">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
