import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, ChevronDown, Code2, Database, Network, Users, TrendingUp, Shield, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Judicial Registrar (Information Technology)",
      company: "High Court of Colombo - Judicial Service Commission",
      period: "November 2007 - Present (17+ Years)",
      description: "Leading IT transformation and digital initiatives across Sri Lanka's judicial system, managing court technology infrastructure and implementing innovative solutions.",
      responsibilities: [
        "Lead large IT projects including design and deployment of new systems",
        "Monitor IT performance and recommend infrastructure improvements",
        "Define IT strategy, architecture, and processes for court system",
        "Assess vendors and develop test strategies for hardware/software",
        "Design training programs and workshops for court staff"
      ],
      achievements: [
        "Organized 1st remote evidence via video conference in Sri Lankan Court history (2008)",
        "Developed and deployed e-Case Record Management System across 40 courts including Supreme Court",
        "Created Human Resource Management ERP system for Judicial Service Commission",
        "Developed e-Bail Application software connecting prisons, AG's Department, and courts during COVID-19"
      ]
    },
    {
      title: "Senior .NET Programmer/Developer",
      company: "Seatol Technologies (Pvt) Limited",
      period: "January 2007 - October 2007",
      description: "Led software development team with comprehensive understanding of software lifecycle including analysis, design, development, and support.",
      responsibilities: [
        "Lead software development team as senior programmer",
        "Manage complete software lifecycle from analysis to deployment",
        "Provide technical leadership and mentorship",
        "Ensure quality standards and best practices"
      ]
    },
    {
      title: "Assistant Factory Manager",
      company: "Ceylon Ceramics Corporation",
      period: "June 2001 - January 2007 (5.5 Years)",
      description: "Managed comprehensive production operations including planning, quality control, inventory management, and marketing strategy.",
      responsibilities: [
        "Develop and implement innovative strategies for factory operations",
        "Screen, recruit, and train factory workers",
        "Collaborate on quality control processes",
        "Prepare production reports and analyze data",
        "Engage with NHDA as main customer"
      ],
      achievements: [
        "Best Profitable tile factory out of 8 factories island-wide in 2005",
        "Increased tile kiln grading level from 64% to 78% in 2006",
        "Introduced various types of roofing tiles",
        "Successfully managed marketing strategy and customer relationships"
      ]
    },
    {
      title: "Quality Control Assistant",
      company: "Ceylon Ceramics Corporation",
      period: "April 2000 - May 2001",
      description: "Applied QC strategies including Six Sigma, Statistical Process Control, Lean, and 5S methodologies to improve quality and reduce defects.",
      achievements: [
        "Introduced Quality Circle concept to production processes",
        "Reduced defects from 14% to 6.4% in 2001",
        "Changed worker attitudes through quality circle meetings",
        "Implemented star reward system and special training programs"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "National School of Business Management, Sri Lanka",
      year: "December 2020",
      details: "Two-year degree program with 63 credits including 15 credits of research. SLQF Level 10 qualification.",
      icon: TrendingUp
    },
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Open University of Sri Lanka",
      year: "November 2006",
      details: "Four-year degree in Computer Science, Applied Mathematics, and Physics with six compulsory subjects and two English courses.",
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "Basic Software Application Technology",
      institution: "Shenzhen Association, People's Republic of China",
      year: "August 2015",
      details: "56-day intensive training on China Domestic software systems including OS, databases, and office software"
    },
    {
      title: "Certificate in ASP.NET",
      institution: "National Institute of Information Technology (NIIT)",
      year: "September 2005",
      details: "Programming in C# with Microsoft Visual Studio 2010"
    },
    {
      title: "Developing Windows Applications using VB.NET",
      institution: "National Institute of Information Technology (NIIT)",
      year: "March 2005",
      details: "Windows Communication Foundation Solutions with Visual Studio 2010"

    },

     {
      title: "e-Swabhimani awards 2017 ",
      institution: "Information and Communication Technology Agency of Sri Lanka (ICTA)",
      year: "July 2017",
      details: "Nominated for award to recognize the innovative and creative digital applications and content that has an impact on society"
    },
     {
      title: "Leadership and It is Impact on Organizational Strategy",
      institution: "Applied Business Academy- CM13 3BE,England, United Kingdom",
      year: "March 2021 | 1 week online workshop",
      details: "Resistance to digital transformation due to rigid hierarchical leadership and week communication between top management and employees"
    },
       {
      title: "Guidance of institution creates values through the configuration and coordination",
      institution: "Applied Business Academy- CM13 3BE,England, United Kingdom",
      year: "May 2021 | 1 week online workshop",
      details: "Representing the overall strategic direction of institution and dealing with the determination of the nature of the objectives by using stability,groth,retrenchment & combine strategies"
    },
    {
      title: "Cyber Security Nexus Fundermentals",
      institution: "National Institute of Standerds and Technology with ICTA",
      year: "September 2017 | 3 days full time physical workshop",
      details: "Cyber Security Expert series is designed to strengthen the industry by certifing top management level in Sri Lanken government institutions and contains advance concepts, CS Architechture & network, standerds, guidlines and the roll of the CS proffessionals."
    },
    {
      title: "Cyber Security & Licensing Guidelines for Government CIOs and Procurement Officers",

      institution: "Information and Communication Technology Agency of Sri Lanka (ICTA)",
      year: "November 2017 | 3 days full time physical workshop",
      details: " Improve and enhance the knowledge on Digitization Government, Cyber Security, Software Licensing, Cloud based solutions and challenges faced while operating in a digital age."
    }
  ];

  const skills = [
    { name: "IT Infrastructure & Systems", level: 95, icon: Network },
    { name: "Database Management", level: 87, icon: Database },
    { name: "Software Development", level: 85, icon: Code2 },
    { name: "Project Management", level: 90, icon: TrendingUp },
    { name: "High Level Procurements & Technical Evaluation", level: 85, icon: Code2 },
    { name: "Strategic Management", level: 88, icon: Shield },
    { name: "Analytical Skills", level: 92, icon: Shield },
    { name: "Human Resource Management", level: 79, icon: Users }
  ];

  const coreCompetencies = [
    "Business Process & Functions (Finance, HR, Procurement, Operations)",
    "Meticulous Attention to Detail",
    "Strong Analytical Ability and Problem-Solving",
    "Outstanding Organizational and Leadership Skills",
    "Excellent Communication Skills",
    "Knowledge in Planning and Budgeting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
                 onClick={() => scrollToSection('home')}>
              Thilina Rathnayake
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === item 
                      ? 'text-blue-600 scale-110' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 capitalize rounded-md transition-colors ${
                    activeSection === item
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <img className='h-44 w-44 rounded-full object-cover' src="../public/m2.jpg" alt="Thilina Rathnayake" />
            </div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Thilina Rathnayake
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
              IT Leader & Strategic Manager
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              20+ years of expertise in IT Management, Digital Transformation, Strategic Leadership, 
              and Operations Management across judicial systems and corporate environments
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="mailto:thilina78@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Experience
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('about')} 
              className="animate-bounce inline-block mt-8"
            >
              <ChevronDown size={40} className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A seasoned IT professional with over <span className="font-bold text-blue-600">20 years</span> of comprehensive 
                experience spanning Information Technology, Strategic Management, and Operations. Currently serving as 
                <span className="font-bold text-indigo-600"> Judicial Registrar (IT)</span> at the High Court of Colombo, 
                where I've pioneered digital transformation initiatives in Sri Lanka's judicial system.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey combines technical excellence with strategic leadership, having successfully managed 
                large-scale IT projects, developed innovative software solutions, and led organizational transformations 
                across various industries including judiciary, technology, and manufacturing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With an <span className="font-bold text-purple-600">MBA</span> and <span className="font-bold text-purple-600">BSc 
                in Computer Science</span>, I bring a unique blend of business acumen and technical expertise to drive 
                digital innovation and operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-700 font-semibold">Years Top Management Experience</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-5xl font-bold text-indigo-600 mb-2">40+</div>
                <div className="text-gray-700 font-semibold">Courts Digitized using own software system</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-2">1st</div>
                <div className="text-gray-700 font-semibold">Remote Evidence in Sri Lanken Judiciary</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-5xl font-bold text-pink-600 mb-2">4+</div>
                <div className="text-gray-700 font-semibold">Major ERP Systems for Judiciary </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl flex-shrink-0">
                    <Briefcase className="text-blue-600" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-600 mb-4 font-medium">{exp.period}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                    
                    {exp.responsibilities && (
                      <div className="mb-6">
                        <p className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-blue-600"></span>
                          Key Responsibilities:
                        </p>
                        <ul className="space-y-2 ml-4">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.achievements && (
                      <div>
                        <p className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 bg-gradient-to-r from-yellow-500 to-orange-500"></span>
                          Key Achievements:
                        </p>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg">
                              <Award className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                              <span className="text-gray-800 font-medium">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
          
          {/* Academic Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Academic Qualifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-xl flex-shrink-0">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                        <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                        <p className="text-gray-600 font-medium mb-3">{edu.year}</p>
                        <p className="text-gray-700 leading-relaxed">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-purple-600 font-semibold text-sm mb-2">{cert.institution}</p>
                  <p className="text-gray-600 text-sm font-medium mb-2">{cert.year}</p>
                  <p className="text-gray-700 text-sm">{cert.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-2 rounded-lg">
                        <IconComponent className="text-blue-600" size={24} />
                      </div>
                      <span className="font-bold text-gray-800 text-lg">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation 
            about technology and innovation. Feel free to reach out!
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Email</p>
                    <a href="mailto:thilina78@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg block">
                      thilina78@gmail.com
                    </a>
                    <a href="mailto:thilina@jsc.gov.lk" className="text-blue-600 hover:text-blue-700 font-semibold text-lg block">
                      thilina@jsc.gov.lk
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Phone</p>
                    <p className="text-gray-800 font-semibold text-lg">+94 773 562022</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">WhatsApp</p>
                    <a href="https://wa.me/94703290266" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold text-lg block">
                      +94 703 290266
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group md:col-span-2">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Residence</p>
                    <p className="text-gray-800 font-semibold text-lg">40/A/15/4, Metro Homes, Malay Street</p>
                    <p className="text-gray-800 font-semibold text-lg">Colombo 12, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a 
                  href="mailto:thilina78@gmail.com" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail size={24} />
                  Send me an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Thilina Rathnayake
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transforming organizations through technology, innovation, and strategic leadership
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <a href="mailto:thilina78@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+94773562022" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="https://wa.me/94703290266" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle size={24} />
              </a>
              <div className="text-gray-400 hover:text-blue-400 transition-colors">
                <MapPin size={24} />
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Thilina Rathnayake. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;