import React from 'react';
import { Trophy, Users, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const tabs = ["Achievements", "Extra-Curriculars"];
  const [selectedTab, setSelectedTab] = React.useState("Achievements");

  const achievements = [
    "Won \"Plasma Pull\" finals at Cognizance 2024, IIT Roorkee.",
    "Finalist of Byte Bending Championship 2023.",
    "First prize for best Theme Based Project: “Ratio-Rite Grain Mixer”.",
    "Academic Merit Award recipient (Top 3 in department) – 3 times.",
    "Winner of INDUSTRIZE - Problem Solver in ACUMEN 2023.",
    "Winner of Circuit Debugging in ACUMEN 2023.",
    "Winner of BUG BUSTERS in ACUMEN 2024.",
    "Elite + Gold + Top 2% in NPTEL: Introduction to C."
  ];

  const extracurriculars = [
    "IEEE SB Chairman of STB 31271.",
    "Chairman, IEEE CAS Student Chapter CAS04.",
    "Member, Swayam Cell - Incubation Department.",
    "Organized TECHFEST ACUMEN 2K24 at college level.",
    "Participated in college-level carroms and table tennis tournaments.",
    "Volunteer Teacher at Teach for India.",
    "Educational Content Creator on YouTube."
  ];

  const contentList = selectedTab === "Achievements" ? achievements : extracurriculars;

  return (
    <section id="achievements" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Achievements & Extra-Curriculars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my accomplishments and leadership beyond the classroom.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 text-sm ${
                selectedTab === tab
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {contentList.map((item, index) => (
            <div
              key={index}
              className="group animate-slide-up relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 mb-2">
                  {selectedTab === "Achievements" ? (
                    <Trophy className="text-accent-600" size={22} />
                  ) : (
                    <Users className="text-accent-600" size={22} />
                  )}
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Link to external profile or document */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shivakayan/CERTIFICATES/tree/main/CERTIFICATES%20I%20OWN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Trophy size={20} />
            <span>View My Full Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;