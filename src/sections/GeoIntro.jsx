import {
  Globe,
  LayoutPanelLeft,
  Network,
} from "lucide-react";

export default function GeoIntro() {
  return (
    <section className="bg-[#FAF9F6] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          GEO = Generative Engine Optimization
        </h2>

        {/* Drei Schritte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Globe className="w-6 h-6 mx-auto mb-2" />,
              title: "Strukturierter Aufbau",
              text: "h1–h3, Sections, CTAs",
            },
            {
              icon: <LayoutPanelLeft className="w-6 h-6 mx-auto mb-2" />,
              title: "Substanz bieten",
              text: "Problem, Nutzen, Beleg",
            },
            {
              icon: <Network className="w-6 h-6 mx-auto mb-2" />,
              title: "Technisch sauber",
              text: "Meta-Daten, Schema, Alt-Texte",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 rounded-lg px-6 py-8"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Fließtext */}
        <p className="text-gray-800 text-base max-w-3xl mx-auto leading-relaxed">
          GEO macht Ihre Website verständlich, nicht nur für Google, sondern für
          KI-Systeme. Diese Systeme priorisieren Inhalte, die strukturiert,
          substanziell und technisch sauber sind. <br />
          Wer liefert, wird empfohlen. Wer nicht, wird ersetzt.
        </p>
      </div>
    </section>
  );
}
