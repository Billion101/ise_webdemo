import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          // backgroundImage: 'url(https://images.pexels.com/photos/9486607/pexels-photo-9486607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          // backgroundImage: 'url(https://images.unsplash.com/photo-1604925100479-114196df1a19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8)',
          backgroundImage: 'url(https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/494693794_2088350681634626_3360021782947902628_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqqbGre8YXnmJwU0fvIKPBvTZZb1itsPe9NllvWK2w96xtm2RUYQnABk1xMqiFMdRhnVvMbBZFX1e7idUOkNxL&_nc_ohc=3TIf1nlgDPUQ7kNvwGqhnXx&_nc_oc=Adn6UwH0oKikAmyL_5_pmo_pVx4_Eea6AqtAxtzh8KKV0D-Bex7rSF3tNffoInO-tYU&_nc_zt=23&_nc_ht=scontent.fvte2-3.fna&_nc_gid=o0Sv9HbDdOdwtTUicDXGJQ&oh=00_AfHM4uavxyLcKVU5xKbjqtTbFrHOxIGtsb8SinH1-elGlA&oe=681C0435)',
          backgroundPosition: 'center 30%' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/10"></div>
      </div>

      {/* Hero Content 5e5e5e */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-shadow-lg">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Inclusive Social and Environment Consulting
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
          >
            A Lao-managed consulting company providing quality environment, natural resource and social services across all sectors of development projects.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/services"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ height: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-white rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;