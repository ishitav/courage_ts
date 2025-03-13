import { motion } from "framer-motion";
import "../index.css";

const OurMessage = () => {
  return (
    <motion.section 
      className="section message"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="page-container">
        <h2 className="page-title">Our Message</h2>
        <div className="content-wrapper">
          <img src="/photo3.JPG" alt="Message Image" className="rounded-image" />
          <div className="content">
            <p>
            At Courage T’s, we strive to focus on individuality. We know how difficult cancer treatment is and we want to make sure each patient has something to wear that they love. 
            Our designs encourage independence, confidence, and expression. 
            </p>
    
            <p>
            
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMessage;