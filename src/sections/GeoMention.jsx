import geoWow from "../assets/geo-wow.jpeg";

export default function GeoMention() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bild links */}
        <div>
          <img
            src={geoWow}
            alt="Wow Moment – ChatGPT Empfehlung"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Text rechts */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Wird Ihre Website genannt,<br /> oder die Ihres Wettbewerbers?
          </h2>

          <p className="text-gray-800 text-base md:text-lg mb-4">
            GPT-Modelle beantworten bereits Fragen wie: „Empfiehl mir ein Unternehmen
            für XYZ in Deutschland“. Demnächst folgen direkte Kaufoptionen – ganz ohne
            Umweg über Ihre Website.
          </p>

          <p className="text-gray-800 text-base md:text-lg">
            OpenAI testet Shopping-Integrationen mit Partnern wie Shopify und Klarna.
            Wenn Sie nicht maschinenlesbar sind, verkauft ChatGPT Ihren Wettbewerber.
          </p>
        </div>
      </div>
    </section>
  );
}
