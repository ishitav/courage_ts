import { useState } from "react";
import { motion } from "framer-motion";

const Shop = () => {
  const [preorder, setPreorder] = useState({ name: "", email: "", size: "" });

  return (
    <section className="section shop">
      <h2 className="title">Shop</h2>
      <p>Preorder your favorite Courage T’s now!</p>

      <div className="shirts">
        <motion.img 
          src="/sample.png" 
          alt="Shirt 1" 
          className="rounded-image glow"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img 
          src="/sample.png" 
          alt="Shirt 2" 
          className="rounded-image glow"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <div className="preorder-form">
        <input type="text" placeholder="Name" onChange={(e) => setPreorder({ ...preorder, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setPreorder({ ...preorder, email: e.target.value })} />
        <input type="text" placeholder="Size" onChange={(e) => setPreorder({ ...preorder, size: e.target.value })} />
        <motion.button 
          onClick={() => alert("Preorder submitted!")}
          whileHover={{ scale: 1.05 }}
        >
          Preorder Now
        </motion.button>
      </div>
    </section>
  );
};

export default Shop;