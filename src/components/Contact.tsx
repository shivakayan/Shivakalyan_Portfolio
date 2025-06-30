import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and innovative projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:Polashivakalyan@gmail.com"
                  className="group flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                      Polashivakalyan@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/shivakalyan-pola-94188b25b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">LinkedIn</p>
                    <p className="text-gray-600 group-hover:text-accent-600 transition-colors duration-300">
                      Connect with me professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/shivakayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Github className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">GitHub</p>
                    <p className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                      View my projects and code
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Location</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;