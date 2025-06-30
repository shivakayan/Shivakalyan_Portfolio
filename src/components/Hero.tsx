import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-slide-down">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
            <span className="block">Shivakalyan Gupta</span>
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Pola
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
            Electronics & Communication Engineering Student
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about embedded systems, VLSI design, and emerging technologies. 
            Building innovative solutions at the intersection of hardware and software.
          </p>
        </div>

        <div className="animate-slide-up space-y-8">
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:Polashivakalyan@gmail.com"
              className="group flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            
            <a
              href="https://github.com/shivakayan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 border border-gray-300 hover:border-accent-500 text-gray-700 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-accent-500"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/shivakalyan-pola-94188b25b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shivakayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:Polashivakalyan@gmail.com"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-300 animate-bounce-subtle"
          >
          <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;