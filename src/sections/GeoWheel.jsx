import geoWheel from "../assets/geo-wheel.jpeg";

export default function GeoWheel() {
  return (
    <section className="bg-[#fbfcf7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Sichtbarkeit beginnt bei Struktur
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center text-left">
          {/* Linker Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Analyse</h3>
              <p className="text-gray-700">Wir prüfen Ihre Website auf KI-Lesbarkeit</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sichtbarkeit</h3>
              <p className="text-gray-700">KI-Systeme empfehlen Ihr Unternehmen</p>
            </div>
          </div>

          {/* Bild */}
          <div className="flex justify-center">
            <img
              src={geoWheel}
              alt="Ablauf Wheel"
              className="max-w-xs md:max-w-md w-full"
            />
          </div>

          {/* Rechter Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Bericht</h3>
              <p className="text-gray-700">Sie erhalten einen detaillierten Maßnahmenplan</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Umsetzung</h3>
              <p className="text-gray-700">Ihre Agentur optimiert die Website</p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-800 text-base max-w-3xl mx-auto">
          Ihre Website überzeugt Menschen – aber versteht sie auch ChatGPT? Wir analysieren, wo Sie stehen – und liefern Ihrer Agentur, was sie braucht.
        </p>
      </div>
    </section>
  );
}
