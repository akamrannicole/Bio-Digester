import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'react-feather';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 15px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#B31B1B',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#333',
  },
  content: {
    display: 'flex',
    width: '90%',
    maxWidth: '1000px',
    justifyContent: 'space-between',
    gap: '30px',
  },
  formSection: {
    width: '55%',
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '12px',
    fontSize: '0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    minHeight: '150px',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
  },
  infoSection: {
    width: '40%',
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '0.95rem',
    color: '#333',
  },
  map: {
    width: '100%',
    height: '250px',
    border: 'none',
    borderRadius: '6px',
    marginTop: '15px',
  },
  chatButton: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    width: '50px',
    height: '50px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '85px',
    right: '25px',
    width: '350px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatHeader: {
    backgroundColor: '#B31B1B',
    color: 'white',
    padding: '15px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  chatMessages: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    backgroundColor: '#f8f8f8',
  },
  chatInput: {
    display: 'flex',
    padding: '15px',
    gap: '8px',
    borderTop: '1px solid #eee',
    backgroundColor: 'white',
  },
  chatInputField: {
    flex: 1,
    padding: '10px',
    fontSize: '0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
  chatSendButton: {
    padding: '10px 20px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  },
  notification: {
    position: 'fixed',
    top: '25px',
    right: '25px',
    backgroundColor: '#B31B1B',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '6px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    fontSize: '0.9rem',
  },
  message: {
    padding: '8px 12px',
    marginBottom: '8px',
    borderRadius: '6px',
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#B31B1B',
    color: 'white',
    marginLeft: 'auto',
  },
  botMessage: {
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', text: message }]);
      setMessage('');
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'bot', text: 'Thank you for your message. Our team will get back to you shortly.' }]);
        setIsNotificationVisible(true);
        setTimeout(() => setIsNotificationVisible(false), 3000);
      }, 500);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We'd love to hear from you</p>
      </header>

      <div style={styles.content}>
        <section style={styles.formSection}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              style={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" style={styles.button}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </section>

        <section style={styles.infoSection}>
          <div style={styles.infoItem}>
            <Phone size={20} color="#B31B1B" />
            <span>+254 712 368915</span>
          </div>
          <div style={styles.infoItem}>
            <Mail size={20} color="#B31B1B" />
            <span>info@mgbiodigester.com</span>
          </div>
          <div style={styles.infoItem}>
            <MapPin size={20} color="#B31B1B" />
            <span>Along Ruai Bypass</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.844269982647!2d36.97899157350057!3d-1.2660784356012993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ddf76207933%3A0x861be2fb8fca98dd!2sKIFARU%20MABATI%20FACTORY!5e0!3m2!1sen!2ske!4v1737229202815!5m2!1sen!2ske"
            style={styles.map}></iframe>
        </section>
      </div>

      <button
        style={styles.chatButton}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle size={20} />
      </button>

      {isChatOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>Live Chat</div>
          <div style={styles.chatMessages}>
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} style={styles.chatInput}>
            <input
              type="text"
              placeholder="Type your message..."
              style={styles.chatInputField}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" style={styles.chatSendButton}>
              Send
            </button>
          </form>
        </div>
      )}

      {isNotificationVisible && (
        <div style={styles.notification}>
          New message received!
        </div>
      )}
    </div>
  );
};

export default ContactUs;

