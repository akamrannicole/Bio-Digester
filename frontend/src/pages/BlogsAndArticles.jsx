import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogsAndArticles = () => {
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
    <Container>
      <Header as={motion.header} {...fadeInUp}>
        <Title>Blogs and Articles</Title>
        <Subtitle>Stay Informed with the Latest in Biodigester Technology and Sustainable Waste Management</Subtitle>
      </Header>

      <Grid>
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
            <Card to={`/blog/${post.id}`}>
              <CardImage src={post.image} alt={post.title} />
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
                <CardExcerpt>{post.excerpt}</CardExcerpt>
                <CardMeta>
                  <CardDate>{post.date}</CardDate>
                  <Tag>{post.tag}</Tag>
                </CardMeta>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #A31621;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(Link)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  color: black;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CardExcerpt = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #888;
`;

const CardDate = styled.span`
  font-style: italic;
`;

const Tag = styled.span`
  background-color: #f0e6e7;
  color: #A31621;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export default BlogsAndArticles;

