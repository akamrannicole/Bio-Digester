import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const styles = {
    container: {
      maxWidth: '1700px',
      margin: '0 auto',
      padding: '6rem 2rem',
      backgroundColor: '#f0f8ff',
      color: '#333',
      fontFamily: "'Poppins', sans-serif",
    },
    section: {
      marginBottom: '4rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      color: '#004d40',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
    },
    content: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
    },
    highlight: {
      color: '#FFA500',
      fontWeight: 'bold',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    teamMember: {
      textAlign: 'center',
    },
    teamImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
    },
    teamName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#004d40',
      marginBottom: '0.5rem',
    },
    teamRole: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '0.5rem',
    },
    teamExpertise: {
      fontSize: '0.9rem',
      color: '#888',
    },
    missionVisionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    missionVision: {
      flex: '1 1 300px',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: '#f0f8ff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    motto: {
      fontSize: '1.5rem',
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#004d40',
      margin: '3rem 0',
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div style={styles.container}>
      <motion.header style={styles.header} {...fadeInUp}>
        <h1 style={styles.title}>About BioDynamics</h1>
        <p style={styles.subtitle}>Revolutionizing Waste Management with Innovative Biodigester Solutions</p>
      </motion.header>

      <motion.section style={styles.section} {...fadeInUp}>
        <h2 style={styles.title}>Our Story</h2>
        <p style={styles.content}>
          At BioDynamics, we're passionate about creating a cleaner, more sustainable future through innovative waste management solutions. Founded in 2010, we've been at the forefront of biodigester technology, specializing in <span style={styles.highlight}>cutting-edge plastic septic tanks</span> and comprehensive biodigester services.
        </p>
        <p style={styles.content}>
          Our journey began with a simple yet powerful idea: to transform waste from a problem into an opportunity. Today, we're proud to be industry leaders, offering a range of solutions that not only manage waste effectively but also contribute to energy production and environmental conservation.
        </p>
      </motion.section>

      <motion.section style={styles.section} {...fadeInUp}>
        <h2 style={styles.title}>Our Expert Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img src="/placeholder.svg?height=200&width=200&text=Dr.+Sarah+Chen" alt="Dr. Sarah Chen" style={styles.teamImage} />
            <h3 style={styles.teamName}>Dr. Sarah Chen</h3>
            <p style={styles.teamRole}>Chief Technology Officer</p>
            <p style={styles.teamExpertise}>Bioprocess Engineering, Anaerobic Digestion</p>
          </div>
          <div style={styles.teamMember}>
            <img src="/placeholder.svg?height=200&width=200&text=Michael+Okonkwo" alt="Michael Okonkwo" style={styles.teamImage} />
            <h3 style={styles.teamName}>Michael Okonkwo</h3>
            <p style={styles.teamRole}>Head of Product Development</p>
            <p style={styles.teamExpertise}>Plastic Engineering, Septic System Design</p>
          </div>
          <div style={styles.teamMember}>
            <img src="/placeholder.svg?height=200&width=200&text=Dr.+Emma+Rodriguez" alt="Dr. Emma Rodriguez" style={styles.teamImage} />
            <h3 style={styles.teamName}>Dr. Emma Rodriguez</h3>
            <p style={styles.teamRole}>Environmental Solutions Specialist</p>
            <p style={styles.teamExpertise}>Wastewater Treatment, Sustainable Technologies</p>
          </div>
        </div>
      </motion.section>

      <motion.section style={styles.section} {...fadeInUp}>
        <h2 style={styles.title}>Our Mission, Vision, and Motto</h2>
        <div style={styles.missionVisionContainer}>
          <div style={styles.missionVision}>
            <h3 style={{...styles.title, fontSize: '1.8rem'}}>Our Mission</h3>
            <p style={styles.content}>
              To revolutionize waste management through innovative biodigester solutions, transforming environmental challenges into opportunities for sustainability and growth.
            </p>
          </div>
          <div style={styles.missionVision}>
            <h3 style={{...styles.title, fontSize: '1.8rem'}}>Our Vision</h3>
            <p style={styles.content}>
              A world where waste is not a burden but a valuable resource, powering communities and preserving our planet for future generations.
            </p>
          </div>
        </div>
        <p style={styles.motto}>
          "Turning Waste into Wonder: Innovate, Sustain, Thrive"
        </p>
      </motion.section>

      <motion.section style={styles.section} {...fadeInUp}>
        <h2 style={styles.title}>Our Expertise</h2>
        <p style={styles.content}>
          At BioDynamics, we specialize in a range of innovative solutions designed to tackle today's waste management challenges:
        </p>
        <ul style={styles.content}>
          <li><span style={styles.highlight}>Advanced Plastic Septic Tanks:</span> Our flagship product, engineered for durability, efficiency, and environmental compatibility.</li>
          <li><span style={styles.highlight}>Biodigester Enzymes:</span> Cutting-edge formulations that accelerate waste breakdown and enhance biogas production.</li>
          <li><span style={styles.highlight}>Wastewater Management Systems:</span> Comprehensive solutions for treating and recycling wastewater in various settings.</li>
          <li><span style={styles.highlight}>Biodigester Installation and Maintenance:</span> Expert services ensuring optimal performance and longevity of your biodigester systems.</li>
        </ul>
        <p style={styles.content}>
          With BioDynamics, you're not just managing waste – you're partnering with nature to create a more sustainable, energy-efficient future. Join us in our mission to revolutionize waste management and pave the way for a cleaner, greener world.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutUs;

