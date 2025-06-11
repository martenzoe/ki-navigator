export default function Approach() {
  const steps = [
    {
      id: 1,
      title: "Ziele & Prioritäten klären",
      text: "Der erste Schritt für eine erfolgreiche KI-Strategie",
    },
    {
      id: 2,
      title: "Datenlage und Qualität prüfen",
      text: "Fundament für zuverlässige KI-Anwendungen",
    },
    {
      id: 3,
      title: "Realistische Use Cases identifizieren",
      text: "Fokus auf wertschöpfende Anwendungsfälle",
    },
    {
      id: 4,
      title: "Pilotprojekt definieren",
      text: "Konkrete Umsetzung im kleinen Rahmen",
    },
    {
      id: 5,
      title: "Implementieren, testen, optimieren",
      text: "Iterative Verbesserung der Lösung",
    },
    {
      id: 6,
      title: "Skalieren, wenn sinnvoll",
      text: "Ausweitung auf weitere Bereiche",
    },
  ];

  return (
    <section id="ansatz" className="bg-white py-20 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-20">
        Mein Ansatz: Klarheit statt Komplexität
      </h2>

      {/* Desktop-Ansicht */}
      <div className="hidden md:flex relative justify-between max-w-6xl mx-auto">
        {/* Horizontale Linie */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 z-0" />

        {steps.map((step, index) => {
          const isTop = index % 2 === 0;
          return (
            <div key={step.id} className="relative w-1/6 flex flex-col items-center z-10">
              {isTop && (
                <>
                  <div className="mb-6 flex flex-col items-center">
                    <h3 className="text-base font-semibold text-center">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{step.text}</p>
                  </div>
                  <div className="h-8 w-px bg-gray-400 mb-2" />
                </>
              )}

              <div className="w-10 h-10 rounded-md bg-white border border-gray-300 flex items-center justify-center font-semibold text-sm z-10">
                {step.id}
              </div>

              {!isTop && (
                <>
                  <div className="h-8 w-px bg-gray-400 mt-2" />
                  <div className="mt-6 flex flex-col items-center">
                    <h3 className="text-base font-semibold text-center">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{step.text}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile-Ansicht */}
      <div className="flex flex-col gap-8 md:hidden max-w-xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="w-10 h-10 flex-shrink-0 rounded-md bg-white border border-gray-300 flex items-center justify-center font-semibold text-sm">
              {step.id}
            </div>
            <div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Abschluss-Satz */}
      <p className="text-center text-gray-700 mt-20 text-sm md:text-base max-w-3xl mx-auto">
        Jeder Schritt ist nachvollziehbar, dokumentiert und strategisch begründet. Kein Blindflug, sondern saubere Projektarbeit.
      </p>
    </section>
  );
}
