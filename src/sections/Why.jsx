import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpeg";

const benefits = [
  {
    id: 1,
    title: "Wettbewerbsvorteil",
    text: "Der Unternehmen mit früher KI-Adoption",
  },
  {
    id: 2,
    title: "Effizienzsteigerung",
    text: "Durchschnittlich durch strategische KI-Implementierung",
  },
  {
    id: 3,
    title: "Schnellere Innovation",
    text: "Im Vergleich zu Unternehmen ohne KI-Strategie",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function Why() {
  return (
    <section id="warum" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Linke Seite: Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Warum es sich jetzt lohnt,<br /> anzufangen
          </h2>
          <p className="text-gray-700 text-base mb-10">
            KI ist keine Modeerscheinung, sondern ein strategisches Werkzeug. Wer heute beginnt,
            kann eigene Standards setzen, bevor andere sie vorgeben. Ich helfe dir dabei,
            die richtigen Entscheidungen zu treffen – auf Basis deiner Ziele, nicht auf Basis von Trends.
          </p>

          {/* Benefit-Liste mit animierten Pfeilen */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {benefits.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                {/* Pfeil mit Zahl */}
                <div className="w-10 h-12 bg-gray-200 text-gray-800 font-semibold text-sm flex items-center justify-center clip-polygon shadow-sm">
                  {item.id}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rechte Seite: Bild */}
        <div className="md:w-1/2">
          <img
            src={heroImg}
            alt="AI"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
