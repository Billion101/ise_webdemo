import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Users,Globe } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Environmental Services',
    icon: <Leaf size={40} className="text-primary-500" />,
    description: 'We provide comprehensive environmental services across the project cycle',
    items: [
      'Environmental and Social Impact Assessments (ESIA, EIA, IEE, Due Diligence)',
      'Environmental Management Planning and Monitoring',
      'Land Use Planning and Forest Cover Change Detection',
      'Aerial Mapping, Drone Surveys, and Cadastral Mapping',
      'Biodiversity and Ecosystem Survey and Assessment',
    ]
  },
  {
    id: 2,
    title: 'Social Safeguards and Development',
    icon: <Users size={40} className="text-primary-500" />,
    description: 'Our social team specializes in inclusive and participatory approaches of',
    items: [
      'Social Impact Assessments (ESIA, SIA, Due Diligence)',
      'Resettlement Planning and Community Engagement',
      'Livelihood Restoration and Community Development',
      'Ethnic-sensitive and Culturally Appropriate Consultations ',
      'Gender-sensitive integrated into community engagement and planning',
      'Socioeconomic Surveys and Data Analysis'
    ]
  },
  {
    id: 3,
    title: 'Capacity Building and Safeguard Systems Strengthening',
    icon: <Globe size={40} className="text-primary-500" />,
    description: 'We support institutions and project teams to meet national and international safeguard standards through hands-on learning and tailored guidance.',
    items: [
      'Independent External Environmental and Social Safeguard Monitoring',
      'Capacity Building on Environmental and Social Safeguards (ADB, WB, IFC, GEF, UNDP standards)',
      'Coaching and Advisory Support to Set Up Safeguard Units or Teams for specific project.',
    ]
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 bg-primary-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            ISE provides comprehensive consulting services across environmental, natural resource, and social sectors for development projects throughout Lao PDR and beyond.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium"
                >
                  Learn more 
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;