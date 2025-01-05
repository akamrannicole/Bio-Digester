import React, { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState('');

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'rgba(143, 168, 133, 0.95)', // Pale green with transparency
      backdropFilter: 'blur(5px)',
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4A4238', 
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      transform: isHovered === 'logo' ? 'scale(1.05)' : 'scale(1)',
    },
    links: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
    link: (linkName) => ({
      color: '#4A4238', // Deep brown
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
      backgroundColor: isHovered === linkName ? 'rgba(229, 220, 195, 0.3)' : 'transparent',
      transform: isHovered === linkName ? 'translateY(-2px)' : 'translateY(0)',
    }),
    button: {
      backgroundColor: '#4A4238', // Deep brown
      color: '#E5DCC3', // Warm beige
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      transform: isHovered === 'button' ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered === 'button' 
        ? '0 4px 12px rgba(74, 66, 56, 0.2)' 
        : '0 2px 4px rgba(74, 66, 56, 0.1)',
    },
  };

  return (
    <nav style={styles.nav}>
      <div 
        style={styles.logo}
        onMouseEnter={() => setIsHovered('logo')}
        onMouseLeave={() => setIsHovered('')}
      >
        BioDynamics
      </div>
      <div style={styles.links}>
        {['Home', 'About Us', 'Our Services', 'Blog and Articles', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={styles.link(link)}
            onMouseEnter={() => setIsHovered(link)}
            onMouseLeave={() => setIsHovered('')}
          >
            {link}
          </a>
        ))}
        <button 
          style={styles.button}
          onMouseEnter={() => setIsHovered('button')}
          onMouseLeave={() => setIsHovered('')}
        >
          Sign Up / Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

