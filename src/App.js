import "./App.css";
import Articles from "./Components/Articles";
import Navbar from "./Components/Navbar";
import Onboard from "./Components/Onboard";
import Reasons from "./Components/Reasons";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Onboard />
      <Reasons />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
