import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const titleAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 1,
      type: "spring",
      stiffness: 100 
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={styles.container}>
      <section style={styles.introSection}>
        <motion.div style={styles.introContent} variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 style={styles.title} variants={titleAnimation}>
            About MG Biodigesters
          </motion.h1>
          <motion.p style={styles.subtitle} variants={fadeInUp}>
            Revolutionizing Waste Management with Innovative Biodigester Solutions
          </motion.p>
          <motion.p style={styles.content} variants={fadeInUp}>
            At MG Biodigesters, we're passionate about creating a cleaner, more sustainable future through innovative waste management solutions. Founded in 2024, we've quickly established ourselves at the forefront of biodigester technology, specializing in <span style={styles.highlight}>cutting-edge plastic septic tanks</span> and comprehensive biodigester services.
          </motion.p>
          <motion.p style={styles.content} variants={fadeInUp}>
            Our journey began with a simple yet powerful idea: to transform waste from a problem into an opportunity. Today, we're proud to be industry leaders, offering solutions that not only manage waste effectively but also contribute to energy production and environmental conservation.
          </motion.p>
        </motion.div>
        <motion.img 
          style={styles.introImage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/images/WhatsApp Image 2025-01-05 at 14.23.31_a1bb95b6.jpg" 
          alt="MG Biodigesters facility"
        />
      </section>

      <section style={styles.teamSection}>
        <motion.h2 style={styles.sectionTitle} {...fadeInUp}>
          Meet Our Team
        </motion.h2>
        <div style={styles.teamGrid}>
          {[
            { 
              id: 1, 
              imageSrc: "/images/Screenshot 2025-01-17 154108.png",
              name: "Benson Emuget",
              role: "Chief Executive Officer",
              description: "John brings over 20 years of experience in sustainable technology and waste management to lead our team towards innovative solutions."
            },
            { 
              id: 2, 
              imageSrc: "/placeholder.svg?height=300&width=300&text=Jane+Smith",
              name: "Jane Smith",
              role: "Head of Research & Development",
              description: "With a Ph.D. in Environmental Engineering, Jane spearheads our cutting-edge biodigester technology development."
            },
            { 
              id: 3, 
              imageSrc: "/placeholder.svg?height=300&width=300&text=Mike+Johnson",
              name: "Mike Johnson",
              role: "Operations Manager",
              description: "Mike ensures the smooth running of our facilities and oversees the implementation of our biodigester solutions across various projects."
            }
          ].map((member, index) => (
            <motion.div key={index} style={styles.teamMember} {...fadeInUp} transition={{ delay: index * 0.1 }}>
              <img src={member.imageSrc || "/placeholder.svg"} alt={member.name} style={styles.teamMemberImage} />
              <h3 style={styles.teamMemberName}>{member.name}</h3>
              <p style={styles.teamMemberRole}>{member.role}</p>
              <p style={styles.teamMemberDescription}>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={styles.missionVisionSection}>
        <div style={styles.imagesContainer}>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKgdIBdhJRIZweRk9DvjitEwcNbWHG.png" alt="Our Mission" style={styles.largeImage} />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EgjItirYJGdtqLQgaFQSc3u2pX3n3y.png" alt="Our Vision" style={styles.largeImage} />
        </div>

        <motion.div
          style={styles.mottoContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          {...fadeInUp}
        >
          <p style={styles.motto}>"Turning Waste into Wonder: Innovate, Sustain, Thrive"</p>
        </motion.div>
      </section>

      <motion.section style={styles.expertiseSection} {...fadeInUp}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.h2>
        <div style={styles.expertiseGrid}>
          {[
            {
              title: 'Advanced Plastic Septic Tanks',
              text: 'Engineered for durability, efficiency, and environmental compatibility.'
            },
            {
              title: 'Biodigester Enzymes',
              text: 'Cutting-edge formulations that accelerate waste breakdown and enhance biogas production.'
            },
            {
              title: 'Wastewater Management',
              text: 'Comprehensive solutions for treating and recycling wastewater in various settings.'
            },
            {
              title: 'Installation & Maintenance',
              text: 'Expert services ensuring optimal performance and longevity of your biodigester systems.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              style={styles.expertiseItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span style={styles.highlight}>{item.title}</span>
              <p style={styles.expertiseText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1700px',
    margin: '0 auto',
    padding: '6rem 2rem',
    backgroundColor: 'white',
    color: '#333',
    fontFamily: "'Poppins', sans-serif",
  },
  introSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginTop: '-4rem',
  },
  introContent: {
    maxWidth: '600px',
  },
  introImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '3rem',
    fontWeight: 800,
    color: '#A31621',
    marginBottom: '1rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.0rem',
    color: '#666',
    marginBottom: '2rem',
    lineHeight: 1.4,
  },
  content: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#444',
    marginBottom: '1.5rem',
  },
  highlight: {
    color: '#A31621',
    fontWeight: 600,
  },
  teamSection: {
    marginTop: '6rem',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  teamMember: {
    textAlign: 'center',
  },
  teamMemberImage: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  teamMemberName: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#A31621',
    marginBottom: '0.5rem',
  },
  teamMemberRole: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  teamMemberDescription: {
    fontSize: '1rem',
    color: '#444',
  },
  missionVisionSection: {
    margin: '6rem 0',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  largeImage: {
    width: '48%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  mottoContainer: {
    textAlign: 'center',
    padding: '1rem',
    background: 'linear-gradient(135deg, #A31621 0%, #8B1219 100%)',
    borderRadius: '10px',
    marginTop: '4rem',
    transition: 'all 0.3s ease',
  },
  motto: {
    fontSize: '1.5rem',
    fontWeight: 600,
    fontStyle: 'italic',
    color: 'white',
    margin: 0,
    lineHeight: 1.4,
  },
  expertiseSection: {
    marginTop: '6rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#A31621',
    marginBottom: '3rem',
    textAlign: 'center',
    fontWeight: 700,
  },
  expertiseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  expertiseItem: {
    padding: '2rem',
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
  },
  expertiseText: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#666',
  },
};

export default AboutUs;

