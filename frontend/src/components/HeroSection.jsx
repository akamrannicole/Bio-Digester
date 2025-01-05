'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const styles = {
    hero: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#004d40', // Dark teal background
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
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
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
      maxWidth: '800px',
    },
    highlight: {
      color: '#FFA500',
      display: 'block',
    },
    subheading: {
      fontSize: '2rem',
      marginBottom: '3rem',
      maxWidth: '600px',
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
      transition: 'transform 0.3s ease',
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
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div style={styles.hero}>
      <img
        src="/placeholder.svg?height=1080&width=1920&text=Biodigester+Background"
        alt=""
        style={styles.backgroundImage}
      />
      <div style={styles.content}>
        <motion.div 
          style={styles.welcome}
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div style={styles.welcomeLine}></div>
          Welcome To BioDynamics
        </motion.div>
        
        <motion.h1 
          style={styles.heading}
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          For The Most Innovative{' '}
          <span style={styles.highlight}>Biodigester</span> Solutions
        </motion.h1>
        
        <motion.p 
          style={styles.subheading}
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          Septic Tanks That Never Fill Up
        </motion.p>
        
        <motion.div 
          style={styles.buttonContainer}
          {...fadeIn}
          transition={{ delay: 0.8 }}
        >
          <button 
            style={{...styles.button, ...styles.primaryButton}}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Our Services
            <span style={styles.arrow}>→</span>
          </button>
          <button 
            style={{...styles.button, ...styles.secondaryButton}}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Contact Us
            <span style={styles.arrow}>→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

