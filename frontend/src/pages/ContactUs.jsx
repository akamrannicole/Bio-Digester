import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'react-feather';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#B31B1B',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#555',
  },
  content: {
    display: 'flex',
    width: '80%',
    maxWidth: '800px',
    justifyContent: 'space-between',
  },
  formSection: {
    width: '45%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '150px',
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.9rem',
  },
  infoSection: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  map: {
    width: '100%',
    height: '300px',
    border: '1px solid #ccc',
  },
  chatButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  chatWindow: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    backgroundColor: 'white',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '300px',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  chatHeader: {
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#B31B1B',
  },
  chatMessages: {

  },
  chatInput: {
    display: 'flex',
  },
  chatInputField: {
    flex: 1,
    padding: '5px',
    border: '1px solid #ccc',
    marginRight: '5px',
  },
  chatSendButton: {
    padding: '5px 10px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#B31B1B',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
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
    // Handle form submission here
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    // Handle chat submission here
    setChatMessages([...chatMessages, { sender: 'user', text: message }]);
    setMessage('');
    // Simulate a response after a short delay
    setTimeout(() => {
      setChatMessages([...chatMessages, { sender: 'bot', text: 'Hello there!' }]);
      setIsNotificationVisible(true);
      setTimeout(() => {
        setIsNotificationVisible(false);
      }, 5000);
    }, 500);
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
            <Send size={16} />
            Send Message
          </button>
        </form>
      </section>

      <section style={styles.infoSection}>
        <div style={styles.infoItem}>
          <Phone size={20} color="#B31B1B" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div style={styles.infoItem}>
          <Mail size={20} color="#B31B1B" />
          <span>info@biodigester.com</span>
        </div>
        <div style={styles.infoItem}>
          <MapPin size={20} color="#B31B1B" />
          <span>123 Eco Street, Green City, 12345</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794293527!5m2!1sen!2sus"
          style={styles.map}
          allowFullScreen
          loading="lazy"
        ></iframe>
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
            <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '0.5rem' }}>
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

