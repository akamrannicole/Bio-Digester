import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutUs from './pages/AboutUsPage';
import BlogsAndArticles from './pages/BlogsAndArticles';
import BlogPost from './pages/BlogPost';

const App = () => {
  const styles = {
    app: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#E5DCC3', 
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog-and-articles" element={<BlogsAndArticles />} />
          <Route path="/blog/:id" element={<BlogPost />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

