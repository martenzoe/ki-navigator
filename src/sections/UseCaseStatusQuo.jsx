export default function UseCaseStatusQuo() {
  const items = [
    {
      id: 1,
      title: "Anfragen per E-Mail und Telefon",
      text: "Unstrukturierte Kommunikation führt zu Informationsverlust",
    },
    {
      id: 2,
      title: "Rückfragen, PDFs, manuelle Abläufe",
      text: "Zeitaufwändige Prozesse ohne Standardisierung",
    },
    {
      id: 3,
      title: "Keine Wiederverwendung von Erfahrungswerten",
      text: "Wertvolles Wissen geht bei jedem neuen Angebot verloren",
    },
    {
      id: 4,
      title: "Hoher Zeitdruck im Angebotsprozess",
      text: "Stress und Fehleranfälligkeit bei der Erstellung",
    },
  ];

  return (
    <section id="statusquo" className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-12">
          Der Status Quo: viel Aufwand, wenig System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {/* Nummer */}
              <div className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded text-sm">
                {item.id}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
