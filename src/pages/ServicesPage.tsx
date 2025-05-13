import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Users, FileCheck, Globe, Building } from 'lucide-react';

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
  
  // {
  //   id: 4,
  //   title: 'ESIA and IEE Preparation',
  //   icon: <FileCheck size={40} className="text-primary-500" />,
  //   description: 'Expert preparation of Environmental and Social Impact Assessments and Initial Environmental Examinations.',
  //   items: [
  //     'Comprehensive environmental and social baseline studies',
  //     'Stakeholder consultation and engagement',
  //     'Impact identification and assessment',
  //     'Mitigation measures development',
  //     'Environmental and Social Management Plans',
  //     'Compliance with national and international standards',
  //     'Monitoring plan development'
  //   ]
  // },
  // {
  //   id: 5,
  //   title: 'Project Monitoring & Evaluation',
  //   icon: <Globe size={40} className="text-primary-500" />,
  //   description: 'Independent monitoring and evaluation services for development projects.',
  //   items: [
  //     'Independent External Social Safeguard monitoring',
  //     'Project implementation process evaluation',
  //     'Resettlement Plan implementation monitoring',
  //     'Public consultation and awareness assessment',
  //     'Compensation payment verification',
  //     'Grievance resolution support',
  //     'Technical expertise for Resettlement Committees'
  //   ]
  // },
  // {
  //   id: 6,
  //   title: 'Consulting Experience',
  //   icon: <Building size={40} className="text-primary-500" />,
  //   description: 'Extensive consulting experience across various sectors and development projects.',
  //   items: [
  //     'Hydropower projects (Nam Theun 2, Theun-Hinboun, Nam Ngiep 1)',
  //     'Wind power projects (Monsoon Wind Power Project)',
  //     'Urban development projects (Greater Mekong Sub-region Corridor Towns)',
  //     'Water supply and sanitation projects',
  //     'Road and transportation infrastructure projects',
  //     'Industrial and economic zone development',
  //     'ADB and World Bank funded projects'
  //   ]
  // }
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

const ServicesPage = () => {
  React.useEffect(() => {
    document.title = 'Services - ISE Consulting';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Services background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/90">
              Comprehensive environment, natural resource, and social consulting services for sustainable development across Lao PDR.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-50 p-3 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 relative overflow-hidden">
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
              Need consulting for your project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact our team of experts to discuss how our services can support your development project needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;