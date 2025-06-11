import {
  Puzzle,
  BarChart2,
  XSquare,
  MessageCircle,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: <Puzzle className="w-8 h-8 text-gray-700" />,
    title: "Individuelle Beratung statt Schablonen",
    text: "Maßgeschneiderte Lösungen für dein Unternehmen",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-gray-700" />,
    title: "Methodisches Vorgehen statt Bauchgefühl",
    text: "Datenbasierte Entscheidungen und strukturierte Prozesse",
  },
  {
    icon: <XSquare className="w-8 h-8 text-gray-700" />,
    title: "Realistische Planung, keine KI-Versprechen",
    text: "Ehrliche Einschätzung von Möglichkeiten und Grenzen",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-gray-700" />,
    title: "Strukturierte Kommunikation auf Augenhöhe",
    text: "Klare Sprache ohne unnötige Fachbegriffe",
  },
  {
    icon: <Handshake className="w-8 h-8 text-gray-700" />,
    title: "Verbindlichkeit und Transparenz im Prozess",
    text: "Verlässliche Zusammenarbeit mit klaren Vereinbarungen",
  },
];

export default function Method() {
  return (
    <section id="arbeitsweise" className="bg-[#F9FAFB] py-20 px-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16">
        Meine Arbeitsweise
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-4">
            {item.icon}
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
