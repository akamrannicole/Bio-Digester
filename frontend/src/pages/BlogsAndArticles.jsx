import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogsAndArticles = () => {
  const styles = {
    container: {
      maxWidth: '1700px',
      margin: '0 auto',
      padding: '6rem 2rem',
      backgroundColor: '#f0f8ff',
      color: '#333',
      fontFamily: "'Poppins', sans-serif",
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      color: '#004d40',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '1.5rem',
    },
    cardTitle: {
      fontSize: '1.5rem',
      color: '#004d40',
      marginBottom: '0.5rem',
    },
    cardExcerpt: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1rem',
    },
    cardMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: '#888',
    },
    tag: {
      backgroundColor: '#e0f2f1',
      color: '#004d40',
      padding: '0.2rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Biodigesters in Urban Waste Management",
      excerpt: "Explore how biodigesters are revolutionizing waste management in cities...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu0Jqg_NPwQ6-PIWyEXCSTKhFVdbLctT1MKUSW1perjs_HkbulVrQoJrV1Fi8HRUzyrY&usqp=CAU",
      date: "May 15, 2025",
      tag: "Innovation",
    },
    {
      id: 2,
      title: "5 Benefits of Using Plastic Septic Tanks",
      excerpt: "Discover why plastic septic tanks are becoming the preferred choice for...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC90Ousxz51Lth3tIHkRS4LKW6n9j-TwFEigbivPOH8ARWoLVUphtORZLNYU_Ii5jsIHo&usqp=CAU",
      date: "April 22, 2025",
      tag: "Products",
    },
    {
      id: 3,
      title: "Biodigester Enzymes: The Key to Efficient Waste Breakdown",
      excerpt: "Learn about the crucial role of enzymes in optimizing biodigester performance...",
      image: "https://imaginecare.co.ke/wp-content/uploads/2022/12/bio-digester-bacteria-bio-digester-kenya-1-Bio-Digester-Bacteria.webp",
      date: "March 10, 2025",
      tag: "Technology",
    },
    {
      id: 4,
      title: "Sustainable Agriculture: Biodigesters on Farms",
      excerpt: "How farmers are using biodigesters to manage waste and generate energy...",
      image: "https://i.pinimg.com/474x/88/18/f1/8818f115a7a2223586580865e8a9818e.jpg",
      date: "February 5, 2025",
      tag: "Case Study",
    },
    {
      id: 5,
      title: "The Role of Biodigesters in Achieving Net Zero Emissions",
      excerpt: "Exploring the environmental impact of biodigesters in reducing greenhouse gases...",
      image: "https://i0.wp.com/www.circularonline.co.uk/wp-content/uploads/2020/07/thumbnail_Malaby-Biogas-Bore-Hill-Farm-Biodigester-2020-.png?resize=860%2C516&ssl=1",
      date: "January 18, 2025",
      tag: "Environment",
    },
    {
      id: 6,
      title: "Wastewater Management: A Comprehensive Guide",
      excerpt: "Everything you need to know about modern wastewater management techniques...",
      image: "https://i.pinimg.com/736x/f5/aa/3d/f5aa3dc104c71d4b59855ba1ec10bfc7.jpg",
      date: "December 3, 2024",
      tag: "Education",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div style={styles.container}>
      <motion.header style={styles.header} {...fadeInUp}>
        <h1 style={styles.title}>Blogs and Articles</h1>
        <p style={styles.subtitle}>Stay Informed with the Latest in Biodigester Technology and Sustainable Waste Management</p>
      </motion.header>

      <motion.div style={styles.grid}>
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
            }}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.id}`} style={styles.card}>
              <img src={post.image} alt={post.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>{post.title}</h2>
                <p style={styles.cardExcerpt}>{post.excerpt}</p>
                <div style={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span style={styles.tag}>{post.tag}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogsAndArticles;

