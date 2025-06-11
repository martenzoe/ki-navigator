import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Approach from "./sections/Approach";
import Method from "./sections/Method";
import Why from "./sections/Why";
import Contact from "./sections/Contact";
import Certificate from "./sections/Certificate";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";


function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <CookieBanner />
      <Hero />
      
      
      <Method />
      <Approach />
      <Why />
      <Contact />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
