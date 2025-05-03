import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ContactForm from '../components/ContactForm';

// Define project interface
interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  client: string;
  year: string;
  description: string;
  challenges: string;
  solutions: string;
  results: string;
  image: string;
  galleryImages?: string[];
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Nam Long 2-3 Hydropower Project',
    location: 'Luang Nam Tha Province, Lao PDR',
    category: 'hydropower',
    client: 'Nam Long 2 Hydropower Company Ltd',
    year: '2020-2021',
    description: 'The Nam Long 2 Hydropower Project is a small hydro development scheme located at Long District in Luangnamtha Province with a catchment area of 156 km² and an installed capacity of 9.5 MW.',
    challenges: 'Assess environmental impacts and develop sustainable resettlement solutions for affected communities while ensuring compliance with regulations.',
    solutions: 'Review of Initial Environmental Examination (IEE), assessment of resettlement implementation for Nam Long 2 Resettlement Village, and development of a comprehensive Livelihood Restoration Plan.',
    results: 'Successfully implemented resettlement plan for affected communities with minimal environmental impact and established sustainable livelihood options.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/1578749/pexels-photo-1578749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4173198/pexels-photo-4173198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 2,
    title: 'Monsoon Wind Power Project',
    location: 'Sekong Province and Attapeu Province',
    category: 'renewable',
    client: 'Monsoon Wind Power Company Limited',
    year: '2023-2024',
    description: 'The project entails a wind power project with a contracted capacity of 600-megawatt (MW) to be constructed in Lao PDR that will export and sell electricity into neighboring Viet Nam. It will be the first wind power project in Lao PDR, the largest in Southeast Asia, and the first cross-border in Asia.',
    challenges: 'Implement comprehensive social and environmental management for a large-scale, first-of-its-kind wind power project affecting multiple provinces.',
    solutions: 'Taking lead on the implementation and monitoring of the social and environment management of the project, providing technical advisory on transition to internal management.',
    results: 'Established rigorous environmental monitoring frameworks and social impact mitigation strategies for this pioneering renewable energy project.',
    image: 'https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/1108271/pexels-photo-1108271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/163458/wind-turbine-electricity-eco-environment-163458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 3,
    title: 'Greater Mekong Sub-Region Corridor Towns Development',
    location: 'Thakhek– Khammmouan',
    category: 'urban',
    client: 'Asian Development Bank (ADB)',
    year: '2021-2026',
    description: 'The Fourth Greater Mekong Subregion Corridor Towns Development Project (GMS-4) aims to improve urban services and competitiveness in the participating towns. The project consists of improvement of urban infrastructure such as drainage, sanitation, solid waste management, and urban roads.',
    challenges: 'Balance urban development needs with social and environmental considerations in rapidly developing corridor towns.',
    solutions: 'Conducted public consultation, socio-economic surveys, and detailed measurement surveys for affected households. Provided technical support on social implementation and grievances while building capacity on social safeguards.',
    results: 'Developed comprehensive data sets for compensation and resettlement plans that minimize negative social impacts while supporting urban development goals.',
    image: 'https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/599722/pexels-photo-599722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12166533/pexels-photo-12166533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 4,
    title: 'Building Resilience and Reducing Rural Poverty Project',
    location: 'Sayaboury, Launbgphrabang, Khammmouan, Savannakhet Provinces',
    category: 'social',
    client: 'Asian Development Bank (ADB)',
    year: '2024-2025',
    description: 'The proposed project will expand a targeted, nutrition-sensitive conditional cash transfer (CCT) program to up to 30,000 poor households in areas with high rates of poverty, malnutrition, and climate risks, and make social protection systems more adaptive and shock-responsive.',
    challenges: 'Address multiple facets of poverty in rural communities while building climate resilience and improving food security.',
    solutions: 'Conduct consultation meetings with target communities and stakeholders, develop Indigenous People Framework, and provide technical support on social safeguard implementation.',
    results: 'Created comprehensive frameworks and guidelines for a poverty graduation program that empowers women and builds resilience to health, economic, and climate vulnerabilities.',
    image: 'https://images.pexels.com/photos/2387343/pexels-photo-2387343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/1888652/pexels-photo-1888652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4498361/pexels-photo-4498361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 5,
    title: 'Theun-Hinboun Hydropower Project',
    location: 'Khammouan and Bolikhamxay Province',
    category: 'hydropower',
    client: 'Theun-Hinboun Power Company',
    year: '1998-2000',
    description: 'Environmental monitoring during the construction period for the Theun-Hinboun Hydropower Project, one of the significant hydropower developments in Lao PDR.',
    challenges: 'Ensure environmental protection during construction activities in ecologically sensitive areas.',
    solutions: 'Implemented comprehensive environmental monitoring programs, including water quality monitoring, biodiversity protection, and waste management systems.',
    results: 'Successfully maintained environmental standards throughout construction, protecting water quality and biodiversity in the project area.',
    image: 'https://images.pexels.com/photos/2040756/pexels-photo-2040756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/1025562/pexels-photo-1025562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/221035/pexels-photo-221035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 6,
    title: 'Nam Long Upper Reservoir Hydropower Study',
    location: 'Luang Nam Tha Province, Lao PDR',
    category: 'hydropower',
    client: 'Nam Long 2 Hydropower Company Ltd',
    year: '2021',
    description: 'The Nam Long Upper Reservoir Hydropower Project is located about 25 km from Long district town, Luang Namtha Province. It\'s under feasibility for regulating water for the Nam Long 2 and downstream dams.',
    challenges: 'Assess potential social and environmental impacts of a new hydropower reservoir before implementation.',
    solutions: 'Conducted social-economic surveys of potentially affected households, asset surveys, land use assessments, and feasibility studies of potential resettlement sites.',
    results: 'Provided comprehensive data and analysis to support decision-making on project viability and mitigation measures.',
    image: 'https://images.pexels.com/photos/4946756/pexels-photo-4946756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    galleryImages: [
      'https://images.pexels.com/photos/13876470/pexels-photo-13876470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5946424/pexels-photo-5946424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
];

// Categories for filtering
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'hydropower', label: 'Hydropower' },
  { id: 'renewable', label: 'Renewable Energy' },
  { id: 'urban', label: 'Urban Development' },
  { id: 'social', label: 'Social Development' }
];

// Animation variants
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

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Projects - ISE Consulting';
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  // Handle viewing project details
  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Projects background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-white/90">
              Explore our portfolio of impactful projects where we've delivered comprehensive environmental and social consulting services across Lao PDR and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
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

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
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
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <button 
                    onClick={() => handleViewProject(project)}
                    className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium"
                  >
                    View Project Details
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-gray-900/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="relative h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full">
                      {selectedProject.year}
                    </span>
                    <span className="text-sm bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      {selectedProject.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">{selectedProject.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-gray-600">{selectedProject.year}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenges</h4>
                <p className="text-gray-600">{selectedProject.challenges}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h4>
                <p className="text-gray-600">{selectedProject.solutions}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                <p className="text-gray-600">{selectedProject.results}</p>
              </div>
              
              {/* Gallery */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.galleryImages.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden h-48">
                        <img src={img} alt={`${selectedProject.title} - ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
              Need our expertise for your project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact our team to discuss how our comprehensive consulting services can help your development project succeed.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* <ContactForm /> */}
    </div>
  );
};

export default ProjectsPage;