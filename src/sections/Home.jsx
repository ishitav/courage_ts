import { motion } from "framer-motion";

const Home = ({ scrollToShop }) => {
  return (
    <motion.section 
      className="section home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-container">
        <div className="highlight-container">
          <motion.div 
            className="highlight-text" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
          >
            Comfort
          </motion.div>
          <motion.div 
            className="highlight-text" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }}
          >
            Style
          </motion.div>
          <motion.div 
            className="highlight-text" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.6 }}
          >
            Ease
          </motion.div>
          <motion.button 
            className="shop-now-button"
            onClick={scrollToShop}
            whileHover={{ scale: 1.05 }}
          >
            Shop now
          </motion.button>
        </div>
        <img src="/photo1.jpg" alt="Sample Home Image" className="rounded-image glow" />
      </div>
    </motion.section>
  );
};

export default Home;