import { motion } from "framer-motion";

const OurMessage = () => {
  return (
    <motion.section 
      className="section message"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="message-container">
        <img src="/sample.png" alt="Message Image" className="rounded-image glow" />
        <div className="content">
          <h2 className="title">Our Message</h2>
          <p>Spreading love and positivity through fashion, we believe in using apparel to create meaningful connections.</p>
          <p>Every design represents courage, unity, and self-expression, allowing you to wear your values with pride.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMessage;