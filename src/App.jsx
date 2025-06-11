import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Steps from "./sections/Steps";
import Approach from "./sections/Approach";
import Method from "./sections/Method";
import Why from "./sections/Why";
import Contact from "./sections/Contact";
import Certificate from "./sections/Certificate";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Steps />
      <Approach />
      <Method />
      <Why />
      <Contact />
      <Certificate />
    </div>
  );
}

export default App;
