import React, { useState } from "react"

const TermsAndConditions = ({ onClose, onAccept }) => {
  const [isOpen, setIsOpen] = useState(true)

  const termsContent = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the MG BioDigesters website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.",
    },
    {
      title: "2. Use of Service",
      content:
        "You agree to use the MG BioDigesters website and services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.",
    },
    {
      title: "3. Product Information",
      content:
        "We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
    },
    {
      title: "4. Ordering and Payment",
      content:
        "When you place an order, you are offering to purchase a product. We reserve the right to accept or decline your offer for any reason. Payment must be received in full before the dispatch of your order.",
    },
    {
      title: "5. Shipping and Delivery",
      content:
        "Shipping costs and delivery times may vary depending on the delivery address and the products ordered. We are not responsible for delays outside our control.",
    },
    {
      title: "6. Returns and Refunds",
      content:
        "You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error.",
    },
    {
      title: "7. Intellectual Property",
      content:
        "All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of MG BioDigesters or its content suppliers and protected by international copyright laws.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "MG BioDigesters will not be liable for any indirect, special, consequential, or punitive damages related to your use of the services.",
    },
    {
      title: "9. Privacy Policy",
      content:
        "Your use of the MG BioDigesters website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.",
    },
    {
      title: "10. Changes to Terms",
      content:
        "We reserve the right to modify these Terms and Conditions at any time. Your continued use of our website and services after changes are posted constitutes your acceptance of the modified terms.",
    },
    {
      title: "11. Contact Information",
      content:
        "If you have any questions about these Terms and Conditions, please contact us at support@mgbiodigesters.com.",
    },
  ]

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "32px 16px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    paragraph: {
      marginBottom: "16px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "725px",
      width: "100%",
      maxHeight: "80vh",
      overflowY: "auto",
    },
    modalTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    modalDescription: {
      marginBottom: "20px",
      color: "#666",
    },
    section: {
      marginBottom: "16px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "24px",
      marginTop: "16px",
    },
    listItem: {
      marginBottom: "8px",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    content: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "800px",
      maxHeight: "80vh",
      overflow: "auto",
    },
    closeButton: {
      backgroundColor: "#006400",
      color: "white",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "1rem",
    },
    acceptButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "1rem",
      marginLeft: "1rem",
    },
  }

  const handleAccept = () => {
    setIsOpen(false)
    onAccept()
  }

  if (!isOpen) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.content}>
        <h2 style={styles.modalTitle}>Terms and Conditions</h2>
        <p style={styles.modalDescription}>Please read our terms and conditions carefully.</p>
        <div>
          {termsContent.map((section, index) => (
            <div key={index} style={styles.section}>
              <h3 style={styles.sectionTitle}>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "32px" }}>
          <h2 style={styles.sectionTitle}>Summary of Key Points</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>You must be at least 18 years old to use our services.</li>
            <li style={styles.listItem}>You are responsible for maintaining the confidentiality of your account.</li>
            <li style={styles.listItem}>
              We reserve the right to modify or terminate the service for any reason, without notice at any time.
            </li>
            <li style={styles.listItem}>
              We reserve the right to refuse service to anyone for any reason at any time.
            </li>
            <li style={styles.listItem}>
              We may, but have no obligation to, remove content and accounts containing content that we determine in our
              sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or
              otherwise objectionable.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "32px" }}>
          <h2 style={styles.sectionTitle}>Questions or Concerns?</h2>
          <p>
            If you have any questions or concerns about our Terms and Conditions, please contact our customer support
            team at support@mgbiodigesters.com or call us at +254 123 456 789.
          </p>
        </div>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <button style={styles.acceptButton} onClick={handleAccept}>
          I read the terms and understand
        </button>
      </div>
    </div>
  )
}

export default TermsAndConditions

