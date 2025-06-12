import {
  Target,
  Database,
  Settings,
  Rocket,
  MessageCircle,
  BarChart4,
} from "lucide-react";

export default function UseCasePilotprojekt() {
  const steps = [
    {
      icon: <Target className="w-6 h-6 text-gray-700" />,
      title: "Ziel definieren – Angebotserstellung vereinfachen",
      text: "Klare Vision für den optimierten Prozess",
    },
    {
      icon: <Database className="w-6 h-6 text-gray-700" />,
      title: "Daten prüfen – Anfragen & Kombinationen analysieren",
      text: "Bestandsaufnahme der vorhandenen Informationen",
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-700" />,
      title: "Use Case entwickeln – Konfigurator mit KI-Vorschlägen",
      text: "Technische Umsetzung der intelligenten Lösung",
    },
    {
      icon: <Rocket className="w-6 h-6 text-gray-700" />,
      title: "Pilot starten – mit ausgewählten Stammkunden",
      text: "Erste Anwendung im kontrollierten Umfeld",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-gray-700" />,
      title: "Test & Feedback – Optimierung auf Basis echter Nutzung",
      text: "Kontinuierliche Verbesserung durch Praxiserfahrung",
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-gray-700" />,
      title: "Ergebnis – 70 % schnellere Angebote, +15 % Upsells",
      text: "Messbare Erfolge durch die KI-Implementierung",
    },
  ];

  return (
    <section id="pilotprojekt" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-16">
          Von der Idee zur Lösung – so lief das Pilotprojekt
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon in Pfeilform-Style Box */}
              <div className="w-10 h-12 bg-gray-200 flex items-center justify-center rounded-sm shadow-sm">
                {step.icon}
              </div>

              {/* Textblock */}
              <div>
                <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
