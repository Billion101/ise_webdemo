import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import teamData from '../data/team.json';
import imageData from '../data/images.json';

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

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Expert Team
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 bg-primary-500 mx-auto mb-6"
          />
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            ISE's team consists of Lao National key staff and consultants with multidisciplinary skills and backgrounds, bringing extensive experience in social, environmental, and natural resource management.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamData.members.slice(0, 3).map((member) => {
            const imageUrl = imageData.team.members[member.imageKey as keyof typeof imageData.team.members] || 'https://via.placeholder.com/400x500';

            return (
              <motion.div 
                key={member.id}
                variants={fadeInUp}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <img 
                    src={imageUrl}
                    alt={member.name}
                    className="object-cover w-full h-64 transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Link Button */}
        <div className="text-center mt-12">
          <Link 
            to="/team" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
