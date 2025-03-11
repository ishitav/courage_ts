import { motion } from "framer-motion";

const OurMessage = () => {
  return (
    <motion.section 
      className="section message"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src="/sample.png" alt="Sample Message Image" className="rounded-image glow" />
      <div className="content">
        <h2 className="title">Our Message</h2>
        <p>Spreading love and positivity through fashion.</p>
      </div>
    </motion.section>
  );
};

export default OurMessage;