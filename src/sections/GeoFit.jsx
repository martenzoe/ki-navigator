import geoFit from "../assets/geo-fit.jpeg";
import { Globe, ShieldOff, Bot, BarChart2 } from "lucide-react";

export default function GeoFit() {
  return (
    <section className="bg-[#d6d2c8] pt-0">
      {/* Bildausschnitt oben */}
      <div className="w-full h-[200px] md:h-[300px] overflow-hidden">
        <img
          src={geoFit}
          alt="Team und Analyse"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Inhalt */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Passt das zu Ihnen?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-base">
          <div className="flex flex-col items-center text-center gap-3">
            <Globe className="w-8 h-8" />
            <h3 className="font-semibold">Sie haben bereits eine Website</h3>
            <p>Eine bestehende Online-Präsenz ist Voraussetzung für unsere Analyse.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <ShieldOff className="w-8 h-8" />
            <h3 className="font-semibold">Ihre Agentur betreut Sie zuverlässig</h3>
            <p>Ein vertrauensvoller Partner für die technische Umsetzung ist wichtig.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <Bot className="w-8 h-8" />
            <h3 className="font-semibold">Sie möchten KI-Sichtbarkeit – ohne Systemwechsel</h3>
            <p>Optimierung im bestehenden System statt kompletter Neuaufbau.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <BarChart2 className="w-8 h-8" />
            <h3 className="font-semibold">Sie wollen keine SEO-Phrasen, sondern echte Struktur</h3>
            <p>Nachhaltige Optimierung statt kurzfristiger Tricks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
