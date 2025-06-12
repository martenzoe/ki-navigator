import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";
import geoHeader from "../assets/geo-header.jpeg";
import GeoIntro from "../sections/GeoIntro";
import GeoMention from "../sections/GeoMention";
import GeoAgentur from "../sections/GeoAgentur";
import GeoPlan from "../sections/GeoPlan"; // Import GeoPlan if needed
import GeoTodoList from "../sections/GeoTodoList";



export default function GEO() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
              ChatGPT empfiehlt – aber <br />
              nicht automatisch Sie.
            </h1>

            <p className="text-gray-800 mb-8 text-base md:text-lg">
              KI-Systeme wie ChatGPT, Perplexity & Gemini lesen Websites
              strukturell – nicht emotional. Wer maschinenlesbar ist, wird
              sichtbar. Wer nicht, bleibt unsichtbar. Wir analysieren Ihre
              Website und liefern Ihrer Agentur eine klare To-do-Liste zur
              Umsetzung.
            </p>

            <a
              href="#kontakt"
              className="inline-block bg-[#555545] text-white px-6 py-3 rounded hover:bg-[#3d3d3d] transition"
            >
              ➡️ Jetzt GEO-Bericht anfordern
            </a>
          </div>

          {/* Bild */}
          <div className="w-full h-full">
            <img
              src={geoHeader}
              alt="GEO Header"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      <GeoIntro />
      <GeoMention />
      <GeoAgentur />
      <GeoPlan />
      <GeoTodoList />
    
        {/* Kontakt Section */}
      <Contact />
    
        {/* Footer */}
      <Footer />
    </>
  );
}
