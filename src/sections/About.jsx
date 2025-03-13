import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="section about"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Centered About Us Title */}
      <h2 className="title about-title">About Us</h2>

      <div className="about-container">
        <div className="about-content">
          <img src="/sample.png" alt="About Image" className="rounded-image glow" />
          <div className="content limited-width">
            <p>We believe in creating apparel that spreads positivity and strength. 
            Our mission is to design clothing that empowers individuals and builds 
            a sense of community.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;