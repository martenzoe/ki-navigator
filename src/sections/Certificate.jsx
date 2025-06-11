import cert from "../assets/zertifikat.jpeg";

export default function Certificate() {
  return (
    <section id="zertifikat" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Zertifiziert als KI-Managerin (HC)
        </h2>
        <p className="text-gray-700 mb-8">
          Der Zertifikatslehrgang umfasst 8 Module – von KI-Strategie über Prompt Engineering bis zu rechtlichen Aspekten.
          Die Inhalte sind praxisnah und auf die Anforderungen von Unternehmen abgestimmt.
        </p>
        <img
          src={cert}
          alt="Zertifikat Beate Zöllner KI-Managerin"
          className="w-full max-w-2xl mx-auto rounded shadow-lg"
        />
      </div>
    </section>
  );
}
