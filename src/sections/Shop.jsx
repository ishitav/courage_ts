import { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

const Shop = () => {
  const [preorder, setPreorder] = useState({ name: "", email: "", size: "" });

  return (
    <motion.section 
      className="section shop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="page-container">
        <h2 className="page-title">Shop</h2>
        
        <div className="product-container">
          <motion.img 
            src="/image7.png" 
            alt="Courage T-Shirt" 
            className="rounded-image product-image"
            whileHover={{ scale: 1.05 }}
          />
          <div className="product-info">
            <h3 className="product-title">The Courage T</h3>
            <p className="product-description">
              A symbol of strength and resilience, designed for both comfort and purpose. 
              Featuring a soft fabric blend and accessible design, the Courage T ensures
              confidence in every wear.
            </p>
            <p className="product-price">$30.00</p>
            
            {/* <h3 className="preorder-title">Secure Your Order</h3>
            <p className="preorder-description">Limited availability – preorder now to guarantee your Courage T.</p> */}

            <div className="preorder-form">
              <input type="text" placeholder="Name" onChange={(e) => setPreorder({ ...preorder, name: e.target.value })} />
              <input type="email" placeholder="Email" onChange={(e) => setPreorder({ ...preorder, email: e.target.value })} />
              <select onChange={(e) => setPreorder({ ...preorder, size: e.target.value })}>
                <option value="" disabled selected>Choose your size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
              </select>
              <motion.button 
                onClick={() => alert("Preorder submitted! Thank you for your support.")}
                whileHover={{ scale: 1.05 }}
                className="preorder-button"
              >
                Preorder Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Shop;