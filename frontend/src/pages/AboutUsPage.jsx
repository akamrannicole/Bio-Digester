import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const titleAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 1,
      type: "spring",
      stiffness: 100 
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Container>
      <IntroSection>
        <IntroContent as={motion.div} variants={staggerContainer} initial="initial" animate="animate">
          <Title as={motion.h1} variants={titleAnimation}>
            About MG Biodigesters
          </Title>
          <Subtitle as={motion.p} variants={fadeInUp}>
            Revolutionizing Waste Management with Innovative Biodigester Solutions
          </Subtitle>
          <Content as={motion.p} variants={fadeInUp}>
            At MG Biodigesters, we're passionate about creating a cleaner, more sustainable future through innovative waste management solutions. Founded in 2024, we've quickly established ourselves at the forefront of biodigester technology, specializing in <Highlight>cutting-edge plastic septic tanks</Highlight> and comprehensive biodigester services.
          </Content>
          <Content as={motion.p} variants={fadeInUp}>
            Our journey began with a simple yet powerful idea: to transform waste from a problem into an opportunity. Today, we're proud to be industry leaders, offering solutions that not only manage waste effectively but also contribute to energy production and environmental conservation.
          </Content>
        </IntroContent>
        <IntroImage 
          as={motion.img}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/images/WhatsApp Image 2025-01-05 at 14.23.31_a1bb95b6.jpg" 
          alt="MG Biodigesters facility"
        />
      </IntroSection>

      <MissionVisionSection>

        <ImagesContainer>
          <LargeImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKgdIBdhJRIZweRk9DvjitEwcNbWHG.png" alt="Our Mission" />
          <LargeImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EgjItirYJGdtqLQgaFQSc3u2pX3n3y.png" alt="Our Vision" />
        </ImagesContainer>

        <MottoContainer
          as={motion.div}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          {...fadeInUp}
        >
          <Motto>"Turning Waste into Wonder: Innovate, Sustain, Thrive"</Motto>
        </MottoContainer>
      </MissionVisionSection>

      <ExpertiseSection {...fadeInUp}>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </SectionTitle>
        <ExpertiseGrid>
          {[
            {
              title: 'Advanced Plastic Septic Tanks',
              text: 'Engineered for durability, efficiency, and environmental compatibility.'
            },
            {
              title: 'Biodigester Enzymes',
              text: 'Cutting-edge formulations that accelerate waste breakdown and enhance biogas production.'
            },
            {
              title: 'Wastewater Management',
              text: 'Comprehensive solutions for treating and recycling wastewater in various settings.'
            },
            {
              title: 'Installation & Maintenance',
              text: 'Expert services ensuring optimal performance and longevity of your biodigester systems.'
            }
          ].map((item, index) => (
            <ExpertiseItem
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Highlight>{item.title}</Highlight>
              <ExpertiseText>{item.text}</ExpertiseText>
            </ExpertiseItem>
          ))}
        </ExpertiseGrid>
      </ExpertiseSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background-color: white;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: -4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const IntroContent = styled.div`
  max-width: 600px;
`;

const IntroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #A31621;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: #A31621;
  font-weight: 600;
`;

const MissionVisionSection = styled.section`
  margin: 6rem 0;
`;

const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LargeImage = styled.img`
  width: 48%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const MottoContainer = styled.div`
  text-align: center;
  padding: 1rem ;
  background: linear-gradient(135deg, #A31621 0%, #8B1219 100%);
  border-radius: 10px;
  margin-top: 4rem;
  transition: all 0.3s ease;
`;

const Motto = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  color: white;
  margin: 0;
  line-height: 1.4;
`;

const ExpertiseSection = styled.section`
  margin-top: 6rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #A31621;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExpertiseItem = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const ExpertiseText = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

export default AboutUs;

