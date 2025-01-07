import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams();
  
  const styles = {
    container: {
      maxWidth: '1700px',
      margin: '0 auto',
      padding: '6rem 2rem',
      backgroundColor: 'white',
      color: '#333',
      fontFamily: "'Poppins', sans-serif",
    },
    header: {
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      color: '#004d40',
      marginBottom: '1rem',
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem',
      color: '#888',
      marginBottom: '2rem',
    },
    tag: {
      backgroundColor: '#e0f2f1',
      color: '#004d40',
      padding: '0.2rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    imageTextWrapper: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '2rem',
    },
    image: {
      width: '40%',
      height: 'auto',
      borderRadius: '10px',
      objectFit: 'cover',
    },
    content: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      flex: 1,
    },
    section: {
      marginBottom: '2rem',
    },
    subheading: {
      fontSize: '1.8rem',
      color: '#004d40',
      marginBottom: '1rem',
    },
    backLink: {
      display: 'inline-block',
      marginTop: '2rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#004d40',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Biodigesters in Urban Waste Management",
      date: "May 15, 2025",
      tag: "Innovation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu0Jqg_NPwQ6-PIWyEXCSTKhFVdbLctT1MKUSW1perjs_HkbulVrQoJrV1Fi8HRUzyrY&usqp=CAU",
      content: [
        {
          subheading: "Introduction to Urban Waste Management Challenges",
          text: "As cities continue to grow and expand, the challenge of managing urban waste becomes increasingly complex. Traditional waste management systems are often overwhelmed, leading to environmental and health hazards. This is where biodigesters come into play, offering a sustainable and efficient solution to urban waste management.",
        },
        {
          subheading: "How Biodigesters Work in Urban Settings",
          text: "Biodigesters use anaerobic digestion to break down organic waste, producing biogas and nutrient-rich fertilizer. In urban settings, these systems can be scaled to handle waste from neighborhoods or even entire districts. They can process food waste, sewage, and other organic materials, significantly reducing the volume of waste that ends up in landfills.",
        },
        {
          subheading: "Benefits of Urban Biodigesters",
          text: "The implementation of biodigesters in urban areas offers numerous benefits. First, they reduce greenhouse gas emissions by capturing methane that would otherwise be released into the atmosphere. Second, they produce renewable energy in the form of biogas, which can be used for heating or electricity generation. Third, the byproduct of the digestion process is a high-quality fertilizer that can be used in urban gardening and agriculture.",
        },
        {
          subheading: "Case Studies: Successful Urban Biodigester Projects",
          text: "Several cities around the world have successfully implemented biodigester projects. For example, in Oakland, California, a large-scale biodigester processes 50,000 tons of organic waste annually, generating enough electricity to power 1,250 homes. In Pune, India, a network of small-scale biodigesters installed in residential complexes has significantly reduced the city's waste management burden while providing clean cooking fuel to residents.",
        },
        {
          subheading: "Future Prospects and Challenges",
          text: "As technology advances, we can expect to see more efficient and compact biodigester designs suitable for urban environments. However, challenges remain, including public awareness, initial investment costs, and integration with existing waste management infrastructure. Overcoming these hurdles will be crucial for the widespread adoption of biodigesters in urban waste management systems.",
        },
        {
          subheading: "Conclusion",
          text: "Biodigesters represent a promising solution to the growing challenge of urban waste management. By turning waste into valuable resources, they offer a path towards more sustainable, circular cities. As we look to the future, the role of biodigesters in urban environments is likely to expand, contributing significantly to cleaner, greener, and more resilient cities.",
        },
      ],
    },
    {
      id: 2,
      title: "5 Benefits of Using Plastic Septic Tanks",
      date: "April 22, 2025",
      tag: "Products",
      image: "https://hallmarkbuilders.co.ke/biodigesters-in-kenya/assets/img/pics/banner1.jpg",
      content: [
        {
          subheading: "Introduction to Plastic Septic Tanks",
          text: "Plastic septic tanks have become increasingly popular in recent years, offering a modern alternative to traditional concrete tanks. These innovative solutions provide numerous advantages for homeowners and businesses alike.",
        },
        {
          subheading: "1. Lightweight and Easy to Install",
          text: "One of the primary benefits of plastic septic tanks is their lightweight nature. This makes transportation and installation much easier and less expensive compared to heavy concrete tanks. The ease of installation can significantly reduce labor costs and minimize disruption to your property.",
        },
        {
          subheading: "2. Durability and Longevity",
          text: "Contrary to popular belief, high-quality plastic septic tanks are incredibly durable. They're resistant to cracking, rusting, and corrosion, which are common issues with concrete and metal tanks. This durability translates to a longer lifespan, often lasting for decades with proper maintenance.",
        },
        {
          subheading: "3. Watertight and Leak-Proof",
          text: "Plastic septic tanks are molded as a single piece, eliminating the risk of leaks at seams or joints. This watertight nature prevents groundwater contamination and ensures the system operates efficiently, protecting both your property and the environment.",
        },
        {
          subheading: "4. Low Maintenance Requirements",
          text: "The smooth interior walls of plastic tanks prevent waste buildup, making them easier to clean and maintain. This can lead to less frequent pump-outs and lower long-term maintenance costs compared to concrete tanks.",
        },
        {
          subheading: "5. Environmentally Friendly",
          text: "Many plastic septic tanks are made from recycled materials, making them an eco-friendly choice. Additionally, their efficiency in waste management and longevity contribute to reduced environmental impact over time.",
        },
        {
          subheading: "Conclusion",
          text: "While the choice between plastic and concrete septic tanks depends on various factors, the benefits of plastic tanks are clear. Their ease of installation, durability, leak-proof nature, low maintenance requirements, and environmental friendliness make them an excellent choice for many property owners.",
        },
      ],
    },
    {
      id: 3,
      title: "Biodigester Enzymes: The Key to Efficient Waste Breakdown",
      date: "March 10, 2025",
      tag: "Technology",
      image: "https://imaginecare.co.ke/wp-content/uploads/2022/12/bio-digester-bacteria-bio-digester-kenya-1-Bio-Digester-Bacteria.webp",
      content: [
        {
          subheading: "Understanding Biodigester Enzymes",
          text: "Biodigester enzymes are specialized biological catalysts that play a crucial role in the efficient breakdown of organic waste. These enzymes accelerate the decomposition process, making biodigesters more effective and productive.",
        },
        {
          subheading: "The Science Behind Enzymatic Action",
          text: "Enzymes work by lowering the activation energy required for chemical reactions. In biodigesters, they target specific components of organic waste, breaking down complex molecules into simpler forms that can be easily processed by microorganisms.",
        },
        {
          subheading: "Types of Enzymes Used in Biodigesters",
          text: "Various enzymes are employed in biodigesters, including cellulases for breaking down cellulose, proteases for protein degradation, and lipases for fat decomposition. Each type of enzyme targets specific waste components, ensuring comprehensive waste breakdown.",
        },
        {
          subheading: "Benefits of Enzyme Usage in Biodigesters",
          text: "The use of enzymes in biodigesters offers numerous advantages. They significantly reduce the time required for waste decomposition, increase biogas production, and improve the quality of the resulting fertilizer. Additionally, enzymes can help in reducing odors and preventing system clogging.",
        },
        {
          subheading: "Enzyme Application Methods",
          text: "Enzymes can be introduced to biodigesters in various forms, including powders, liquids, or granules. The application method and frequency depend on the specific biodigester system and the type of waste being processed.",
        },
        {
          subheading: "Future Developments in Biodigester Enzymes",
          text: "Ongoing research is focused on developing more efficient and specialized enzymes for biodigesters. These advancements aim to further improve waste breakdown efficiency, increase biogas yield, and expand the types of waste that can be effectively processed in biodigesters.",
        },
        {
          subheading: "Conclusion",
          text: "Biodigester enzymes are a key component in maximizing the efficiency and effectiveness of waste management systems. As technology advances, these biological catalysts will continue to play a crucial role in sustainable waste management and renewable energy production.",
        },
      ],
    },
    {
      id: 4,
      title: "Sustainable Agriculture: Biodigesters on Farms",
      date: "February 5, 2025",
      tag: "Case Study",
      image: "https://i.pinimg.com/474x/88/18/f1/8818f115a7a2223586580865e8a9818e.jpg",
      content: [
        {
          subheading: "Introduction to Farm-Based Biodigesters",
          text: "Farm-based biodigesters are becoming increasingly popular as farmers seek sustainable solutions for waste management and energy production. These systems offer a way to convert agricultural waste into valuable resources, promoting circular economy principles in farming.",
        },
        {
          subheading: "Benefits for Farmers",
          text: "Biodigesters provide multiple benefits for farmers. They offer a solution for managing animal waste, reduce odors, and produce biogas that can be used for heating, electricity generation, or as a cooking fuel. Additionally, the digested material serves as a high-quality, nutrient-rich fertilizer.",
        },
        {
          subheading: "Case Study: Dairy Farm in Wisconsin",
          text: "A large dairy farm in Wisconsin implemented a biodigester system to manage waste from 2,000 cows. The system produces enough electricity to power 300 homes and has significantly reduced the farm's carbon footprint. The farm also sells excess electricity back to the grid, creating an additional revenue stream.",
        },
        {
          subheading: "Integrating Biodigesters with Crop Production",
          text: "Some farms are integrating biodigesters with greenhouse operations. The biogas is used to heat the greenhouses, while the CO2 produced during biogas combustion is used to enhance plant growth. This integrated approach maximizes resource efficiency and crop yields.",
        },
        {
          subheading: "Challenges and Solutions",
          text: "While biodigesters offer numerous benefits, farmers may face challenges such as high initial costs and technical knowledge requirements. Government incentives, partnerships with energy companies, and educational programs are helping to address these barriers and promote wider adoption.",
        },
        {
          subheading: "Future of Farm-Based Biodigesters",
          text: "As technology improves and awareness grows, farm-based biodigesters are expected to become more common. Future developments may include more efficient digestion processes, better integration with farm operations, and the ability to process a wider range of agricultural wastes.",
        },
        {
          subheading: "Conclusion",
          text: "Biodigesters represent a significant opportunity for farms to improve their sustainability, reduce waste, and generate renewable energy. As more success stories emerge, these systems are likely to play an increasingly important role in the future of sustainable agriculture.",
        },
      ],
    },
    {
      id: 5,
      title: "The Role of Biodigesters in Achieving Net Zero Emissions",
      date: "January 18, 2025",
      tag: "Environment",
      image: "https://i0.wp.com/www.circularonline.co.uk/wp-content/uploads/2020/07/thumbnail_Malaby-Biogas-Bore-Hill-Farm-Biodigester-2020-.png?resize=860%2C516&ssl=1",
      content: [
        {
          subheading: "Biodigesters and Climate Change Mitigation",
          text: "Biodigesters play a crucial role in the global effort to achieve net zero emissions. By capturing and utilizing methane from organic waste, these systems prevent the release of a potent greenhouse gas into the atmosphere while also producing renewable energy.",
        },
        {
          subheading: "Reducing Methane Emissions",
          text: "Methane is a greenhouse gas 25 times more potent than CO2. Biodigesters capture methane that would otherwise be released from decomposing organic waste in landfills or open waste pits, significantly reducing overall methane emissions.",
        },
        {
          subheading: "Producing Renewable Energy",
          text: "The biogas produced by biodigesters can be used to generate electricity or heat, replacing fossil fuels and further reducing carbon emissions. This dual benefit of emissions reduction and clean energy production makes biodigesters a powerful tool in the fight against climate change.",
        },
        {
          subheading: "Carbon-Negative Agriculture",
          text: "When implemented in agricultural settings, biodigesters can help achieve carbon-negative farming. By capturing emissions from animal waste and crop residues, and by producing renewable energy and organic fertilizers, farms can significantly reduce their carbon footprint.",
        },
        {
          subheading: "Urban Waste Management and Emissions Reduction",
          text: "In urban areas, biodigesters can process food waste and sewage, reducing the amount of organic waste sent to landfills. This not only cuts methane emissions but also reduces the carbon footprint associated with waste transportation and landfill operations.",
        },
        {
          subheading: "Challenges in Scaling Up",
          text: "While the potential of biodigesters in achieving net zero emissions is significant, challenges remain in scaling up their implementation. These include high initial costs, technical expertise requirements, and the need for supportive policies and incentives.",
        },
        {
          subheading: "Future Outlook",
          text: "As countries strive to meet their climate commitments, the role of biodigesters in emissions reduction strategies is likely to grow. Continued technological advancements and supportive policies will be crucial in realizing the full potential of biodigesters in our journey towards net zero emissions.",
        },
      ],
    },
    {
      id: 6,
      title: "Wastewater Management: A Comprehensive Guide",
      date: "December 3, 2024",
      tag: "Education",
      image: "https://i.pinimg.com/736x/f5/aa/3d/f5aa3dc104c71d4b59855ba1ec10bfc7.jpg",
      content: [
        {
          subheading: "Introduction to Wastewater Management",
          text: "Wastewater management is a critical aspect of environmental protection and public health. It involves the collection, treatment, and disposal or reuse of wastewater from various sources, including households, industries, and agricultural operations.",
        },
        {
          subheading: "The Wastewater Treatment Process",
          text: "Wastewater treatment typically involves several stages: preliminary treatment to remove large solids, primary treatment to settle out smaller particles, secondary treatment using biological processes to break down organic matter, and in some cases, tertiary treatment for further purification.",
        },
        {
          subheading: "Advanced Treatment Technologies",
          text: "Modern wastewater management employs advanced technologies such as membrane bioreactors, UV disinfection, and anaerobic digestion. These technologies improve treatment efficiency and allow for water reuse in various applications.",
        },
        {
          subheading: "Wastewater Reuse and Resource Recovery",
          text: "Treated wastewater can be reused for irrigation, industrial processes, or even drinking water after extensive treatment. Additionally, resources like biogas and nutrients can be recovered from wastewater, promoting a circular economy approach.",
        },
        {
          subheading: "Challenges in Wastewater Management",
          text: "Key challenges include aging infrastructure, emerging contaminants like pharmaceuticals and microplastics, and the need for energy-efficient treatment processes. Climate change also poses challenges, with increased rainfall events straining existing systems.",
        },
        {
          subheading: "Future Trends in Wastewater Management",
          text: "The future of wastewater management is likely to focus on decentralized systems, water reuse, resource recovery, and the use of smart technologies for system optimization. There's also a growing emphasis on nature-based solutions like constructed wetlands.",
        },
        {
          subheading: "Conclusion",
          text: "Effective wastewater management is crucial for protecting public health and the environment. As technology advances and our understanding of environmental systems grows, wastewater management will continue to evolve, playing a key role in sustainable water resource management.",
        },
      ],
    },
  ];

  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div style={styles.container}>Post not found</div>;
  }

  return (
    <motion.div 
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header style={styles.header}>
        <h1 style={styles.title}>{post.title}</h1>
        <div style={styles.meta}>
          <span>{post.date}</span>
          <span style={styles.tag}>{post.tag}</span>
        </div>
      </header>
      <div style={styles.contentWrapper}>
        <div style={styles.imageTextWrapper}>
          <img src={post.image} alt={post.title} style={styles.image} />
          <div style={styles.content}>
            {post.content.slice(0, 2).map((section, index) => (
              <motion.section 
                key={index} 
                style={styles.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 style={styles.subheading}>{section.subheading}</h2>
                <p>{section.text}</p>
              </motion.section>
            ))}
          </div>
        </div>
        <div style={styles.content}>
          {post.content.slice(2).map((section, index) => (
            <motion.section 
              key={index + 2} 
              style={styles.section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 2) * 0.1 }}
            >
              <h2 style={styles.subheading}>{section.subheading}</h2>
              <p>{section.text}</p>
            </motion.section>
          ))}
        </div>
      </div>
      <Link to="/blog-and-articles" style={styles.backLink}>
        Back to Blog List
      </Link>
    </motion.div>
  );
};

export default BlogPost;

