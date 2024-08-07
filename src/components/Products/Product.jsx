import React, { useState, useEffect } from "react";
import css from "./Product.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const Products = () => {
  const [parent] = useAutoAnimate();
  const navigate = useNavigate(); // Initialize useNavigate
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const location = useLocation();
  
  const handleCart = (product) => {
    // Navigate to cart page with state containing product
    navigate('/cart', { state: { product } });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");
    if (searchTerm) {
      setMenuProducts(ProductsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setMenuProducts(ProductsData);
    }
  }, [location.search]);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter('skin care')}>Skin Care</li>
          <li onClick={() => filter('conditioner')}>Conditioner</li>
          <li onClick={() => filter('foundation')}>Foundation</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div key={i} className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div onClick={() => handleCart(product)}>Shop Now</div> {/* Pass product to handleCart */}
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
