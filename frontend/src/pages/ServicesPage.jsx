import React from "react"
import { useParams, useNavigate } from "react-router-dom"

const ServicesPage = () => {
  const { service } = useParams()
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact-us')
  }

  const renderService = () => {
    switch (service) {
      case "plastic-septic-tanks":
        return (
          <>
            <h1 style={styles.title}>Plastic Septic Tanks</h1>
            <div style={styles.contentWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="https://s.alicdn.com/@sc04/kf/Hb4536fb271ef4aa0b63607b3a782f881d.png_300x300.jpg"
                  alt="Plastic Septic Tank"
                  style={styles.image}
                />
              </div>
              <div style={styles.textContent}>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Efficient and Durable Waste Management Solutions</h2>
                  <p style={styles.description}>
                    Our plastic septic tanks offer a modern, efficient, and eco-friendly solution for waste management.
                    Designed with durability and ease of installation in mind, these tanks are perfect for both
                    residential and commercial applications.
                  </p>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Key Features</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Lightweight and easy to install</li>
                    <li style={styles.listItem}>Corrosion-resistant and long-lasting</li>
                    <li style={styles.listItem}>Various sizes available to suit different needs</li>
                    <li style={styles.listItem}>Environmentally friendly and leak-proof design</li>
                    <li style={styles.listItem}>Low maintenance requirements</li>
                  </ul>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Why Choose Our Plastic Septic Tanks?</h2>
                  <p style={styles.description}>
                    Our tanks are made from high-quality, UV-stabilized polyethylene, ensuring they can withstand harsh
                    environmental conditions. They're designed to efficiently separate solids and liquids, promoting
                    better waste decomposition and reducing environmental impact.
                  </p>
                </section>
                <button style={styles.ctaButton} onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </>
        )

      case "sale-of-biodigester-enzymes":
        return (
          <>
            <h1 style={styles.title}>Sale of Biodigester Enzymes</h1>
            <div style={styles.contentWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="https://i.pinimg.com/736x/a6/6d/37/a66d37d6d19078a26457e9ffff9dfb2d.jpg"
                  alt="Biodigester Enzymes"
                  style={styles.image}
                />
              </div>
              <div style={styles.textContent}>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Boost Your Biodigester's Performance</h2>
                  <p style={styles.description}>
                    Our specially formulated biodigester enzymes are designed to enhance the efficiency of your waste
                    management system. These powerful enzymes accelerate the breakdown of organic matter, leading to
                    increased biogas production and reduced odors.
                  </p>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Benefits of Our Enzymes</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Faster decomposition of organic waste</li>
                    <li style={styles.listItem}>Increased biogas production</li>
                    <li style={styles.listItem}>Reduced odor emissions</li>
                    <li style={styles.listItem}>Improved overall system efficiency</li>
                    <li style={styles.listItem}>Eco-friendly and safe for use</li>
                  </ul>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>How It Works</h2>
                  <p style={styles.description}>
                    Our enzymes contain a carefully selected blend of microorganisms that thrive in anaerobic
                    conditions. When added to your biodigester, they quickly multiply and accelerate the breakdown of
                    complex organic compounds, resulting in more efficient waste processing and increased biogas yield.
                  </p>
                </section>
                <button style={styles.ctaButton} onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </>
        )

      case "waste-water-management":
        return (
          <>
            <h1 style={styles.title}>Waste Water Management</h1>
            <div style={styles.contentWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="https://i.pinimg.com/736x/b3/27/52/b3275222938c693db73855dd06c32e94.jpg"
                  alt="Waste Water Management"
                  style={styles.image}
                />
              </div>
              <div style={styles.textContent}>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Comprehensive Waste Water Solutions</h2>
                  <p style={styles.description}>
                    Our waste water management services offer end-to-end solutions for treating and managing waste water
                    efficiently. We combine cutting-edge technology with sustainable practices to ensure optimal water
                    treatment and recycling.
                  </p>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Our Services Include</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Waste water treatment system design and installation</li>
                    <li style={styles.listItem}>Regular maintenance and servicing</li>
                    <li style={styles.listItem}>Water quality testing and monitoring</li>
                    <li style={styles.listItem}>Upgrade and optimization of existing systems</li>
                    <li style={styles.listItem}>Consultancy on water conservation and recycling</li>
                  </ul>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Why Choose Our Waste Water Management Services?</h2>
                  <p style={styles.description}>
                    With our expertise, you can ensure compliance with environmental regulations while minimizing your
                    ecological footprint. Our solutions are tailored to your specific needs, whether you're a small
                    household or a large industrial facility. We focus on sustainable practices that not only treat
                    waste water but also explore possibilities for water reuse and recycling.
                  </p>
                </section>
                <button style={styles.ctaButton} onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </>
        )

      case "bio-digester-installation":
        return (
          <>
            <h1 style={styles.title}>Biodigester Installation</h1>
            <div style={styles.contentWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="https://biotankafrica.co.ke/wp-content/uploads/2024/03/Screenshot-2024-03-11-at-7.59.46-AM-1024x597.webp"
                  alt="Biodigester Installation"
                  style={styles.image}
                />
              </div>
              <div style={styles.textContent}>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Professional Biodigester Installation Services</h2>
                  <p style={styles.description}>
                    Our expert team provides comprehensive biodigester installation services, ensuring that your waste
                    management system is set up for optimal performance. We handle everything from site assessment to
                    system commissioning, guaranteeing a smooth and efficient installation process.
                  </p>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Our Installation Process</h2>
                  <ul style={styles.list}>
                    <li style={styles.listItem}>Initial site assessment and system design</li>
                    <li style={styles.listItem}>Excavation and ground preparation</li>
                    <li style={styles.listItem}>Biodigester tank installation</li>
                    <li style={styles.listItem}>Piping and connection setup</li>
                    <li style={styles.listItem}>Biogas collection system installation</li>
                    <li style={styles.listItem}>System testing and commissioning</li>
                    <li style={styles.listItem}>User training and handover</li>
                  </ul>
                </section>
                <section style={styles.section}>
                  <h2 style={styles.subtitle}>Why Choose Our Installation Service?</h2>
                  <p style={styles.description}>
                    With years of experience in biodigester installations, we ensure that your system is perfectly
                    tailored to your needs and installed to the highest standards. Our team uses the latest techniques
                    and equipment to guarantee a durable, efficient, and safe installation. We also provide
                    comprehensive training on system operation and maintenance, ensuring you get the most out of your
                    biodigester.
                  </p>
                </section>
                <button style={styles.ctaButton} onClick={handleContactClick}>Contact Us</button>
              </div>
            </div>
          </>
        )

      default:
        return <h1 style={styles.title}>Service not found</h1>
    }
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.diagonalOverlay} />
      {renderService()}
    </div>
  )
}

const styles = {
  pageContainer: {
    maxWidth: "1700px",
    margin: "80px auto 0",
    backgroundColor: "#ffffff",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  diagonalOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    background: "#B31942",
    transform: "skewX(-20deg) translateX(20%)",
    zIndex: 1,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "2rem",
    marginBottom: "2rem",
    position: "relative",
    zIndex: 2,
  },
  textContent: {
    flex: 1,
    color: "#ffffff",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "2.5rem",
    color: "#B31942",
    marginBottom: "1rem",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#B31942",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#333333",
    marginBottom: "1.5rem",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "3rem",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  listItem: {
    fontSize: "1.1rem",
    color: "#333333",
    marginBottom: "0.5rem",
    paddingLeft: "1.5rem",
    position: "relative",
  },
  ctaButton: {
    backgroundColor: "#B31942",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#8B1332",
    },
  },
}

export default ServicesPage