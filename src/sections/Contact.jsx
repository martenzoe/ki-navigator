export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#EDEDED] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
          Jetzt Kontakt aufnehmen
        </h2>

        <p className="text-center text-gray-700 mb-8">
          Du hast Fragen, möchtest ein Projekt besprechen oder brauchst eine erste Einschätzung? Füll das Formular aus, ich melde mich zeitnah zurück.
        </p>

        <form
          action="https://formspree.io/f/mldnbwrp"
          method="POST"
          className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1" htmlFor="firstName">
                Vorname*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="lastName">
                Nachname*
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium mb-1" htmlFor="organization">
                Organisation / Unternehmen (optional)
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="phone">
                Telefonnummer*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                E-Mail-Adresse*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="message">
              Anliegen / Nachricht*
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" required className="mt-1" />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              Ich habe die{" "}
              <a href="/datenschutz" className="underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und akzeptiere sie.
            </label>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
}
