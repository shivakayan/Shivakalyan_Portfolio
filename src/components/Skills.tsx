import React from 'react';
import { Code, Cpu, Zap, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Embedded C", "Python", "Assembly", "VHDL", "Verilog"],
      color: "primary"
    },
    {
      title: "Hardware & Tools",
      icon: Cpu,
      skills: ["Cadence Virtuoso", "XILINX Vivado", "PCB Design", "Circuit Analysis", "Multisim", "Proteus"],
      color: "accent"
    },
    {
      title: "Technologies",
      icon: Zap,
      skills: ["IoT", "Embedded Systems", "VLSI Design", "RF Design", "Digital Signal Processing", "Microcontrollers"],
      color: "primary"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["Git/GitHub", "STM32CubeIDE", "Keil uVision", "MATLAB", "Arduino IDE", "MIT App Inventor"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = category.color === 'primary' ? 'primary' : 'accent';
            
            return (
              <div
                key={index}
                className="group animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-${colorClass}-500 to-${colorClass}-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${colorClass}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className={`text-${colorClass}-600`} size={24} />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-3 py-2 text-sm font-medium bg-${colorClass}-50 text-${colorClass}-700 rounded-lg text-center hover:bg-${colorClass}-100 transition-colors duration-300 border border-${colorClass}-200`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;