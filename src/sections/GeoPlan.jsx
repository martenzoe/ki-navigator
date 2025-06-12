// src/sections/GeoPlan.jsx
import geoGrafik from "../assets/geo-grafik.jpeg";

export default function GeoPlan() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Textbereich */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 leading-snug">
            Ihr Maßnahmenplan – <br className="hidden md:block" />
            verständlich, priorisiert, <br className="hidden md:block" />
            umsetzbar
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-10 bg-[#E5E5E0] rounded"></div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Analyse der aktuellen Website</h3>
                <p className="text-gray-700">Struktur, Inhalt, Sichtbarkeit</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-10 bg-[#E5E5E0] rounded"></div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Bewertung der maschinellen Lesbarkeit
                </h3>
                <p className="text-gray-700">Wie gut versteht KI Ihre Inhalte?</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-10 bg-[#E5E5E0] rounded"></div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Konkrete Maßnahmen mit klarer Zuweisung
                </h3>
                <p className="text-gray-700">Agentur / Redaktion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bild */}
        <div>
          <img
            src={geoGrafik}
            alt="Maßnahmenplan Grafik"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}
