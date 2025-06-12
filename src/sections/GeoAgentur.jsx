// src/sections/GeoAgentur.jsx
export default function GeoAgentur() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-snug">
          Wir analysieren – Ihre Agentur <br className="hidden md:block" /> setzt um
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#F3F3F0] rounded-md p-6">
            <h3 className="font-semibold text-lg mb-2">Keine Abhängigkeit von uns</h3>
            <p className="text-gray-700">
              Sie bleiben flexibel und unabhängig in Ihrer Entscheidungsfindung.
            </p>
          </div>
          <div className="bg-[#F3F3F0] rounded-md p-6">
            <h3 className="font-semibold text-lg mb-2">Keine Systemwechsel</h3>
            <p className="text-gray-700">
              Ihre bestehenden Systeme und Prozesse bleiben erhalten.
            </p>
          </div>
          <div className="md:col-span-2 bg-[#EAEAE6] rounded-md p-6">
            <h3 className="font-semibold text-lg mb-2">
              Schnelle Umsetzung durch bestehende Partner
            </h3>
            <p className="text-gray-700">
              Ihre vertrauten Agenturpartner können direkt mit der Optimierung beginnen.
            </p>
          </div>
        </div>

        <p className="text-gray-800 text-base">
          Viele Unternehmen arbeiten mit festen IT- oder Webagenturen. Wir liefern die strukturierte Analyse + klare To-do-Liste – Ihre Agentur übernimmt die Umsetzung.
        </p>
      </div>
    </section>
  );
}
