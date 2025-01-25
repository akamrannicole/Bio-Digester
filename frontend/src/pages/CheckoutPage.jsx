import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TermsAndConditions from "../components/TermsAndConditions"

const CheckoutPage = ({ cart, total }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [createAccount, setCreateAccount] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [apartment, setApartment] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [sameAsBilling, setSameAsBilling] = useState(true)
  const [note, setNote] = useState("")
  const [mpesaNumber, setMpesaNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showTerms, setShowTerms] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "")
    let formatted = input
    if (input.length > 0) {
      formatted = `254${input.slice(-9)}`
    }
    setMpesaNumber(formatted)
  }

  useEffect(() => {
    if (orderSuccess) {
      const timer = setTimeout(() => {
        navigate("/")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [orderSuccess, navigate])

  const validateForm = () => {
    if (!email || !firstName || !lastName || !country || !streetAddress || !city) {
      setErrorMessage("Please fill in all required fields.")
      return false
    }
    if (!termsAccepted) {
      setErrorMessage("Please read and accept the Terms and Conditions.")
      return false
    }
    if (!mpesaNumber) {
      setErrorMessage("Please enter your M-PESA number.")
      return false
    }
    setErrorMessage("")
    return true
  }

  const simulateSendToAdminDashboard = (orderData, paymentData) => {
    console.log("Sending order data to admin dashboard:", orderData)
    console.log("Sending payment data to admin dashboard:", paymentData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsProcessing(true)

    try {
      const paymentMethod = "M-PESA"
      const paymentDetails = { phone: mpesaNumber }
      alert(`M-PESA prompt sent to ${mpesaNumber}. Please enter PIN to pay KES ${total.toFixed(2)}`)
      await new Promise((resolve) => setTimeout(resolve, 5000))

      const orderData = {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        customer: `${firstName} ${lastName}`,
        email,
        date: new Date().toISOString(),
        total: total.toFixed(2),
        status: "New",
        items: cart,
        shippingAddress: `${streetAddress}, ${apartment}, ${city}, ${country}`,
      }

      const paymentData = {
        id: `PAY${Math.floor(Math.random() * 10000)}`,
        orderId: orderData.id,
        amount: total.toFixed(2),
        date: new Date().toISOString(),
        method: paymentMethod,
        details: paymentDetails,
        status: "Completed",
      }

      simulateSendToAdminDashboard(orderData, paymentData)

      setOrderSuccess(true)
    } catch (error) {
      setErrorMessage("Payment processing failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      display: "grid",
      gridTemplateColumns: "1fr 400px",
      gap: "2rem",
      fontFamily: "Arial, sans-serif",
    },
    leftColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    rightColumn: {
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      padding: "1.5rem",
      height: "fit-content",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    section: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    sectionTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    sectionSubtitle: {
      fontSize: "0.9rem",
      color: "#666",
      marginBottom: "1rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    inputGroup: {
      display: "flex",
      gap: "1rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flex: 1,
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "0.9rem",
      outline: "none",
    },
    select: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "0.9rem",
      backgroundColor: "white",
      outline: "none",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.9rem",
      color: "#666",
    },
    orderSummary: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    orderTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    productItem: {
      display: "flex",
      gap: "1rem",
      padding: "1rem 0",
      borderBottom: "1px solid #eee",
    },
    productImage: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      borderRadius: "4px",
    },
    productDetails: {
      flex: 1,
    },
    productName: {
      fontSize: "0.9rem",
      fontWeight: "bold",
      marginBottom: "0.25rem",
    },
    productPrice: {
      fontSize: "0.9rem",
      color: "#666",
    },
    subtotal: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 0",
      borderBottom: "1px solid #eee",
    },
    delivery: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 0",
      borderBottom: "1px solid #eee",
      color: "#666",
      fontSize: "0.9rem",
    },
    total: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 0",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    submitButton: {
      backgroundColor: "#006400",
      color: "white",
      border: "none",
      padding: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      marginTop: "1rem",
      width: "100%",
      transition: "background-color 0.3s ease",
    },
    backButton: {
      backgroundColor: "transparent",
      color: "#666",
      border: "none",
      padding: "1rem",
      cursor: "pointer",
      fontSize: "0.9rem",
      textDecoration: "underline",
    },
    paymentSection: {
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "1rem",
      marginTop: "1rem",
    },
    paymentOption: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.8rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "0.5rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    selectedPayment: {
      borderColor: "#006400",
      backgroundColor: "#f7f7f7",
    },
    paymentIcon: {
      width: "24px",
      height: "24px",
      objectFit: "contain",
    },
    paymentDetails: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#f7f7f7",
      borderRadius: "4px",
    },
    processingOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    spinner: {
      width: "50px",
      height: "50px",
      border: "5px solid #f3f3f3",
      borderTop: "5px solid #006400",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    successMessage: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      zIndex: 1001,
    },
    errorMessage: {
      color: "red",
      fontSize: "0.9rem",
      marginTop: "1rem",
    },
    termsLink: {
      color: "#006400",
      textDecoration: "underline",
      cursor: "pointer",
    },
  }

  return (
    <div style={styles.container}>
      {(isProcessing || orderSuccess) && (
        <div style={styles.processingOverlay}>
          {isProcessing ? (
            <div style={styles.spinner} />
          ) : (
            <div style={styles.successMessage}>
              <h2>Order Placed Successfully!</h2>
              <p>Redirecting to home page in 5 seconds...</p>
            </div>
          )}
        </div>
      )}
      <div style={styles.leftColumn}>
        {/* Contact Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact information</h2>
          <p style={styles.sectionSubtitle}>We'll use this email to send you details and updates about your order.</p>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
              style={styles.input}
            />
          </div>
          <label style={styles.checkbox}>
            <input type="checkbox" checked={createAccount} onChange={(e) => setCreateAccount(e.target.checked)} />
            Create an account with MG Biodigesters
          </label>
        </div>

        {/* Shipping Address */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Shipping address</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <select style={styles.select} required value={country} onChange={handleInputChange(setCountry)}>
                <option value="">Country / Region</option>
                <option value="KE">Kenya</option>
                <option value="UG">Uganda</option>
                <option value="TZ">Tanzania</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Street address"
                value={streetAddress}
                onChange={handleInputChange(setStreetAddress)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={apartment}
                onChange={handleInputChange(setApartment)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Town / City"
                value={city}
                onChange={handleInputChange(setCity)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={handleInputChange(setPhone)}
                style={styles.input}
              />
            </div>

            <label style={styles.checkbox}>
              <input type="checkbox" checked={sameAsBilling} onChange={(e) => setSameAsBilling(e.target.checked)} />
              Use same address for billing
            </label>
          </form>
        </div>

        {/* Payment Options */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Payment options</h2>
          <div style={styles.paymentSection}>
            <div style={{ ...styles.paymentOption, ...styles.selectedPayment }}>
              <input type="radio" name="payment" id="mpesa" checked={true} readOnly />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png"
                alt="M-PESA"
                style={styles.paymentIcon}
              />
              <label htmlFor="mpesa">Pay with M-PESA</label>
            </div>
            <div style={styles.paymentDetails}>
              <div style={styles.formGroup}>
                <label style={styles.label}>M-PESA Phone Number</label>
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#666",
                    }}
                  >
                    +254
                  </span>
                  <input
                    type="tel"
                    placeholder="7XX XXX XXX"
                    value={mpesaNumber.slice(3)}
                    onChange={(e) => {
                      const input = e.target.value.replace(/\D/g, "")
                      let formatted = input
                      if (input.length > 0) {
                        formatted = `254${input.slice(-9)}`
                      }
                      setMpesaNumber(formatted)
                    }}
                    style={{ ...styles.input, paddingLeft: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Note */}
        <div style={styles.section}>
          <div style={styles.formGroup}>
            <textarea
              placeholder="Add a note to your order"
              value={note}
              onChange={handleInputChange(setNote)}
              style={{ ...styles.input, minHeight: "100px", resize: "vertical" }}
            />
          </div>
        </div>

        {/* Terms and Place Order */}
        <div style={styles.section}>
          <label style={styles.checkbox}>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            I have read and agree to the{" "}
            <span style={styles.termsLink} onClick={() => setShowTerms(true)}>
              Terms and Conditions
            </span>
          </label>

          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

          <button style={styles.backButton} onClick={() => navigate("/cart")}>
            ← Return to Cart
          </button>
          <button
            type="submit"
            style={{
              ...styles.submitButton,
              opacity: isProcessing ? 0.7 : 1,
              cursor: isProcessing ? "not-allowed" : "pointer",
            }}
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div style={styles.rightColumn}>
        <h2 style={styles.orderTitle}>Order summary</h2>
        <div style={styles.orderSummary}>
          {cart.map((item) => (
            <div key={item.id} style={styles.productItem}>
              <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <div style={styles.productName}>{item.name}</div>
                <div style={styles.productPrice}>
                  {item.quantity} x{" "}
                  {new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(item.price)}
                </div>
              </div>
              <div style={styles.productPrice}>
                {new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(
                  item.price * item.quantity,
                )}
              </div>
            </div>
          ))}

          <div style={styles.subtotal}>
            <span>Subtotal</span>
            <span>{new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(total)}</span>
          </div>

          <div style={styles.delivery}>
            <span>Delivery</span>
            <span>Enter address to calculate</span>
          </div>

          <div style={styles.total}>
            <span>Total</span>
            <span>{new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(total)}</span>
          </div>
        </div>
      </div>

      {showTerms && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "800px",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <TermsAndConditions
              onClose={() => setShowTerms(false)}
              onAccept={() => {
                setShowTerms(false)
                setTermsAccepted(true)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage

