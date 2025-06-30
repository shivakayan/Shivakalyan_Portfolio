import React from 'react';
import profileImage from '../assets/profile.jpg';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-16 pt-12 lg:pt-0">
        {/* 👤 Profile Image */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary-100 blur-lg opacity-50 z-0"></div>
          <img
            src={profileImage}
            alt="Shivakalyan Pola"
            className="relative w-full h-full rounded-full shadow-lg object-cover border-4 border-primary-600 z-10"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
            <span className="block">Shivakalyan Gupta</span>
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Pola
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light mb-4">
            Electronics & Communication Engineering Student
          </p>

          <p className="text-base text-gray-500 mb-6 max-w-2xl leading-relaxed">
            Passionate about embedded systems, VLSI design, and emerging
            technologies. Building innovative solutions at the intersection of
            hardware and software.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
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

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/shivakalyan-pola-94188b25b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shivakayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:Polashivakalyan@gmail.com"
              className="text-gray-400 hover:text-primary-600 transition duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* ⬇️ Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-primary-600 transition duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
