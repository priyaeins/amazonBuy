import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Slider from './Components/Slider/Slider';
import Virtual from './Components/Virtual/virtual';
import Products from './Components/Products/Product';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header isSignedUp={isSignedUp} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage setIsSignedUp={setIsSignedUp} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
    </>
  );
}

function SignUpPage({ setIsSignedUp }) {
  return (
    <>
      <SignUp setIsSignedUp={setIsSignedUp} />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <Products />
    </>
  );
}
function BrandsPage() {
  return(
    <Brands />
  )

}
function CartPage() {
  return(
    <Cart />
  )
}
export default App;
