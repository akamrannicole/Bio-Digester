import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'Plastic septic tanks',
    'Sale of Biodigester Enzymes',
    'Waste Water management',
    'Bio digester installation'
  ];

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
      backgroundColor: 'rgba(0, 77, 64, 0.95)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#FFA500',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
    },
    links: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    servicesContainer: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: 'rgba(0, 77, 64, 0.98)',
      borderRadius: '8px',
      padding: '0.5rem',
      marginTop: '0.5rem',
      minWidth: '250px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    },
    dropdownItem: {
      color: 'white',
      padding: '0.75rem 1rem',
      textDecoration: 'none',
      display: 'block',
      borderRadius: '4px',
      transition: 'all 0.2s ease',
    },
    button: {
      backgroundColor: '#FFA500',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <nav style={styles.nav}>
      <Link
        to="/"
        style={{
          ...styles.logo,
          transform: isHovered === 'logo' ? 'scale(1.05)' : 'scale(1)',
        }}
        onMouseEnter={() => setIsHovered('logo')}
        onMouseLeave={() => setIsHovered('')}
      >
        BioDynamics
      </Link>
      <div style={styles.links}>
        {['Home', 'About Us', 'Blog and Articles', 'Contact'].map((link) => (
          <Link
            key={link}
            to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              ...styles.link,
              backgroundColor: isHovered === link ? 'rgba(255, 165, 0, 0.1)' : 'transparent',
              transform: isHovered === link ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setIsHovered(link)}
            onMouseLeave={() => setIsHovered('')}
          >
            {link}
          </Link>
        ))}
        <div
          style={styles.servicesContainer}
          onMouseEnter={() => {
            setIsHovered('Services');
            setIsServicesOpen(true);
          }}
          onMouseLeave={() => {
            setIsHovered('');
            setIsServicesOpen(false);
          }}
        >
          <span
            style={{
              ...styles.link,
              color: isServicesOpen ? '#FFA500' : 'white',
              backgroundColor: isHovered === 'Services' ? 'rgba(255, 165, 0, 0.1)' : 'transparent',
              transform: isHovered === 'Services' ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            Our Services
          </span>
          {isServicesOpen && (
            <div style={styles.dropdown}>
              {services.map((service) => (
                <Link
                  key={service}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  style={styles.dropdownItem}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 165, 0, 0.1)';
                    e.target.style.color = '#FFA500';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                  }}
                >
                  {service}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          to="/login"
          style={{
            ...styles.button,
            transform: isHovered === 'button' ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: isHovered === 'button'
              ? '0 4px 12px rgba(255, 165, 0, 0.3)'
              : '0 2px 4px rgba(255, 165, 0, 0.1)',
          }}
          onMouseEnter={() => setIsHovered('button')}
          onMouseLeave={() => setIsHovered('')}
        >
          Sign Up / Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
