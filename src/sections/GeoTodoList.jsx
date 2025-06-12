// src/sections/GeoTodoList.jsx

export default function GeoTodoList() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Beispiel-To-do-Liste <span className="text-gray-500">(Auszug)</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse rounded-lg overflow-hidden text-sm md:text-base bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-medium">
                <th className="py-3 px-4 border-b border-gray-200">Maßnahme</th>
                <th className="py-3 px-4 border-b border-gray-200">Warum es wichtig ist</th>
                <th className="py-3 px-4 border-b border-gray-200">Wer setzt um?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-100">&lt;h1&gt; korrekt setzen</td>
                <td className="py-3 px-4 border-b border-gray-100">GPT erkennt Struktur & Relevanz</td>
                <td className="py-3 px-4 border-b border-gray-100">Ihre Agentur</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-100">FAQ mit Schema-Markup einbinden</td>
                <td className="py-3 px-4 border-b border-gray-100">
                  Höhere Sichtbarkeit in GPT & Google
                </td>
                <td className="py-3 px-4 border-b border-gray-100">Agentur oder CMS</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-100">Produktseiten strukturieren</td>
                <td className="py-3 px-4 border-b border-gray-100">
                  GPT versteht Unterschiede & Nutzen
                </td>
                <td className="py-3 px-4 border-b border-gray-100">intern oder Agentur</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-3 px-4">Starttext überarbeiten</td>
                <td className="py-3 px-4">Substanz statt Floskeln</td>
                <td className="py-3 px-4">Redaktion / optional durch uns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
