import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const HeroSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      company: "Green Energy Co.",
      text: "The biodigester has revolutionized our waste management process. We're now producing clean energy and reducing our carbon footprint!",
      image: "/placeholder.svg?height=100&width=100&text=John"
    },
    {
      name: "Jane Smith",
      company: "Eco Farms",
      text: "Our farm has become more sustainable thanks to this innovative solution. It's a game-changer for the agricultural sector.",
      image: "/placeholder.svg?height=100&width=100&text=Jane"
    },
    {
      name: "Mike Johnson",
      company: "City Waste Management",
      text: "Implementing these biodigesters has significantly reduced our city's landfill usage. It's a win for the environment and our community.",
      image: "/placeholder.svg?height=100&width=100&text=Mike"
    }
  ];

  const galleryImages = [
    "/placeholder.svg?height=400&width=600&text=Gallery+Image+1",
    "/placeholder.svg?height=400&width=600&text=Gallery+Image+2",
    "/placeholder.svg?height=400&width=600&text=Gallery+Image+3",
    "/placeholder.svg?height=400&width=600&text=Gallery+Image+4"
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const galleryInterval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(galleryInterval);
    };
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <BackgroundImage
          src="https://i.pinimg.com/736x/bf/1c/5f/bf1c5fceeccdf2c9dd9777304840e1c1.jpg"
          alt="Biodigester background"
        />
        <Content>
          <TextContent>
            <Welcome
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <WelcomeLine />
              Revolutionizing Waste Management
            </Welcome>
            
            <Heading
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Transform Waste into <Highlight>Sustainable Energy</Highlight>
            </Heading>
            
            <Subheading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Experience the future of eco-friendly solutions with our innovative biodigesters. 
              Reduce your carbon footprint and generate clean energy from organic waste.
            </Subheading>
            
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <PrimaryButton>
                Explore Solutions
                <span>→</span>
              </PrimaryButton>
              <SecondaryButton>
                Get a Quote
                <span>→</span>
              </SecondaryButton>
            </ButtonContainer>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <RightImage
              src="https://i.pinimg.com/736x/12/3c/7a/123c7a4a0d7ed2fad2546cc273af7b0c.jpg"
              alt="Biodigester in action"
            />
          </ImageContainer>
        </Content>
      </HeroContent>

      <LightBlueSection>
        <TestimonialSection>
          <SectionTitle>Voices of Success</SectionTitle>
          <TestimonialCarousel>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard>
                  <TestimonialImage src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                  <TestimonialContent>
                    <TestimonialText>"{testimonials[currentTestimonial].text}"</TestimonialText>
                    <TestimonialAuthor>{testimonials[currentTestimonial].name}</TestimonialAuthor>
                    <TestimonialCompany>{testimonials[currentTestimonial].company}</TestimonialCompany>
                  </TestimonialContent>
                </TestimonialCard>
              </motion.div>
            </AnimatePresence>
          </TestimonialCarousel>
        </TestimonialSection>

        <GallerySection>
          <SectionTitle>Our Gallery</SectionTitle>
          <GalleryCarousel>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentGalleryImage}
                src={galleryImages[currentGalleryImage]}
                alt={`Gallery image ${currentGalleryImage + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </GalleryCarousel>
        </GallerySection>

        <Footer>
          <FooterContent>
            <ContactInfo>
              <p>Phone: +254 794 242 466</p>
              <p>Email: info@biodigesters.com</p>
            </ContactInfo>
            <SocialMedia>
              <SocialIcon href="#"><FaFacebook /></SocialIcon>
              <SocialIcon href="#"><FaTwitter /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaLinkedin /></SocialIcon>
            </SocialMedia>
          </FooterContent>
          <Copyright>
            Created with <FaHeart style={{ color: 'red', marginBottom: '-2px' }} /> by Shelvin Akamuran
          </Copyright>
        </Footer>
      </LightBlueSection>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #004d40;
  color: white;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Welcome = styled(motion.div)`
  color: #FFA500;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const WelcomeLine = styled.div`
  width: 3rem;
  height: 2px;
  background-color: #FFA500;
`;

const Heading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Highlight = styled.span`
  color: #FFA500;
  display: inline-block;
`;

const Subheading = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #FFA500;
  color: white;

  &:hover {
    background-color: #FF8C00;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #003329;
  color: white;

  &:hover {
    background-color: #004d40;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const RightImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const LightBlueSection = styled.div`
  background-color: #f0f8ff;
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #004d40;
  text-align: center;
  margin-bottom: 2rem;
`;

const TestimonialSection = styled.section`
  padding: 4rem 2rem;
`;

const TestimonialCarousel = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: white;
  color: #333;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  flex: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
`;

const TestimonialCompany = styled.p`
  color: #666;
`;

const GallerySection = styled.section`
  padding: 4rem 2rem;
`;

const GalleryCarousel = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Footer = styled.footer`
  background-color: #004d40;
  color: white;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFA500;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #999;
`;

export default HeroSection;

