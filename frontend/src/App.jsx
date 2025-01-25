import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import AuthPage from "./pages/AuthPage"
import AdminDashboard from "./components/AdminDashboard"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutUs from "./pages/AboutUsPage"
import BlogsAndArticles from "./pages/BlogsAndArticles"
import BlogPost from "./pages/BlogPost"
import ContactUs from "./pages/ContactUs"
import ShopPage from "./pages/ShopPage"
import ServicesPage from "./pages/ServicesPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProfilePage from "./pages/ProfilePage"

const AppContent = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#E5DCC3",
      }}
    >
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog-and-articles" element={<BlogsAndArticles />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/services/:service" element={<ServicesPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  )
}

export default App

