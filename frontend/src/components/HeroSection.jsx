import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const styles = {
    hero: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#004d40',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.4,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    textContent: {
      flex: '1',
      maxWidth: '600px',
    },
    welcome: {
      color: '#FFA500',
      fontSize: '1.2rem',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem',
    },
    welcomeLine: {
      width: '3rem',
      height: '2px',
      backgroundColor: '#FFA500',
    },
    heading: {
      fontSize: '4rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
      marginBottom: '1rem',
    },
    highlight: {
      color: '#FFA500',
      display: 'inline-block',
    },
    subheading: {
      fontSize: '1.5rem',
      marginBottom: '3rem',
      lineHeight: 1.6,
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      fontWeight: 500,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none',
    },
    primaryButton: {
      backgroundColor: '#FFA500',
      color: 'white',
    },
    secondaryButton: {
      backgroundColor: '#003329',
      color: 'white',
    },
    arrow: {
      marginLeft: '0.5rem',
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    rightImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div style={styles.hero}>
      <img
        src="https://i.pinimg.com/736x/bf/1c/5f/bf1c5fceeccdf2c9dd9777304840e1c1.jpg"
        alt="Biodigester background"
        style={styles.backgroundImage}
      />
      <div style={styles.content}>
        <div style={styles.textContent}>
          <motion.div 
            style={styles.welcome}
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div style={styles.welcomeLine}></div>
            Revolutionizing Waste Management
          </motion.div>
          
          <motion.h1 
            style={styles.heading}
            {...slideIn}
            transition={{ delay: 0.4 }}
          >
            Transform Waste into <span style={styles.highlight}>Sustainable Energy</span>
          </motion.h1>
          
          <motion.p 
            style={styles.subheading}
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            Experience the future of eco-friendly solutions with our innovative biodigesters. 
            Reduce your carbon footprint and generate clean energy from organic waste.
          </motion.p>
          
          <motion.div 
            style={styles.buttonContainer}
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            <button 
              style={{...styles.button, ...styles.primaryButton}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = '#FF8C00';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#FFA500';
              }}
            >
              Explore Solutions
              <span style={styles.arrow}>→</span>
            </button>
            <button 
              style={{...styles.button, ...styles.secondaryButton}}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = '#004d40';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#003329';
              }}
            >
              Get a Quote
              <span style={styles.arrow}>→</span>
            </button>
          </motion.div>
        </div>
        <motion.div 
          style={styles.imageContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="https://i.pinimg.com/736x/12/3c/7a/123c7a4a0d7ed2fad2546cc273af7b0c.jpg"
            alt="Biodigester in action"
            style={styles.rightImage}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

