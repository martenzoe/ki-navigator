export default function GeoPricing() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Transparente Leistungen, klare Pakete
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Paket 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl font-semibold">490 €</div>
            <h3 className="text-lg font-semibold">GEO-Einstiegspaket</h3>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">
              Analyse & PDF-Bericht – Konkrete Maßnahmenliste
            </p>
          </div>

          {/* Paket 2 */}
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl font-semibold">1.450 €</div>
            <h3 className="text-lg font-semibold">GEO-Komplettpaket</h3>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">
              inkl. technischer Beispiele & Textstrukturierung – auf Wunsch mit 1:1-Beratung
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-600">Alle Preise verstehen sich netto.</p>
      </div>
    </section>
  );
}
