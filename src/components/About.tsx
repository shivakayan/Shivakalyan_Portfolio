import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-10"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="text-primary-600" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Bachelor of Technology
                      </h4>
                      <p className="text-primary-600 font-medium">
                        Electronics and Communication Engineering
                      </p>
                      <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>Vasavi College of Engineering, Hyderabad</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>2021-2025</span>
                        </div>
                      </div>
                      <p className="text-accent-600 font-medium mt-1">
                        CGPA: 9.62/10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up space-y-6">
            <div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                Who Am I
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a dedicated Electronics and Communication Engineering student with a passion for 
                cutting-edge technology and innovation. My journey in engineering has led me to explore 
                various domains including embedded systems, VLSI design, and IoT applications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through hands-on projects and industry experience, I've developed strong skills in 
                both hardware and software development, always striving to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent-600 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Certifications</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">1+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent-600 mb-1">9.62</div>
                <div className="text-gray-600 text-sm">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;