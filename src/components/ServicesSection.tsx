import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Environmental Services',
    description: 'Comprehensive environmental assessments, monitoring, and management plans for development projects.',
    icon: <Leaf size={48} className="text-primary-500" />,
    items: [
      'Initial Environment Examination (IEE)',
      'Environment Planning and Management',
      'Environment Impacts Assessment',
      'Implementation of Environment Monitoring',
      'Capacity building on environmental planning'
    ]
  },
  {
    id: 2,
    title: 'Natural Resources',
    description: 'Expert management of water resources, climate change adaptation, and land use planning services.',
    icon: <Droplets size={48} className="text-primary-500" />,
    items: [
      'Integrated Water Resource Management',
      'Disasters Impact and Risk Assessment',
      'Climate Change Adaptation and Mitigation',
      'Hydrology-Hydraulic and Meteorology Analysis',
      'Land Use Planning and Forest Cover Change Detection'
    ]
  },
  {
    id: 3,
    title: 'Social Development',
    description: 'Social assessments, resettlement planning, and community development initiatives for project success.',
    icon: <Users size={48} className="text-primary-500" />,
    items: [
      'Social Impacts Assessment',
      'Implementation of Social Monitoring',
      'Resettlement planning and implementation',
      'Social and Economic Survey and data analysis',
      'Livelihood Improvement and Community Development'
    ]
  }
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
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium"
                >
                  Learn more 
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
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