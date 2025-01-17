import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <Container>
      <Header {...fadeInUp}>
        <Title>About BioDynamics</Title>
        <Subtitle>Revolutionizing Waste Management with Innovative Biodigester Solutions</Subtitle>
      </Header>

      <Section {...fadeInUp}>
        <SectionTitle>Our Story</SectionTitle>
        <Content>
          At BioDynamics, we're passionate about creating a cleaner, more sustainable future through innovative waste management solutions. Founded in 2010, we've been at the forefront of biodigester technology, specializing in <Highlight>cutting-edge plastic septic tanks</Highlight> and comprehensive biodigester services.
        </Content>
        <Content>
          Our journey began with a simple yet powerful idea: to transform waste from a problem into an opportunity. Today, we're proud to be industry leaders, offering a range of solutions that not only manage waste effectively but also contribute to energy production and environmental conservation.
        </Content>
      </Section>

      <MissionVisionSection>
        <MissionCard {...fadeInUp}>
          <MissionImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKgdIBdhJRIZweRk9DvjitEwcNbWHG.png" alt="Biodigester installation" />
          <MissionContent>
            <CardTitle>Our Mission</CardTitle>
            <Content>
              Our mission is to promote sustainability and environmental stewardship by providing innovative bio digester solutions that efficiently convert organic waste into valuable resources helping to create a cleaner and more sustainable future for generations to come
            </Content>
          </MissionContent>
        </MissionCard>

        <VisionCard {...fadeInUp}>
          <VisionContent>
            <CardTitle>Our Vision</CardTitle>
            <Content>
              To worldwide lead the way towards a cleaner and greener future for the generations to come by providing innovative and sustainable bio digester solutions.
            </Content>
          </VisionContent>
          <VisionImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EgjItirYJGdtqLQgaFQSc3u2pX3n3y.png" alt="Biodigester system" />
        </VisionCard>

        <MottoContainer {...fadeInUp}>
          <Motto>"Turning Waste into Wonder: Innovate, Sustain, Thrive"</Motto>
        </MottoContainer>
      </MissionVisionSection>

      <TeamSection {...fadeInUp}>
        <SectionTitle>Our Expert Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <TeamImage src="/placeholder.svg?height=200&width=200&text=Dr.+Sarah+Chen" alt="Dr. Sarah Chen" />
            <TeamName>Dr. Sarah Chen</TeamName>
            <TeamRole>Chief Technology Officer</TeamRole>
            <TeamExpertise>Bioprocess Engineering, Anaerobic Digestion</TeamExpertise>
          </TeamMember>
          <TeamMember>
            <TeamImage src="/placeholder.svg?height=200&width=200&text=Michael+Okonkwo" alt="Michael Okonkwo" />
            <TeamName>Michael Okonkwo</TeamName>
            <TeamRole>Head of Product Development</TeamRole>
            <TeamExpertise>Plastic Engineering, Septic System Design</TeamExpertise>
          </TeamMember>
          <TeamMember>
            <TeamImage src="/placeholder.svg?height=200&width=200&text=Dr.+Emma+Rodriguez" alt="Dr. Emma Rodriguez" />
            <TeamName>Dr. Emma Rodriguez</TeamName>
            <TeamRole>Environmental Solutions Specialist</TeamRole>
            <TeamExpertise>Wastewater Treatment, Sustainable Technologies</TeamExpertise>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      <ExpertiseSection {...fadeInUp}>
        <SectionTitle>Our Expertise</SectionTitle>
        <Content>
          At BioDynamics, we specialize in a range of innovative solutions designed to tackle today's waste management challenges:
        </Content>
        <ExpertiseList>
          <ExpertiseItem>
            <Highlight>Advanced Plastic Septic Tanks:</Highlight> Our flagship product, engineered for durability, efficiency, and environmental compatibility.
          </ExpertiseItem>
          <ExpertiseItem>
            <Highlight>Biodigester Enzymes:</Highlight> Cutting-edge formulations that accelerate waste breakdown and enhance biogas production.
          </ExpertiseItem>
          <ExpertiseItem>
            <Highlight>Wastewater Management Systems:</Highlight> Comprehensive solutions for treating and recycling wastewater in various settings.
          </ExpertiseItem>
          <ExpertiseItem>
            <Highlight>Biodigester Installation and Maintenance:</Highlight> Expert services ensuring optimal performance and longevity of your biodigester systems.
          </ExpertiseItem>
        </ExpertiseList>
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

const Header = styled(motion.header)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #A31621;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #A31621;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #444;
`;

const Highlight = styled.span`
  color: #A31621;
  font-weight: bold;
`;

const MissionVisionSection = styled.section`
  margin: 6rem 0;
`;

const Card = styled(motion.div)`
  display: flex;
  margin-bottom: 4rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MissionCard = styled(Card)`
  background: linear-gradient(135deg, #fff 50%, #f8f8f8 50%);
`;

const VisionCard = styled(Card)`
  background: linear-gradient(135deg, #f8f8f8 50%, #fff 50%);
`;

const CardImage = styled.img`
  width: 50%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const MissionImage = styled(CardImage)``;
const VisionImage = styled(CardImage)``;

const CardContent = styled.div`
  padding: 3rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MissionContent = styled(CardContent)``;
const VisionContent = styled(CardContent)``;

const CardTitle = styled.h3`
  font-size: 2.5rem;
  color: #A31621;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #A31621;
  }
`;

const MottoContainer = styled(motion.div)`
  text-align: center;
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, #A31621 0%, #8B1219 100%);
  border-radius: 20px;
`;

const Motto = styled.p`
  font-size: 2rem;
  font-style: italic;
  color: white;
  margin: 0;
`;

const TeamSection = styled(Section)`
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #A31621;
`;

const TeamName = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #A31621;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const TeamExpertise = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const ExpertiseSection = styled(Section)``;

const ExpertiseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpertiseItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '•';
    color: #A31621;
    position: absolute;
    left: 0;
  }
`;

export default AboutUs;

