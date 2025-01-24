import React, { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

const Navbar = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState("")
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout } = useUser()
  const userMenuRef = useRef(null)

  const services = [
    "Plastic septic tanks",
    "Sale of Biodigester Enzymes",
    "Waste Water management",
    "Bio digester installation",
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.75rem 1.5rem",
      background: "linear-gradient(to right, rgba(163, 22, 33, 0.8), rgba(163, 22, 33, 0.6))",
      backdropFilter: "blur(8px)",
      zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      transition: "background 0.3s ease",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "#FFFFFF",
      cursor: "pointer",
      textDecoration: "none",
      transition: "transform 0.3s ease",
    },
    logoIcon: {
      width: "32px",
      height: "32px",
      marginRight: "8px",
    },
    links: {
      display: "flex",
      gap: "1.5rem",
      alignItems: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "0.9rem",
      padding: "0.4rem 0.8rem",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      position: "relative",
    },
    servicesContainer: {
      position: "relative",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: "0",
      background: "white",
      borderRadius: "8px",
      padding: "0.4rem",
      marginTop: "0.4rem",
      minWidth: "220px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    dropdownItem: {
      color: "#333",
      padding: "0.6rem 0.8rem",
      textDecoration: "none",
      display: "block",
      borderRadius: "4px",
      transition: "all 0.2s ease",
      fontSize: "0.85rem",
    },
    button: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#FFFFFF",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      padding: "0.6rem 1.2rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    userMenu: {
      position: "relative",
    },
    userMenuButton: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "none",
      padding: "0.4rem 0.8rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
    userMenuDropdown: {
      position: "absolute",
      top: "100%",
      right: "0",
      background: "white",
      borderRadius: "8px",
      padding: "0.4rem",
      marginTop: "0.4rem",
      minWidth: "150px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  }

  return (
    <nav style={styles.nav}>
      <Link
        to="/"
        style={{
          ...styles.logo,
          transform: isHovered === "logo" ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered("logo")}
        onMouseLeave={() => setIsHovered("")}
        onClick={() => navigate("/")}
      >
        <svg style={styles.logoIcon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#A31621" />
          <path d="M20 20 L50 50 L20 80" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <path d="M50 20 L80 50 L50 80" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="white" />
        </svg>
        Mg BioDigesters
      </Link>
      <div style={styles.links}>
        {["Home", "About Us", "Blog and Articles", "Contact Us", "Shop"].map((link) => (
          <Link
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
            style={{
              ...styles.link,
              backgroundColor: isHovered === link ? "rgba(255, 255, 255, 0.1)" : "transparent",
              transform: isHovered === link ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsHovered(link)}
            onMouseLeave={() => setIsHovered("")}
          >
            {link}
          </Link>
        ))}
        <div
          style={styles.servicesContainer}
          onMouseEnter={() => {
            setIsHovered("Services")
            setIsServicesOpen(true)
          }}
          onMouseLeave={() => {
            setIsHovered("")
            setIsServicesOpen(false)
          }}
        >
          <span
            style={{
              ...styles.link,
              color: isServicesOpen ? "#FFFFFF" : "white",
              backgroundColor: isHovered === "Services" ? "rgba(255, 255, 255, 0.1)" : "transparent",
              transform: isHovered === "Services" ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            Our Services
          </span>
          {isServicesOpen && (
            <div style={styles.dropdown}>
              {services.map((service) => (
                <Link
                  key={service}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  style={styles.dropdownItem}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(163, 22, 33, 0.1)"
                    e.target.style.color = "#A31621"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.color = "#333"
                  }}
                >
                  {service}
                </Link>
              ))}
            </div>
          )}
        </div>
        {user ? (
          <div style={styles.userMenu} ref={userMenuRef}>
            <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} style={styles.userMenuButton}>
              {user.name}
            </button>
            {isUserMenuOpen && (
              <div style={styles.userMenuDropdown}>
                <Link to="/profile" style={styles.dropdownItem} onClick={() => setIsUserMenuOpen(false)}>
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsUserMenuOpen(false)
                  }}
                  style={{
                    ...styles.dropdownItem,
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            style={{
              ...styles.button,
              transform: isHovered === "button" ? "translateY(-2px)" : "translateY(0)",
              boxShadow:
                isHovered === "button" ? "0 4px 12px rgba(255, 255, 255, 0.2)" : "0 2px 4px rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={() => setIsHovered("button")}
            onMouseLeave={() => setIsHovered("")}
          >
            Sign Up / Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar

