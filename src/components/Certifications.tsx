import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Analog Circuits",
      issuer: "NPTEL",
      category: "Electronics",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Analog%20Circuits.pdf"
    },
    {
      title: "Embedded Systems Design",
      issuer: "NPTEL",
      category: "Embedded Systems",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Embedded%20Systems%20Design.pdf"
    },
    {
      title: "Introduction to Programming in C",
      issuer: "NPTEL",
      category: "Programming",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Introduction%20To%20Programming%20In%20C.jpeg"
    },
    {
      title: "Digital System Design",
      issuer: "NPTEL",
      category: "Digital Electronics",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Digital%20System%20Design.jpeg"
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      category: "IoT",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Introduction%20To%20Internet%20Of%20Things.pdf"
    },
    {
      title: "C++ Programming",
      issuer: "CodeChef",
      category: "Programming",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/Codechef/polashivakalya-Learn%20C%2B%2B.pdf"
    },
    {
      title: "IEEE Volunteer Certificate",
      issuer: "IEEE",
      category: "Leadership",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/IEEE/volunteerCertificate_IEEE_Chair.pdf"
    },
    {
      title: "Problem Solving Through Programming in C",
      issuer: "NPTEL",
      category: "Programming",
      link: "https://github.com/shivakayan/CERTIFICATES/blob/main/CERTIFICATES%20I%20OWN/NPTEL/Problem%20Solving%20Through%20Programming%20In%20C.pdf"
    }
  ];

  const categories = ["All", "Electronics", "Programming", "Embedded Systems", "IoT", "Leadership"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized certifications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className="group animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Award className="text-accent-600" size={24} />
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-accent-600 font-medium mb-3">
                  {cert.issuer}
                </p>

                <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shivakayan/CERTIFICATES"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Award size={20} />
            <span>View All Certificates</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;