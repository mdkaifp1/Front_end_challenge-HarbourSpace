import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import Header from "./container/Header/header";
import About from "./container/About/about";
import Slider from "./container/Slider/slider";
import Accordian from "./container/Accordian/accordian";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Slider />
      <Accordian />
    </div>
  );
};

export default App;
