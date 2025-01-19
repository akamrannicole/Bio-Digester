import React, { useState } from 'react';

const CheckoutPage = ({ cart, total }) => {
  const [email, setEmail] = useState('');
  const [createAccount, setCreateAccount] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [note, setNote] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }
    console.log('Order submitted:', {
      contact: { email },
      shipping: {
        firstName,
        lastName,
        streetAddress,
        apartment,
        city,
        phone
      },
      cart,
      total
    });
    alert('Order submitted successfully!');
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    rightColumn: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      height: 'fit-content',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    section: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    sectionSubtitle: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '1rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    inputGroup: {
      display: 'flex',
      gap: '1rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      flex: 1,
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '0.9rem',
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '0.9rem',
      backgroundColor: 'white',
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      color: '#666',
    },
    orderSummary: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    orderTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    productItem: {
      display: 'flex',
      gap: '1rem',
      padding: '1rem 0',
      borderBottom: '1px solid #eee',
    },
    productImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '4px',
    },
    productDetails: {
      flex: 1,
    },
    productName: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem',
    },
    productPrice: {
      fontSize: '0.9rem',
      color: '#666',
    },
    subtotal: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 0',
      borderBottom: '1px solid #eee',
    },
    delivery: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 0',
      borderBottom: '1px solid #eee',
      color: '#666',
      fontSize: '0.9rem',
    },
    total: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 0',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
    submitButton: {
      backgroundColor: '#006400',
      color: 'white',
      border: 'none',
      padding: '1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      width: '100%',
    },
    backButton: {
      backgroundColor: 'transparent',
      color: '#666',
      border: 'none',
      padding: '1rem',
      cursor: 'pointer',
      fontSize: '0.9rem',
      textDecoration: 'underline',
    },
    paymentSection: {
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '1rem',
      marginTop: '1rem',
    },
    mpesaOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.container}>
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
            <input
              type="checkbox"
              checked={createAccount}
              onChange={(e) => setCreateAccount(e.target.checked)}
            />
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
              <select style={styles.select} required>
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
              <input
                type="checkbox"
                checked={sameAsBilling}
                onChange={(e) => setSameAsBilling(e.target.checked)}
              />
              Use same address for billing
            </label>
          </form>
        </div>

        {/* Shipping Options */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Shipping options</h2>
          <p style={styles.sectionSubtitle}>Enter a shipping address to view shipping options.</p>
        </div>

        {/* Payment Options */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Payment options</h2>
          <div style={styles.paymentSection}>
            <div style={styles.mpesaOption}>
              <input type="radio" name="payment" id="mpesa" checked readOnly />
              <label htmlFor="mpesa">Pay with MPESA</label>
            </div>
          </div>
        </div>

        {/* Order Note */}
        <div style={styles.section}>
          <div style={styles.formGroup}>
            <textarea
              placeholder="Add a note to your order"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ ...styles.input, minHeight: '100px', resize: 'vertical' }}
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
            By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy
          </label>

          <button style={styles.backButton}>← Return to Cart</button>
          <button type="submit" style={styles.submitButton}>
            Place Order
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
                  {item.quantity} x {new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(item.price)}
                </div>
              </div>
              <div style={styles.productPrice}>
                {new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(item.price * item.quantity)}
              </div>
            </div>
          ))}

          <div style={styles.subtotal}>
            <span>Subtotal</span>
            <span>{new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(total)}</span>
          </div>

          <div style={styles.delivery}>
            <span>Delivery</span>
            <span>Enter address to calculate</span>
          </div>

          <div style={styles.total}>
            <span>Total</span>
            <span>{new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

