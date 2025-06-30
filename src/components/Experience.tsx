import React from 'react';
import { Building, Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            
            <div className="relative space-y-12">

              {/* Internship 1: Hardware Tools Intern */}
              <div className="flex items-center justify-center">
                <div className="relative z-10 bg-white border-4 border-primary-500 rounded-full p-3">
                  <Building className="text-primary-500" size={24} />
                </div>
              </div>
              <div className="animate-slide-up">
                <div className="relative lg:flex lg:items-center lg:space-x-8">
                  <div className="lg:w-1/2 lg:pr-8">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-display font-semibold text-gray-900">
                          Hardware Tools Intern
                        </h3>
                        <a
                          href="https://github.com/shivakayan/CERTIFICATES/blob/main/Internships/Internship%20%40Silabs.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      
                      <div className="flex items-center text-accent-600 font-medium mb-2">
                        <Building size={16} className="mr-2" />
                        Silicon Labs
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar size={14} className="mr-2" />
                        May 2024 – Sept 2024
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        Contributed to hardware design and validation, including schematic design, hardware testing, and sanity checks. Performed derating analysis and power budgeting to optimize performance. Worked hands-on with MDOs and DMMs, and developed technical documentation to support design/testing workflows.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          Hardware Testing
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          Power Budgeting
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          MDO / DMM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internship 2: Software Design Intern */}
              <div className="flex items-center justify-center">
                <div className="relative z-10 bg-white border-4 border-primary-500 rounded-full p-3">
                  <Building className="text-primary-500" size={24} />
                </div>
              </div>
              <div className="animate-slide-up">
                <div className="relative lg:flex lg:items-center lg:space-x-8">
                  <div className="lg:w-1/2 lg:pr-8">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-display font-semibold text-gray-900">
                          Intern - Software Design
                        </h3>
                        <a
                          href="https://github.com/shivakayan/CERTIFICATES/blob/main/Internships/Internship%20%40Silabs.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      
                      <div className="flex items-center text-accent-600 font-medium mb-2">
                        <Building size={16} className="mr-2" />
                        Silicon Labs
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar size={14} className="mr-2" />
                        Jan 2025 – June 2025
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        Focused on maintaining automation scripts using Python to streamline testing workflows. Also contributed to the development of embedded software examples in C for wireless connectivity. Strengthened skills in automation and embedded software development.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          Python Automation
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          Embedded C
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                          Wireless Protocols
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
