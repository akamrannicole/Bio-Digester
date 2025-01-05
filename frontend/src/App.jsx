import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';

const App = () => {
  const styles = {
    app: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#E5DCC3', 
    },
  };

  return (
    <div style={styles.app}>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;

