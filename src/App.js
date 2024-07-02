import "./App.css";
import Header from "./components/header/Header.js";
import Hero from "./components/Hero/Hero.jsx"
import Slider from "./components/Slider/Slider.jsx"
import Virtual from "./components/Virtual/virtual.jsx"
import Products from "./components/Products/Product.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx"
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
