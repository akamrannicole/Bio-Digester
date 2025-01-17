import React, { useState, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Create UserContext
const UserContext = createContext();

// UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

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
      background: 'linear-gradient(to right, rgba(163, 22, 33, 0.8), rgba(163, 22, 33, 0.6))',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'background 0.3s ease',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#FFFFFF',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
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
      background: 'linear-gradient(to bottom, rgba(163, 22, 33, 0.9), rgba(163, 22, 33, 0.7))',
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
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#FFFFFF',
      border: '1px solid rgba(255, 255, 255, 0.3)',
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
        onClick={() => navigate('/')}
      >
        <svg style={styles.logoIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5"/>
          <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="white"/>
          <path d="M40 50 L50 40 L60 50 L50 60 Z" fill="#A31621"/>
        </svg>
        Mg BioDigesters
      </Link>
      <div style={styles.links}>
        {['Home', 'About Us', 'Blog and Articles', 'Contact Us', 'Shop'].map((link) => (
          <Link
            key={link}
            to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              ...styles.link,
              backgroundColor: isHovered === link ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
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
              color: isServicesOpen ? '#FFFFFF' : 'white',
              backgroundColor: isHovered === 'Services' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
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
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = '#FFFFFF';
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
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={user.profilePicture || "/placeholder.svg"}
              alt={user.name}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            />
            <span style={{ color: 'white' }}>Welcome, {user.name}</span>
            <button
              onClick={logout}
              style={{
                ...styles.button,
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            style={{
              ...styles.button,
              transform: isHovered === 'button' ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: isHovered === 'button'
                ? '0 4px 12px rgba(255, 255, 255, 0.2)'
                : '0 2px 4px rgba(255, 255, 255, 0.1)',
            }}
            onMouseEnter={() => setIsHovered('button')}
            onMouseLeave={() => setIsHovered('')}
          >
            Sign Up / Login
          </Link>
        )}
      </div>
    </nav>
  );
};

// Wrap Navbar with UserProvider
const NavbarWithContext = () => (
  <UserProvider>
    <Navbar />
  </UserProvider>
);

export default NavbarWithContext;

