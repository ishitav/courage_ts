import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="section about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="content">
        <h2 className="title">About Us</h2>
        <p>We create t-shirts that inspire courage and connection.</p>
      </div>
      <img src="/sample.png" alt="Sample About Image" className="rounded-image glow" />
    </motion.section>
  );
};

export default About;