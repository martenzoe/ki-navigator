import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-20 px-6 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl font-semibold mb-8">Impressum</h1>
        <p className="mb-2">dmv daten- und medienverarbeitung</p>
        <p className="mb-2">Inhaberin: Beate Zöllner</p>
        <p className="mb-2">In der Esmecke 31<br />59846 Sundern</p>
        <p className="mb-2">Telefon: 02933 / 79030<br />Fax: 02933 / 77826</p>
        <p className="mb-2">E-Mail: info@allaboutmedia.de</p>
        <p className="mb-2">Steuer-Nr.: 303/5131/2078<br />USt-ID: DE169993472</p>
        <p className="mb-2">Finanzamt: Arnsberg</p>
        <p className="mt-4">Verantwortlich für den Inhalt: Beate Zöllner</p>
      </section>
      <Footer />
    </>
  );
}
