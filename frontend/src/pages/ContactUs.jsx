import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const styles = {
    container: {
      maxWidth: '1700px',
      margin: '0 auto',
      padding: '6rem 2rem',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f0f8ff',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3.5rem',
      color: '#004d40',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
      fontWeight: '300',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
    },
    formSection: {
      flex: '1 1 600px',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    },
    infoSection: {
      flex: '1 1 400px',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    input: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      transition: 'border-color 0.3s ease',
    },
    textarea: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      minHeight: '150px',
      transition: 'border-color 0.3s ease',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#004d40',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontWeight: '600',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
    },
    map: {
      width: '100%',
      height: '300px',
      border: 'none',
      borderRadius: '15px',
      marginTop: '1.5rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
    chatButton: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      backgroundColor: '#004d40',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    chatWindow: {
      position: 'fixed',
      bottom: '5rem',
      right: '2rem',
      width: '300px',
      height: '400px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    chatHeader: {
      backgroundColor: '#004d40',
      color: 'white',
      padding: '1rem',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
    chatMessages: {
      flex: 1,
      overflowY: 'auto',
      padding: '1rem',
    },
    chatInput: {
      display: 'flex',
      padding: '1rem',
      borderTop: '1px solid #e0e0e0',
    },
    chatInputField: {
      flex: 1,
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
    },
    chatSendButton: {
      padding: '0.75rem 1rem',
      backgroundColor: '#004d40',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      marginLeft: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    notification: {
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      backgroundColor: '#004d40',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    socialIcon: {
      color: '#004d40',
      transition: 'transform 0.3s ease, color 0.3s ease',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    showNotification('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      setMessage('');
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you shortly.", sender: 'bot' }]);
        showNotification('New message in live chat');
      }, 1000);
    }
  };

  const showNotification = (text) => {
    setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 3000);
  };

  useEffect(() => {
    if (isChatOpen && chatMessages.length === 0) {
      setChatMessages([{ text: "Hello! How can we help you today?", sender: 'bot' }]);
    }
  }, [isChatOpen]);

  return (
    <div style={styles.container}>
      <motion.header
        style={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>We're here to help and answer any question you might have</p>
      </motion.header>

      <div style={styles.content}>
        <motion.section
          style={styles.formSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
            <motion.button
              type="submit"
              style={styles.button}
              whileHover={{ scale: 1.05, backgroundColor: '#00695c' }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.section>

        <motion.section
          style={styles.infoSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div style={styles.infoItem}>
            <Phone size={24} color="#004d40" />
            <span>+254 712 368915 / +254 722 146807</span>
          </div>
          <div style={styles.infoItem}>
            <Mail size={24} color="#004d40" />
            <span>info@biodynamics.com</span>
          </div>
          <div style={styles.infoItem}>
            <MapPin size={24} color="#004d40" />
            <span>300m from Ruai Bypass</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8442699826564!2d36.978991573500565!3d-1.266078435601299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ddf76207933%3A0x861be2fb8fca98dd!2sKIFARU%20MABATI%20FACTORY!5e0!3m2!1sen!2sus!4v1736246669043!5m2!1sen!2sus" 
            style={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div style={styles.socialLinks}>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#E1306C' }}
            >
              <Instagram size={24} style={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1877F2' }}
            >
              <Facebook size={24} style={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1DA1F2' }}
            >
              <Twitter size={24} style={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="mailto:info@biodynamics.com"
              whileHover={{ scale: 1.2, color: '#D44638' }}
            >
              <Mail size={24} style={styles.socialIcon} />
            </motion.a>
          </div>
        </motion.section>
      </div>

      <motion.button
        style={styles.chatButton}
        whileHover={{ scale: 1.1, boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle size={24} />
      </motion.button>

      {isChatOpen && (
        <motion.div
          style={styles.chatWindow}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div style={styles.chatHeader}>Live Chat</div>
          <div style={styles.chatMessages}>
            {chatMessages.map((msg, index) => (
              <div key={index} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: '0.5rem',
                backgroundColor: msg.sender === 'user' ? '#e0f2f1' : '#f5f5f5',
                padding: '0.5rem 1rem',
                borderRadius: '15px',
                display: 'inline-block',
                maxWidth: '80%'
              }}>
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
            <motion.button
              type="submit"
              style={styles.chatSendButton}
              whileHover={{ backgroundColor: '#00695c' }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      )}

      {isNotificationVisible && (
        <motion.div
          style={styles.notification}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          New message received!
        </motion.div>
      )}
    </div>
  );
};

export default ContactUs;

