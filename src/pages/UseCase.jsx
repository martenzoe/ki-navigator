import usecaseHeader from "../assets/usecase-header.jpeg";
import { useEffect } from "react";

export default function UseCase() {
  useEffect(() => {
    window.scrollTo(0, 0); // Seite beim Aufruf nach oben scrollen
  }, []);

  return (
    <section className="min-h-screen bg-black text-white relative">
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <img
          src={usecaseHeader}
          alt="Use Case Header"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          Wie ein Mittelständler mit KI seine <br />
          Angebotsprozesse automatisiert hat
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-10">
          Ein konkreter Use Case – ohne Hype, mit echtem Ergebnis
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
            Mehr erfahren
          </button>
          <a
            href="/#kontakt"
            className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
          >
            Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
