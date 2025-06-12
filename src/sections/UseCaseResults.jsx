import usecaseStats from "../assets/usecase-stats.jpeg";

export default function UseCaseResults() {
  const items = [
    {
      percent: "70%",
      title: "Schnellere Angebote",
      text: "Drastische Reduzierung der Bearbeitungszeit",
    },
    {
      percent: "15%",
      title: "Mehr Upsells",
      text: "Steigerung des Verkaufspotentials durch intelligente Vorschläge",
    },
    {
      percent: "100%",
      title: "Digitalisierung",
      text: "Vollständig automatisierter Angebotsprozess",
    },
  ];

  return (
    <section
      id="ergebnisse"
      className="relative bg-black text-white py-24 px-6"
    >
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={usecaseStats}
          alt="Use Case Ergebnisse"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <div key={index}>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {item.percent}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
