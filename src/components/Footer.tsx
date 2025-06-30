import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="mailto:Polashivakalyan@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivakalyan-pola-94188b25b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shivakayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shivakalyan Pola. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart size={12} className="text-red-500" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;