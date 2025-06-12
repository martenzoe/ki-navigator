import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Datenschutz() {
  return (
    <>
    <Navbar />
    <section className="min-h-screen py-20 px-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-semibold mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
          <p><strong>Allgemeine Hinweise:</strong> Diese Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
          <p><strong>Datenerfassung:</strong> Daten werden entweder durch Ihre Eingabe (z. B. im Kontaktformular) oder automatisch durch unsere IT-Systeme erfasst (z. B. Browser, Uhrzeit).</p>
          <p><strong>Zweck:</strong> Ein Teil der Daten dient der fehlerfreien Bereitstellung der Website, ein anderer der Analyse Ihres Nutzerverhaltens.</p>
          <p><strong>Rechte:</strong> Sie haben das Recht auf Auskunft, Berichtigung, Sperrung oder Löschung Ihrer Daten. Wenden Sie sich hierzu an die im Impressum genannte Adresse.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p><strong>Verantwortlich:</strong><br />
            dmv daten- und medienverarbeitung<br />
            Inhaberin: Beate Zöllner<br />
            In der Esmecke 31, 59846 Sundern<br />
            Tel: 02933 / 79030<br />
            E-Mail: info@allaboutmedia.de
          </p>
          <p><strong>Widerruf:</strong> Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit widerrufen – formlos per E-Mail.</p>
          <p><strong>Beschwerderecht:</strong> Bei Datenschutzverstößen steht Ihnen ein Beschwerderecht bei der Aufsichtsbehörde zu. <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Zur Liste der Aufsichtsbehörden</a></p>
          <p><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Daten in maschinenlesbarem Format an sich oder Dritte aushändigen zu lassen.</p>
          <p><strong>SSL-Verschlüsselung:</strong> Unsere Seite nutzt eine sichere SSL-/TLS-Verschlüsselung für vertrauliche Inhalte.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Datenerfassung auf unserer Website</h2>
          <p><strong>Cookies:</strong> Unsere Website verwendet Cookies zur nutzerfreundlichen und sicheren Darstellung. Sie können Cookies in Ihrem Browser steuern oder deaktivieren.</p>
          <p><strong>Server-Log-Dateien:</strong> Der Provider speichert technische Daten automatisch, z. B. IP-Adresse, Uhrzeit, Browsertyp. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
          <p><strong>Kontaktformular:</strong> Die Eingaben im Formular werden zwecks Bearbeitung gespeichert, aber nicht ohne Ihre Einwilligung weitergegeben.</p>
          <p><strong>Vertragsdaten:</strong> Kundendaten verarbeiten wir nur zur Vertragsabwicklung und löschen sie nach gesetzlicher Aufbewahrungsfrist.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Plugins und Tools</h2>
          <p><strong>Google Maps:</strong> Diese Website nutzt Google Maps. Dabei wird Ihre IP-Adresse an Google übertragen. Weitere Informationen: <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Datenschutzerklärung von Google</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Widerspruch gegen Werbemails</h2>
          <p>Der Nutzung der veröffentlichten Kontaktdaten zur Übersendung nicht angeforderter Werbung wird widersprochen. Bei Zuwiderhandlung behalten wir uns rechtliche Schritte vor.</p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
