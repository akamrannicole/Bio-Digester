import React, { useState } from "react"
import { useParams } from "react-router-dom"

const ServicesPage = () => {
  const { service } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/placeholder.svg?height=400&width=600&text=Installation+Image+1",
    "/placeholder.svg?height=400&width=600&text=Installation+Image+2",
    "/placeholder.svg?height=400&width=600&text=Installation+Image+3",
  ]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const ImageCarousel = () => (
    <div style={styles.carouselContainer}>
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`Installation step ${currentIndex + 1}`}
        style={styles.carouselImage}
      />
      <button onClick={goToPrevious} style={{ ...styles.carouselButton, ...styles.prevButton }}>
        &lt;
      </button>
      <button onClick={goToNext} style={{ ...styles.carouselButton, ...styles.nextButton }}>
        &gt;
      </button>
    </div>
  )

  const renderService = () => {
    switch (service) {
      case "plastic-septic-tanks":
        return (
          <>
            <h1 style={styles.title}>Plastic Septic Tanks</h1>
            <div style={styles.contentWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="/placeholder.svg?height=400&width=600&text=Plastic+Septic+Tank"
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
                <button style={styles.ctaButton}>Request a Quote</button>
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
                  src="/placeholder.svg?height=400&width=600&text=Biodigester+Enzymes"
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
                <button style={styles.ctaButton}>Shop Enzymes</button>
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
                  src="/placeholder.svg?height=400&width=600&text=Waste+Water+Management"
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
                <button style={styles.ctaButton}>Get a Consultation</button>
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
                  <ImageCarousel />
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
                <button style={styles.ctaButton}>Schedule an Installation</button>
              </div>
            </div>
            <section style={styles.section}>
              <h2 style={styles.subtitle}>Installation Gallery</h2>
            </section>
          </>
        )

      default:
        return <h1 style={styles.title}>Service not found</h1>
    }
  }

  return <div style={styles.pageContainer}>{renderService()}</div>
}

const styles = {
  pageContainer: {
    maxWidth: "1700px",
    margin: "80px auto 0",
    backgroundColor: "#ffffff",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "2rem",
    marginBottom: "2rem",
  },
  textContent: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "2.5rem",
    color: "#006400",
    marginBottom: "1rem",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#008000",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "#333",
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
    color: "#333",
    marginBottom: "0.5rem",
    paddingLeft: "1.5rem",
    position: "relative",
  },
  ctaButton: {
    backgroundColor: "#006400",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  carouselContainer: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
  },
  carouselImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  carouselButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    fontSize: "18px",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  },
  prevButton: {
    left: "10px",
  },
  nextButton: {
    right: "10px",
  },
}

export default ServicesPage

