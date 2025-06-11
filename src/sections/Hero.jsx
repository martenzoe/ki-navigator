// src/sections/Hero.jsx
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="start"
      className="w-full bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden"
    >
      {/* Hero-Bild */}
      <div className="w-full h-[45vh] md:h-[60vh]">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Textbereich */}
      <div className="w-full px-6 py-16 md:py-24 relative z-10">
        <motion.div
          className="max-w-4xl text-left mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block w-16 h-1 bg-gray-800 mb-4"></span>

          <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
            KI ist kein Ziel. Es ist der nächste Schritt.
            <br />
            Wo anfangen? Genau hier.
          </h1>

          <p className="text-gray-800 text-lg md:text-xl mb-10">
            Viele Unternehmen wissen, dass sie etwas mit Künstlicher Intelligenz tun müssen,
            doch der Einstieg ist unklar. Als zertifizierte KI-Managerin helfe ich dir, Potenziale
            sichtbar zu machen, Use Cases zu identifizieren und strategisch in die Umsetzung zu bringen.
            Ohne Hype. Ohne Komplexität. Dafür mit Klarheit, Struktur und Erfahrung.
          </p>

          <a
            href="#kontakt"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          >
            Jetzt unverbindlich Gespräch buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
