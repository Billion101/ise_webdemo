import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Users } from 'lucide-react';

const statsItems = [
  {
    id: 1,
    icon: <Award size={36} className="text-primary-500" />,
    value: '20+',
    label: 'Years of Experience',
  },
  {
    id: 2,
    icon: <CheckCircle size={36} className="text-primary-500" />,
    value: '150+',
    label: 'Completed Projects',
  },
  {
    id: 3,
    icon: <Users size={36} className="text-primary-500" />,
    value: '50+',
    label: 'Experts & Specialists',
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'ISE Consulting - Inclusive Social and Environment';
  }, []);

  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1ipj7zHTpHbpjqUDme4-IAz3YneWNKaX_" 
                alt="Team meeting" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            
            <div>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-primary-500 font-medium mb-2 block"
              >
                About ISE
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Lao-managed consulting excellence since 2020
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                Inclusive Social and Environment Consulting Co., Ltd (ISE) is a Lao-managed consulting company established in 2020 by a group of specialists with diverse expertise in civil engineering, environment, social development, natural resources, geographic information system (GIS), and project management.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 mb-6"
              >
                Our team brings over 20 years of experience working with national and international organizations across various development projects. ISE is committed to providing quality consulting services to assist our clients in delivering comprehensive environment, natural resource, and social assessments with optimum design options, cost efficiency, risk management, and compliance with project requirements.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              >
                {statsItems.map((item) => (
                  <div key={item.id} className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                    <div className="flex justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{item.value}</h3>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      {/* <ContactForm /> */}
    </div>
  );
};

export default HomePage;