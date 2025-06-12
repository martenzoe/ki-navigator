import improveImg from "../assets/usecase-improve.jpeg";

export default function UseCaseImprovements() {
  const items = [
    {
      number: 1,
      title: "Angebotserstellung: von Tagen auf Minuten",
      text: "Drastische Beschleunigung des gesamten Prozesses durch KI-Unterstützung",
    },
    {
      number: 2,
      title: "Weniger Rückfragen, höhere Abschlussquote",
      text: "Präzisere Angebote führen zu schnelleren Entscheidungen",
    },
    {
      number: 3,
      title: "Digitale Beratung mit Vorschlagslogik",
      text: "Intelligente Empfehlungen basierend auf Erfahrungswerten",
    },
    {
      number: 4,
      title: "Zufriedenere Kunden, wiederkehrende Bestellungen",
      text: "Verbesserte Kundenerfahrung durch optimierten Prozess",
    },
  ];

  return (
    <section id="verbesserung" className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bild */}
        <div>
          <img
            src={improveImg}
            alt="Was sich verbessert hat"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-12">
            Was sich konkret verbessert hat
          </h2>

          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <div className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded text-sm">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
