import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TermsAndConditions from "./TermsAndConditions"

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
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState("mpesa")
  const [selectedCard, setSelectedCard] = useState("visa")
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCVC, setCardCVC] = useState("")
  const [mpesaNumber, setMpesaNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showTerms, setShowTerms] = useState(false)

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
    if (!agreeToTerms) {
      setErrorMessage("Please agree to the Terms and Conditions.")
      return false
    }
    if (selectedPayment === "mpesa" && !mpesaNumber) {
      setErrorMessage("Please enter your M-PESA number.")
      return false
    }
    if (selectedPayment === "card" && (!cardName || !cardNumber || !cardExpiry || !cardCVC)) {
      setErrorMessage("Please fill in all card details.")
      return false
    }
    setErrorMessage("")
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsProcessing(true)

    try {
      switch (selectedPayment) {
        case "mpesa":
          alert(`M-PESA prompt sent to ${mpesaNumber}. Please enter PIN to pay KES ${total.toFixed(2)}`)
          await new Promise((resolve) => setTimeout(resolve, 5000))
          break
        case "card":
          alert(`Processing card payment of KES ${total.toFixed(2)}...`)
          await new Promise((resolve) => setTimeout(resolve, 3000))
          break
        default:
          break
      }

      console.log("Order submitted:", {
        contact: { email },
        shipping: {
          firstName,
          lastName,
          country,
          streetAddress,
          apartment,
          city,
          phone,
        },
        payment: {
          method: selectedPayment,
          details:
            selectedPayment === "mpesa"
              ? { phone: mpesaNumber }
              : selectedPayment === "card"
                ? { cardName, cardNumber, cardExpiry, cardCVC, cardType: selectedCard }
                : {},
        },
        cart,
        total,
      })

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
    },
    select: {
      width: "100%",
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      fontSize: "0.9rem",
      backgroundColor: "white",
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
    cardOptions: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    cardOption: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    selectedCard: {
      borderColor: "#006400",
      backgroundColor: "#f7f7f7",
    },
    cardIcon: {
      width: "32px",
      height: "20px",
      objectFit: "contain",
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

  const cardOptions = [
    { name: "visa", label: "Visa", icon: "https://www.svgrepo.com/show/508699/visa.svg" },
    { name: "mastercard", label: "Mastercard", icon: "https://www.svgrepo.com/show/473856/mastercard.svg" },
    { name: "amex", label: "American Express", icon: "https://www.svgrepo.com/show/473796/americanexpress.svg" },
    { name: "discover", label: "Discover", icon: "https://www.svgrepo.com/show/473799/discover.svg" },
  ]

  const PaymentMethodContent = () => {
    switch (selectedPayment) {
      case "mpesa":
        return (
          <div style={styles.paymentDetails}>
            <div style={styles.formGroup}>
              <label style={styles.label}>M-PESA Phone Number</label>
              <input
                type="tel"
                placeholder="Enter M-PESA number (254...)"
                value={mpesaNumber}
                onChange={(e) => setMpesaNumber(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>
        )
      case "card":
        return (
          <div style={styles.paymentDetails}>
            <div style={styles.cardOptions}>
              {cardOptions.map((card) => (
                <div
                  key={card.name}
                  style={{
                    ...styles.cardOption,
                    ...(selectedCard === card.name ? styles.selectedCard : {}),
                  }}
                  onClick={() => setSelectedCard(card.name)}
                >
                  <input
                    type="radio"
                    name="cardType"
                    id={card.name}
                    checked={selectedCard === card.name}
                    onChange={() => setSelectedCard(card.name)}
                  />
                  <img src={card.icon || "/placeholder.svg"} alt={card.label} style={styles.cardIcon} />
                  <label htmlFor={card.name}>{card.label}</label>
                </div>
              ))}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name on Card</label>
              <input
                type="text"
                placeholder="Full name on card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>{selectedCard === "amex" ? "CID" : "CVV"}</label>
                <input
                  type="text"
                  placeholder={selectedCard === "amex" ? "4 digits" : "3 digits"}
                  value={cardCVC}
                  onChange={(e) => setCardCVC(e.target.value)}
                  style={styles.input}
                />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
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
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <label style={styles.checkbox}>
            <input type="checkbox" checked={createAccount} onChange={(e) => setCreateAccount(e.target.checked)} />
            Create an account with Biotech Africa
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
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <select style={styles.select} required value={country} onChange={(e) => setCountry(e.target.value)}>
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
                onChange={(e) => setStreetAddress(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Town / City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <div
              style={{
                ...styles.paymentOption,
                ...(selectedPayment === "mpesa" ? styles.selectedPayment : {}),
              }}
              onClick={() => setSelectedPayment("mpesa")}
            >
              <input
                type="radio"
                name="payment"
                id="mpesa"
                checked={selectedPayment === "mpesa"}
                onChange={() => setSelectedPayment("mpesa")}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png"
                alt="M-PESA"
                style={styles.paymentIcon}
              />
              <label htmlFor="mpesa">Pay with M-PESA</label>
            </div>

            <div
              style={{
                ...styles.paymentOption,
                ...(selectedPayment === "card" ? styles.selectedPayment : {}),
              }}
              onClick={() => setSelectedPayment("card")}
            >
              <input
                type="radio"
                name="payment"
                id="card"
                checked={selectedPayment === "card"}
                onChange={() => setSelectedPayment("card")}
              />
              <img src="https://www.svgrepo.com/show/508699/visa.svg" alt="Card" style={styles.paymentIcon} />
              <label htmlFor="card">Pay with Card</label>
            </div>

            <PaymentMethodContent />
          </div>
        </div>

        {/* Order Note */}
        <div style={styles.section}>
          <div style={styles.formGroup}>
            <textarea
              placeholder="Add a note to your order"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ ...styles.input, minHeight: "100px", resize: "vertical" }}
            />
          </div>
        </div>

        {/* Terms and Place Order */}
        <div style={styles.section}>
          <label style={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
            />
            By proceeding with your purchase you agree to our{" "}
            <span style={styles.termsLink} onClick={() => setShowTerms(true)}>
              Terms and Conditions
            </span>{" "}
            and Privacy Policy
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

      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
    </div>
  )
}

export default CheckoutPage

