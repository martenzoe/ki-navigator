export default function Steps() {
  const items = [
    {
      id: 1,
      title: "Einleitung",
      text: "Vorstellung der KI-Managerin und ihrer Dienstleistungen",
      side: "left",
    },
    {
      id: 2,
      title: "Ansatz",
      text: "Klarheit statt Komplexität bei KI-Implementierung",
      side: "right",
    },
    {
      id: 3,
      title: "Arbeitsweise",
      text: "Individuelle und methodische Beratung",
      side: "left",
    },
    {
      id: 4,
      title: "Motivation",
      text: "Warum jetzt mit KI anfangen?",
      side: "right",
    },
    {
      id: 5,
      title: "Kontakt",
      text: "Möglichkeiten zur Kontaktaufnahme",
      side: "left",
    },
  ];

  return (
    <section id="struktur" className="bg-[#F1F5F9] py-20 px-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16">
        Gamma-Vorlage: Einleitung für die Website einer KI-Managerin
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertikale Linie */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2" />

        {/* Schritte */}
        <ul className="space-y-16">
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center ${
                item.side === "left" ? "justify-start" : "justify-end"
              } relative`}
            >
              <div className={`w-1/2 ${item.side === "left" ? "pr-6" : "pl-6"}`}>
                {item.side === "left" ? (
                  <div className="text-right">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                )}
              </div>

              {/* Nummer */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 border border-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm">
                {item.id}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
