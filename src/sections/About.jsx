import { motion } from "framer-motion";
import "../index.css";

const About = () => {
  return (
    <motion.section 
      className="section about"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="page-container">
        <h2 className="page-title">About Us</h2>
        
        {/* First Row */}
        <div className="content-wrapper about-spacing">
          <img src="/photo2.JPG" alt="About Image 1" className="rounded-image uniform-image" />
          <div className="content">
            <p>
            Katie was diagnosed with Lymphoma
            when she was 8 years old and underwent two years of chemotherapy.
            </p>
           
          </div>
        </div>
        
        {/* Second Row */}
        <div className="content-wrapper about-spacing">
          
          <div className="content">
            <p>
            For doctors to administer medicine, she had a medical port inserted in her chest. However, in order for doctors to access her port, she had to pull her shirt above her head feeling vulnerable, uncomfortable, and embarrassed.
            </p>
   
          </div>
          <img src="/photo4.JPG" alt="About Image 2" className="rounded-image uniform-image" />
        </div>
        
        {/* Third Row */}
        <div className="content-wrapper about-spacing">
          <img src="/photo5.JPG" alt="About Image 3" className="rounded-image uniform-image" />
          <div className="content">
            <p>
            Casey, Katie’s mom, saw her pain and decided to find a solution. She went home, took two of Katie’s favorite shirts, cut a slit in them and sewed on four plastic buttons. 
            </p>

          </div>
        </div>
        
        {/* Centered Statement at the Bottom */}
        <div className="centered-text-container">
          <h3 className="highlight-text about-bottom-text">From there, <span className="courage-highlight">Courage T's</span> was born.</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
