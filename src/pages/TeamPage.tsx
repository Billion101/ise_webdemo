import React from 'react';
import { motion } from 'framer-motion';
// import ContactForm from '../components/ContactForm';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  category: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Vongchanh Indavong',
    position: 'Managing Director',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vongchanh has a Master\'s Degree in International Development from the Ohio University, USA and Bachelor Degree in Civil Engineering from National University of Laos. Vongchanh has extensive experience in leading social and environmental management and monitoring of hydropower projects. Vongchanh also works as a consultant for various development projects for ADB, UNDP, and World Bank cover agriculture, road and water supply.',
    category: 'management'
  },
  {
    id: 2,
    name: 'Surapha Viravong',
    position: 'Social and Resettlement',
    image: 'https://images.pexels.com/photos/5717628/pexels-photo-5717628.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Surapha Viravong has a Master\'s Degree in Business and Administration from the University of Technology of Sydney and Bachelor degree in Civil Engineering from the Faculty of Engineering of National University of Laos. Surapha has more than 20 years working experience in various sector work including leading role in social and environment management and monitoring, and resettlement of hydropower projects, livelihood improvment, land use planning, and community development.',
    category: 'social'
  },
  {
    id: 3,
    name: 'Sengdavanh Phapaseurth',
    position: 'Environmental Specialist',
    image: 'https://images.pexels.com/photos/7473019/pexels-photo-7473019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sengdavanh has a Master in Environment Engineering and Management from National University of Lao. She has more than 20 years\' experience in Environmental and Social Impact Assessment covering socio-economic survey, environmental data collection and analysis, project planning and coordination, public consultation, reports preparation for hydropower projects.',
    category: 'environmental'
  },
  {
    id: 4,
    name: 'Dr. Kanya Souksakoun',
    position: 'Environmental Specialist',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Kanya Souksakoun holds a PhD degree in Resources, Environment and Development from the Crawford School of Public Policy, the Australian National University, Master of Applied Earth Sciences from the University of Twente, the Netherlands, and Bachelor of Civil Engineering. Kanya has more than 15 years of professional experiences as a leading practitioner of environmental and social impact assessment and safeguard monitoring.',
    category: 'environmental'
  },
  {
    id: 5,
    name: 'Dr. Chanthavy Vongkhamheng',
    position: 'Environment and Natural Resources Specialist',
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dr. Chanthavy holds a PhD degree in Natural Resources and Environment from the University of Florida, USA, Master of Conservation Biology from Mahidol University, Thailand, and Bachelor of Biology, the National University of Laos. He has more than 25 years of professional experiences in the field of environment and natural resources management with extensive experience in environmental impact assessment.',
    category: 'environmental'
  },
  {
    id: 6,
    name: 'Kongkeo Sivilay',
    position: 'GIS and Land Use Planning',
    image: 'https://images.pexels.com/photos/7490210/pexels-photo-7490210.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Kongkeo Sivilay has a Master\'s Degree in Geospatial Science from the Auckland University of Technology, Auckland, New Zealand. Kongkeo has a strong background in GIS and Remote Sensing technology in applied land-use planning/management, environmental management, forest cover change detection, aerial mapping using drone and cadastral survey.',
    category: 'resources'
  },
  {
    id: 7,
    name: 'Khonevilay Sayyavong',
    position: 'Civil Engineer, Assets Survey, and Compensation Team Leader',
    image: 'https://images.pexels.com/photos/8961010/pexels-photo-8961010.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Khonevilay Sayyavong has a Bachelor and Higher Diploma in Water Resources Engineering from National University of Lao. He has strong and leading role working experience in resettlement infrastructure development and compensation for hydropower projects (Nam Theun 2, Namngiep-1). He also worked as a Food for work Team leader at Action Contra la Farm NGO project.',
    category: 'social'
  },
  {
    id: 8,
    name: 'Misa Phouthaseurth',
    position: 'Asset Survey and Compensation',
    image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Misa Phouthilath has a Masters in Project Management from University of Nantes, France and Bachelor degree in Civil Engineering at the Faculty of Engineering of NUOL. He has extensive experience in leading infrastructure and resettlement project of hydropower projects (Nam Theun2) and strong background in Social-Economic Survey.',
    category: 'social'
  },
  {
    id: 9,
    name: 'Khamkeng Yuena',
    position: 'Environment Specialist',
    image: 'https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Khamkeng has a Bachelor in Livestock and Fisheries from Faculty of Agriculture, National University of Lao. He has more than 15 years extensive experience in environmental field of work, specialize in Initial Environmental Examination (IEE), Environmental and Social Impact Assessment (ESIA) including conducting social-economic survey, social and environmental baseline data survey and analysis.',
    category: 'environmental'
  }
];

const categories = [
  { id: 'all', label: 'All Team Members' },
  { id: 'management', label: 'Management' },
  { id: 'environmental', label: 'Environmental Team' },
  { id: 'social', label: 'Social Development Team' },
  { id: 'resources', label: 'Natural Resources Team' },
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
      staggerChildren: 0.1
    }
  }
};

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [filteredMembers, setFilteredMembers] = React.useState(teamMembers);

  React.useEffect(() => {
    document.title = 'Our Team - ISE Consulting';
  }, []);

  React.useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(teamMembers.filter(member => member.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Team background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Our Expert Team
            </h1>
            <p className="text-lg text-white/90">
              Meet our diverse team of specialists committed to providing exceptional consulting services for sustainable development projects.
            </p>
          </div>
        </div>
      </section>

      {/* Team Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.map((member) => (
              <motion.div 
                key={member.id}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl font-bold text-gray-900 mb-4"
            >
              Our Approach & Values
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-1 w-20 bg-primary-500 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600"
            >
              Our team is guided by key principles that ensure quality, integrity, and excellence in all our consulting services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards of professional integrity in all our engagements and relationships.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace innovative approaches to environmental and social challenges for sustainable solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We work closely with clients, communities, and stakeholders to achieve successful project outcomes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565A9.005 9.005 0 0012 2a9.005 9.005 0 00-8.965 1.935z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every aspect of our work, delivering high-quality services that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      {/* <section className="py-16 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 transform translate-y-1/3" width="600" height="600" fill="none" viewBox="0 0 600 600">
            <path fill="rgba(255, 255, 255, 0.05)" d="M300 0C133.6 0 0 133.6 0 300s133.6 300 300 300 300-133.6 300-300S466.4 0 300 0zm0 500c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.5 200-200 200z" />
          </svg>
          <svg className="absolute top-0 right-0 transform -translate-y-1/3" width="600" height="600" fill="none" viewBox="0 0 600 600">
            <path fill="rgba(255, 255, 255, 0.05)" d="M300 0C133.6 0 0 133.6 0 300s133.6 300 300 300 300-133.6 300-300S466.4 0 300 0zm0 500c-110.5 0-200-89.5-200-200s89.5-200 200-200 200 89.5 200 200-89.5 200-200 200z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Interested in joining our team?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We're always looking for talented individuals who are passionate about sustainable development and environmental consulting.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section> */}

      {/* <ContactForm /> */}
    </div>
  );
};

export default TeamPage;