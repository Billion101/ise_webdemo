import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next';
import teamData from '../data/team.json';
import images from '../data/images.json';

// Define the Member interface based on team.json structure
interface Member {
  id: number;
  name: string;
  position: string;
  imageKey: keyof typeof images.team.members;
  description: string;
  category: string;
  education: string[];
  expertise: string[];
}

const categories = [
  { id: 'all', label: 'filters.all' },
  { id: 'management', label: 'filters.management' },
  { id: 'environmental', label: 'filters.environmental' },
  { id: 'social', label: 'filters.social' },
  { id: 'resources', label: 'filters.resources' }
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
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = 'Our Team - ISE Consulting';
  }, []);

  const filteredMembers = activeFilter === 'all' 
    ? teamData.members as Member[]
    : (teamData.members as Member[]).filter(member => member.category === activeFilter);

  const handleViewProfile = (member: Member) => {
    setSelectedMember(member);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={images.team.background}
            alt="Team background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              {t('team.title')}
            </h1>
            <p className="text-lg text-white/90">
              {t('team.subtitle')}
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
                {t(`team.${category.label}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
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
                    src={images.team.members[member.imageKey]} // Fix indexing issue
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">{member.position}</p>
                  <button
                    onClick={() => handleViewProfile(member)}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                  >
                  View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {showModal && selectedMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <span className="sr-only">{t('common.close')}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-lg">
                  <img 
                    src={images.team.members[selectedMember.imageKey]} // Fix indexing issue
                    alt={selectedMember.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                  <p className="text-primary-500 font-medium mb-6">{selectedMember.position}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                       Education
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.education.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {/* {t('team.modal.expertise')} */}
                        expertise
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.expertise.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Experience
                      </h3>
                      <p className="text-gray-600">{selectedMember.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <ContactForm /> */}
    </div>
  );
};

export default TeamPage;