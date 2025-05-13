import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Nam Long 2-3 Hydropower Project',
    location: 'Luang Nam Tha Province, Lao PDR',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Review of Initial Environmental Examination (IEE), assessment of resettlement implementation, and development of Livelihood Restoration Plan.',
    year: '2020-2021',
  },
  {
    id: 2,
    title: 'Monsoon Wind Power Project',
    location: 'Sekong Province and Attapeu Province',
    image: 'https://lh3.googleusercontent.com/d/1pNyKu8vlVVHNOGN3HPtySK2l1kcQFU-Q',
    description: 'Taking lead on implementation and monitoring of social and environment management for the 600-megawatt wind power project.',
    year: '2023-2024',
  },
  {
    id: 3,
    title: 'Greater Mekong Sub-Region Corridor Towns Development',
    location: 'Thakhek– Khammmouan',
    image: 'https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Public consultation, socio-economic surveys, and resettlement planning for urban infrastructure improvements.',
    year: '2021-2026',
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

const ProjectsSection = () => {
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
            Featured Projects
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
            Explore our portfolio of impactful projects where we've delivered comprehensive environmental and social consulting services across Lao PDR.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium"
                >
                  View Project Details
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
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;