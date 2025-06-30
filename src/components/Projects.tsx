import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "LNA Design using Cadence Virtuoso",
      description: "Design and analysis of Low Noise Amplifier using professional EDA tools for RF applications with comprehensive circuit simulation and optimization.",
      tech: ["Cadence Virtuoso", "RF Design", "Circuit Analysis", "SPICE Simulation"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Design%20and%20analysis%20of%20LNA%20using%20Cadence%20Virtuoso",
      featured: true
    },
    {
      title: "5V 1A Charger Circuit",
      description: "Designed and implemented a regulated power supply circuit for charging applications with overcurrent protection and thermal management.",
      tech: ["Power Electronics", "Circuit Design", "PCB Layout", "Thermal Analysis"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/5V%201A%20CHARGER"
    },
    {
      title: "Grain Moisture Meter",
      description: "IoT-based system to measure and monitor grain moisture content for agricultural applications with real-time data logging.",
      tech: ["IoT", "Sensors", "Data Analytics", "Arduino"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Grain%20Moisture%20Meter"
    },
    {
      title: "Grain Flow Rate Meter",
      description: "Precision measurement system for monitoring grain flow rates in agricultural processing with automated data collection.",
      tech: ["Flow Sensors", "Microcontrollers", "Data Acquisition", "Calibration"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Grain%20flow%20rate%20meter"
    },
    {
      title: "Ratio Rite Grain Mixer",
      description: "Automated grain mixing system with precise ratio control for agricultural feed preparation and quality assurance.",
      tech: ["Automation", "Control Systems", "Sensors", "Motor Control"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Ratio%20Rite%20Grain%20Mixer"
    },
    {
      title: "Home Automation System",
      description: "Smart home automation using NodeMCU and MIT App Inventor for remote control and monitoring of household appliances.",
      tech: ["NodeMCU", "MIT App Inventor", "IoT", "WiFi", "Mobile App"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Home%20automation%20using%20node%20mcu%20and%20mit%20app%20inventor"
    },
    {
      title: "Child ATM Card System",
      description: "Secure ATM card system designed for children with parental controls and spending limits using NodeMCU and mobile app integration.",
      tech: ["NodeMCU", "MIT App Inventor", "Security", "RFID", "Mobile App"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/child%20atm%20card%20using%20node%20mcu%20and%20mit%20app%20inventor"
    },
    {
      title: "Calculator using 8051",
      description: "Microcontroller-based calculator implementation using 8051 architecture with LCD display and keypad interface.",
      tech: ["8051 Microcontroller", "Assembly Language", "Embedded Systems", "LCD Interface"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Calculator%20using%208051"
    },
    {
      title: "STM32 Programming",
      description: "Comprehensive embedded C programming projects for STM32 microcontrollers with various peripheral integrations.",
      tech: ["STM32", "Embedded C", "HAL Library", "Peripheral Programming"],
      github: "https://github.com/shivakayan/Embedded-C-Programming-for-STM32"
    },
    {
      title: "BCD Password Detector using FSM",
      description: "Finite State Machine implementation for BCD password detection using XILINX Vivado with comprehensive testing and validation.",
      tech: ["XILINX Vivado", "VHDL", "FSM Design", "Digital Logic", "Simulation"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/BCD%20password%20detector%20using%20FSM-XILINX%20VIVADO"
    },
    {
      title: "Automatic Lighting system using BH1750",
      description: "Designed and implemented an embedded system integrating the BH1750 light sensor, SIWG917, and BRD4002A development board to sense ambient light in real-time and dynamically adjust onboard LED brightness using PWM signal generation.",
      tech: ["IoT", "BH1750 Sensor", "SIWG917", "PWM", "Simplicity Studio"]
    },
    {
      title: "WIFI Controlled Soccer Bot",
      description: "Developed an RC car powered by a Node MCU, enabling real-time control via a Wi-Fi network. Designed a web server to receive HTTP commands for motor directions and a solenoid actuator for ball shooting, integrating commands like forward, backward, left, right, and stop using GPIO outputs.",
      tech: ["Node MCU", "Wi-Fi Control", "Web Server", "MIT App Inventor"],
      github: "https://github.com/shivakayan/Engineering_Projects/tree/main/Wifi%20Controlled%20Soccer%20Bot"
    },
    {
      title: "Voice Recognition using Cross-Correlation in MATLAB",
      description: "Developed a voice recognition system in MATLAB using cross-correlation to identify a speaker by comparing a recorded voice with pre-recorded samples. The system calculates similarity using xcorr and identifies the person with the highest correlation.",
      tech: ["MATLAB", "Signal Processing", "Voice Recognition", "Cross-Correlation"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive collection of engineering projects showcasing expertise in embedded systems, 
            VLSI design, IoT applications, and digital circuit implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group animate-slide-up relative cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.github, '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 group-hover:animate-tilt">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-gray-400 hover:text-primary-500 transition-colors duration-200 hover:scale-110 transform">
                      <Github size={20} />
                    </div>
                    <div className="text-gray-400 hover:text-accent-500 transition-colors duration-200 hover:scale-110 transform">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shivakayan/Engineering_Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;