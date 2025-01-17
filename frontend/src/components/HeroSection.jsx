import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const HeroSection = () => {
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0);
  const [currentGallerySet, setCurrentGallerySet] = useState(0);

  const testimonials = [
    [
      {
        name: "David Kimutai",
        role: "Green Energy Co.",
        text: "The biodigester has revolutionized our waste management process. We're now producing clean energy and reducing our carbon footprint!",
        image: "https://i.pinimg.com/474x/69/17/bf/6917bf565c2dcf2e6edd029b199557ac.jpg"
      },
      {
        name: "Jane Nyasenya",
        role: "Eco Farms",
        text: "Our farm has become more sustainable thanks to this innovative solution. It's a game-changer for the agricultural sector.",
        image: "https://i.pinimg.com/474x/e4/02/9c/e4029cb1ff448efd7631ea0a1a4c4f71.jpg"
      },
      {
        name: "Mike Johnson",
        role: "City Waste Management",
        text: "Implementing these biodigesters has significantly reduced our city's landfill usage. It's a win for the environment and our community.",
        image: "https://i.pinimg.com/474x/96/9b/b3/969bb3701cbfbabe77a2860cf8b1e7fa.jpg"
      }
    ],
    [
      {
        name: "Sarah Wilson",
        role: "Environmental Consultant",
        text: "The efficiency of these biodigesters is remarkable. They're setting new standards in waste management.",
        image: "https://i.pinimg.com/474x/14/c5/c3/14c5c36bdf8cd719d568af4994fadcde.jpg"
      },
      {
        name: "David Chen",
        role: "Sustainability Director",
        text: "A game-changing solution that delivers on its promises. The results speak for themselves.",
        image: "https://i.pinimg.com/474x/66/f8/5d/66f85dd00a6530af9c23098a3d5b0d42.jpg"
      },
      {
        name: "Emma Atieno",
        role: "Operations Manager",
        text: "The implementation was smooth and the benefits were immediate. Highly recommended.",
        image: "https://i.pinimg.com/474x/4e/7e/6f/4e7e6f550d668061927603c68d873036.jpg"
      }
    ]
  ];

  const galleryItems = [
    [
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+1",
        title: "Installation Process",
        description: "Professional biodigester installation"
      },
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+2",
        title: "Waste Processing",
        description: "Efficient organic waste management"
      },
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+3",
        title: "Energy Production",
        description: "Clean energy generation"
      }
    ],
    [
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+4",
        title: "Maintenance",
        description: "Regular system maintenance"
      },
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+5",
        title: "Monitoring",
        description: "Advanced monitoring systems"
      },
      {
        image: "/placeholder.svg?height=400&width=600&text=Gallery+6",
        title: "Results",
        description: "Measurable impact"
      }
    ]
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialSet((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const galleryInterval = setInterval(() => {
      setCurrentGallerySet((prev) => (prev + 1) % galleryItems.length);
    }, 6000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(galleryInterval);
    };
  }, []);

  return (
    <PageContainer>
      <MainContent>
        <UpperSection>
          <Logo>Transform Waste into Sustainable Energy</Logo>
          <HeroContent>
            <TextContent>
              <CompanyTitle>
                Transform Waste into
                <ProfileText> Sustainable Energy</ProfileText>
              </CompanyTitle>
              <HeroText>
                <Welcome>
                  Revolutionizing Waste Management
                </Welcome>
                <Subheading>
                  Experience the future of eco-friendly solutions with our innovative biodigesters. 
                  Reduce your carbon footprint and generate clean energy from organic waste.
                </Subheading>
                <ButtonContainer>
                  <PrimaryButton>
                    Explore Solutions
                    <span>→</span>
                  </PrimaryButton>
                  <SecondaryButton>
                    Get a Quote
                    <span>→</span>
                  </SecondaryButton>
                </ButtonContainer>
              </HeroText>
            </TextContent>
            <HeroImageContainer>
              <HeroImage src="https://ae01.alicdn.com/kf/S8c9c663ae62d418c84ef6f6c85e43c16W.jpg_640x640q90.jpg?width=371&height=320&hash=691" alt="Biodigester diagram" />
            </HeroImageContainer>
          </HeroContent>
          <DiagonalDivider />
        </UpperSection>

        <LowerSection>
          <Section>
            <SectionTitle>Voices of Success</SectionTitle>
            <CarouselContainer>
              <AnimatePresence mode="wait">
                <CardGrid
                  key={currentTestimonialSet}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonials[currentTestimonialSet].map((testimonial, index) => (
                    <TestimonialCard key={index}>
                      <TestimonialHeader>
                        <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                        <TestimonialInfo>
                          <TestimonialName>{testimonial.name}</TestimonialName>
                          <TestimonialRole>{testimonial.role}</TestimonialRole>
                        </TestimonialInfo>
                      </TestimonialHeader>
                      <TestimonialText>{testimonial.text}</TestimonialText>
                      <QuoteDecoration>"</QuoteDecoration>
                    </TestimonialCard>
                  ))}
                </CardGrid>
              </AnimatePresence>
            </CarouselContainer>
          </Section>

          <Section>
            <SectionTitle>Our Gallery</SectionTitle>
            <CarouselContainer>
              <AnimatePresence mode="wait">
                <CardGrid
                  key={currentGallerySet}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {galleryItems[currentGallerySet].map((item, index) => (
                    <GalleryCard key={index}>
                      <GalleryImage src={item.image} alt={item.title} />
                      <GalleryContent>
                        <GalleryTitle>{item.title}</GalleryTitle>
                        <GalleryDescription>{item.description}</GalleryDescription>
                      </GalleryContent>
                    </GalleryCard>
                  ))}
                </CardGrid>
              </AnimatePresence>
            </CarouselContainer>
          </Section>
        </LowerSection>
      </MainContent>

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
          Created with <FaHeart style={{ color: '#A31621', marginBottom: '-2px' }} /> by Shelvin Akamuran
        </Copyright>
      </Footer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
`;

const UpperSection = styled.div`
  position: relative;
  min-height: 100vh;
  background: white;
  overflow: hidden;
`;

const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #A31621;
  z-index: 10;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 6rem 2rem 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
`;

const CompanyTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #1E1E1E;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const ProfileText = styled.span`
  display: block;
  color: #A31621;
`;

const HeroText = styled.div`
  margin-top: 2rem;
`;

const Welcome = styled.div`
  font-size: 1.3rem;
  color: #1E1E1E;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
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
  background-color: #A31621;
  color: white;

  &:hover {
    background-color: #8B1219;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #A31621;
  border: 2px solid #A31621;

  &:hover {
    background-color: #A31621;
    color: white;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-left: -10%;
  width: 800%;

  @media (max-width: 8060px) {
    margin-top: 2rem;
    width: 500%;
    margin-left: 0;
  }
`;

const HeroImage = styled.img`
  max-width: 800%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  mix-blend-mode: multiply;
`;

const DiagonalDivider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #A31621;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  z-index: 0;

  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
`;

const LowerSection = styled.div`
  background-color: #F5F5F5;
  padding: 4rem 0;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #A31621;
  text-align: center;
  margin-bottom: 2rem;
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const TestimonialCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.0rem;
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TestimonialImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const TestimonialRole = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
`;

const QuoteDecoration = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 4rem;
  color: #A31621;
  opacity: 0.1;
  line-height: 1;
`;

const GalleryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GalleryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const GalleryDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const Footer = styled.footer`
  background-color: #1E1E1E;
  color: white;
  padding: 2rem;
  flex-shrink: 0;
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
    color: #A31621;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #999;
`;

export default HeroSection;

