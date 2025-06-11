import Hero from "./sections/Hero";
import Steps from "./sections/Steps";
import Approach from "./sections/Approach";
import Method from "./sections/Method";
import Why from "./sections/Why";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Hero />
      <Steps />
      <Approach />
      <Method />
      <Why />
    </div>
  );
}

export default App;
