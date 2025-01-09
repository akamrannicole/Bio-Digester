import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1700px;
  margin: 80px auto 0;
  background-color: #f0f8ff;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #004d40;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #00695c;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '✓';
    color: #004d40;
    position: absolute;
    left: 0;
  }
`;

const CTAButton = styled.button`
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF8C00;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

const ServicesPage = () => {
  const { service } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/placeholder.svg?height=400&width=600&text=Installation+Image+1',
    '/placeholder.svg?height=400&width=600&text=Installation+Image+2',
    '/placeholder.svg?height=400&width=600&text=Installation+Image+3',
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const ImageCarousel = () => (
    <CarouselContainer>
      <CarouselImage src={images[currentIndex]} alt={`Installation step ${currentIndex + 1}`} />
      <PrevButton onClick={goToPrevious}>&lt;</PrevButton>
      <NextButton onClick={goToNext}>&gt;</NextButton>
    </CarouselContainer>
  );

  const renderService = () => {
    switch (service) {
      case 'plastic-septic-tanks':
        return (
          <>
            <Title>Plastic Septic Tanks</Title>
            <ContentWrapper>
              <ImageContainer>
                <Image src="/placeholder.svg?height=400&width=600&text=Plastic+Septic+Tank" alt="Plastic Septic Tank" />
              </ImageContainer>
              <TextContent>
                <Section>
                  <Subtitle>Efficient and Durable Waste Management Solutions</Subtitle>
                  <Description>
                    Our plastic septic tanks offer a modern, efficient, and eco-friendly solution for waste management. 
                    Designed with durability and ease of installation in mind, these tanks are perfect for both residential 
                    and commercial applications.
                  </Description>
                </Section>
                <Section>
                  <Subtitle>Key Features</Subtitle>
                  <List>
                    <ListItem>Lightweight and easy to install</ListItem>
                    <ListItem>Corrosion-resistant and long-lasting</ListItem>
                    <ListItem>Various sizes available to suit different needs</ListItem>
                    <ListItem>Environmentally friendly and leak-proof design</ListItem>
                    <ListItem>Low maintenance requirements</ListItem>
                  </List>
                </Section>
                <Section>
                  <Subtitle>Why Choose Our Plastic Septic Tanks?</Subtitle>
                  <Description>
                    Our tanks are made from high-quality, UV-stabilized polyethylene, ensuring they can withstand harsh 
                    environmental conditions. They're designed to efficiently separate solids and liquids, promoting 
                    better waste decomposition and reducing environmental impact.
                  </Description>
                </Section>
                <CTAButton>Request a Quote</CTAButton>
              </TextContent>
            </ContentWrapper>
          </>
        );

      case 'sale-of-biodigester-enzymes':
        return (
          <>
            <Title>Sale of Biodigester Enzymes</Title>
            <ContentWrapper>
              <ImageContainer>
                <Image src="/placeholder.svg?height=400&width=600&text=Biodigester+Enzymes" alt="Biodigester Enzymes" />
              </ImageContainer>
              <TextContent>
                <Section>
                  <Subtitle>Boost Your Biodigester's Performance</Subtitle>
                  <Description>
                    Our specially formulated biodigester enzymes are designed to enhance the efficiency of your waste 
                    management system. These powerful enzymes accelerate the breakdown of organic matter, leading to 
                    increased biogas production and reduced odors.
                  </Description>
                </Section>
                <Section>
                  <Subtitle>Benefits of Our Enzymes</Subtitle>
                  <List>
                    <ListItem>Faster decomposition of organic waste</ListItem>
                    <ListItem>Increased biogas production</ListItem>
                    <ListItem>Reduced odor emissions</ListItem>
                    <ListItem>Improved overall system efficiency</ListItem>
                    <ListItem>Eco-friendly and safe for use</ListItem>
                  </List>
                </Section>
                <Section>
                  <Subtitle>How It Works</Subtitle>
                  <Description>
                    Our enzymes contain a carefully selected blend of microorganisms that thrive in anaerobic conditions. 
                    When added to your biodigester, they quickly multiply and accelerate the breakdown of complex organic 
                    compounds, resulting in more efficient waste processing and increased biogas yield.
                  </Description>
                </Section>
                <CTAButton>Shop Enzymes</CTAButton>
              </TextContent>
            </ContentWrapper>
          </>
        );

      case 'waste-water-management':
        return (
          <>
            <Title>Waste Water Management</Title>
            <ContentWrapper>
              <ImageContainer>
                <Image src="/placeholder.svg?height=400&width=600&text=Waste+Water+Management" alt="Waste Water Management" />
              </ImageContainer>
              <TextContent>
                <Section>
                  <Subtitle>Comprehensive Waste Water Solutions</Subtitle>
                  <Description>
                    Our waste water management services offer end-to-end solutions for treating and managing waste water 
                    efficiently. We combine cutting-edge technology with sustainable practices to ensure optimal 
                    water treatment and recycling.
                  </Description>
                </Section>
                <Section>
                  <Subtitle>Our Services Include</Subtitle>
                  <List>
                    <ListItem>Waste water treatment system design and installation</ListItem>
                    <ListItem>Regular maintenance and servicing</ListItem>
                    <ListItem>Water quality testing and monitoring</ListItem>
                    <ListItem>Upgrade and optimization of existing systems</ListItem>
                    <ListItem>Consultancy on water conservation and recycling</ListItem>
                  </List>
                </Section>
                <Section>
                  <Subtitle>Why Choose Our Waste Water Management Services?</Subtitle>
                  <Description>
                    With our expertise, you can ensure compliance with environmental regulations while minimizing your 
                    ecological footprint. Our solutions are tailored to your specific needs, whether you're a small 
                    household or a large industrial facility. We focus on sustainable practices that not only treat 
                    waste water but also explore possibilities for water reuse and recycling.
                  </Description>
                </Section>
                <CTAButton>Get a Consultation</CTAButton>
              </TextContent>
            </ContentWrapper>
          </>
        );

      case 'bio-digester-installation':
        return (
          <>
            <Title>Biodigester Installation</Title>
            <ContentWrapper>
              <ImageContainer>
                <Image src="https://biotankafrica.co.ke/wp-content/uploads/2024/03/Screenshot-2024-03-11-at-7.59.46-AM-1024x597.webp" alt="Biodigester Installation" />
              </ImageContainer>
              <TextContent>
                <Section>
                  <Subtitle>Professional Biodigester Installation Services</Subtitle>
                  <Description>
                    Our expert team provides comprehensive biodigester installation services, ensuring that your 
                    waste management system is set up for optimal performance. We handle everything from site assessment 
                    to system commissioning, guaranteeing a smooth and efficient installation process.
                  </Description>
                </Section>
                <Section>
                  <Subtitle>Our Installation Process</Subtitle>
                  <List>
                    <ListItem>Initial site assessment and system design</ListItem>
                    <ListItem>Excavation and ground preparation</ListItem>
                    <ListItem>Biodigester tank installation</ListItem>
                    <ListItem>Piping and connection setup</ListItem>
                    <ListItem>Biogas collection system installation</ListItem>
                    <ListItem>System testing and commissioning</ListItem>
                    <ListItem>User training and handover</ListItem>
                  </List>
                  <ImageCarousel />
                </Section>
                <Section>
                  <Subtitle>Why Choose Our Installation Service?</Subtitle>
                  <Description>
                    With years of experience in biodigester installations, we ensure that your system is perfectly 
                    tailored to your needs and installed to the highest standards. Our team uses the latest techniques 
                    and equipment to guarantee a durable, efficient, and safe installation. We also provide 
                    comprehensive training on system operation and maintenance, ensuring you get the most out of your 
                    biodigester.
                  </Description>
                </Section>
                <CTAButton>Schedule an Installation</CTAButton>
              </TextContent>
            </ContentWrapper>
            <Section>
              <Subtitle>Installation Gallery</Subtitle>
              
            </Section>
          </>
        );

      default:
        return <Title>Service not found</Title>;
    }
  };

  return (
    <PageContainer>
      {renderService()}
    </PageContainer>
  );
};

export default ServicesPage;

