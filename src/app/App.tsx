import { useState, useEffect } from 'react';
import { Mail, Linkedin, Download, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64;
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#232D4B] h-16">
        <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
          <div className="font-bold tracking-[0.2em] text-white">YT</div>
          <div className="flex gap-10">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white text-[15px] relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E57200] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] bg-[#232D4B] flex items-center pt-16">
        <div className="max-w-[1440px] mx-auto px-10 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-7 max-w-[680px] pl-4 lg:pl-10">
            <p className="text-white text-[28px] font-light tracking-[0.01em]">Hi, I'm</p>
            <h1
              className="text-white font-bold leading-[1.05]"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '76px' }}
            >
              Yog Tadhani
            </h1>

            <div className="space-y-2">
              <p className="text-white text-[28px] font-semibold leading-tight">
                University of Virginia, School of Engineering
              </p>
              <p className="text-[#E57200] text-[20px] font-medium leading-relaxed">
                Computer Science BS <span className="text-white/50">|</span> Engineering Business Minor
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#E57200] text-white px-8 py-3 rounded-full hover:bg-[#cc6600] transition-colors"
              >
                Contact Me
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#232D4B] transition-colors">
                View Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#E57200] rounded-full blur-2xl opacity-15 scale-110"></div>
            <div className="relative w-[360px] h-[360px] rounded-full border-[4px] border-[#E57200] overflow-hidden shadow-[0_0_60px_rgba(229,114,0,0.18)]">
              <img
                src="/yog_tadhani_main_pic2.png"
                alt="Yog Tadhani"
                className="w-full h-full object-cover object-top scale-[1.05]"
                style={{ objectPosition: 'center 6%' }}
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-[100px]">
        <div className="max-w-[760px] mx-auto px-8 text-center">
          {/* <p className="text-[#E57200] uppercase font-bold text-[13px] tracking-[0.15em] mb-4">
            About Me
          </p> */}
          <h2 className="text-[#232D4B] font-bold text-[40px] mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
            A Little About Me
          </h2>
          <p className="text-[#444444] text-[17px] leading-[1.8] mb-10">
            I’m a student at the University of Virginia studying Computer Science with a minor in Engineering Business. I’m especially interested in building software that solves practical problems for real people. Most recently, at HoosHack 2026, I worked on a dorm designer that used 3D room modeling to help first-year students visualize shared dorm spaces before move-in. The goal was to make it easier for students to understand how their room could function, decide what to bring, and plan around shared space constraints. Experiences like that have made me excited about software engineering that combines technical depth with useful, human-centered design.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[#F5F5F5] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            {/* <p className="text-[#E57200] uppercase font-bold text-[13px] tracking-[0.15em] mb-4">
              Experience
            </p> */}
            <h2 className="text-[#232D4B] font-bold text-[40px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Where I've Worked
            </h2>
          </div>

          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#E57200]"></div>

            {/* Experience Entries */}
            <div className="space-y-0">
              {/* Entry 1 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="relative flex items-center justify-center w-12 shrink-0">
                  <div className="absolute w-3 h-3 bg-[#E57200] rounded-full"></div>
                  <div className="absolute w-[48px] h-[2px] bg-[#E57200] left-full"></div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-xl shadow-md p-7 max-w-[460px]">
                    <h3 className="text-[#232D4B] font-bold text-[22px] mb-2">
                      Software Engineering Intern
                    </h3>
                    <p className="text-[#666] text-[14px] font-medium mb-2">
                      Organised Co · London, UK
                    </p>
                    <p className="text-[#E57200] text-[13px] mb-3">
                      Jun 2025 – Jul 2025
                    </p>
                    <p className="text-[#444] text-[15px] leading-[1.7]">
                      Built and supported a backend sync system that enabled real-time supplier data updates using the Wix REST API and MongoDB in an Agile environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 2 - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12 flex justify-end">
                  <div className="bg-white rounded-xl shadow-md p-7 max-w-[460px]">
                    <h3 className="text-[#232D4B] font-bold text-[22px] mb-2">
                      General Research Assistant
                    </h3>
                    <p className="text-[#666] text-[14px] font-medium mb-2">
                      UVA Darden School of Business · Charlottesville, VA
                    </p>
                    <p className="text-[#E57200] text-[13px] mb-3">
                      Sept 2024 – May 2025
                    </p>
                    <p className="text-[#444] text-[15px] leading-[1.7]">
                      Analyzed large-scale financial datasets and built optimization models in Python and Gurobi to uncover market trends and improve allocation decisions in underrepresented markets of Africa.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 shrink-0">
                  <div className="absolute w-3 h-3 bg-[#E57200] rounded-full"></div>
                  <div className="absolute w-[48px] h-[2px] bg-[#E57200] right-full"></div>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Entry 3 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="relative flex items-center justify-center w-12 shrink-0">
                  <div className="absolute w-3 h-3 bg-[#E57200] rounded-full"></div>
                  <div className="absolute w-[48px] h-[2px] bg-[#E57200] left-full"></div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-xl shadow-md p-7 max-w-[460px]">
                    <h3 className="text-[#232D4B] font-bold text-[22px] mb-2">
                      Tier 1 Supervisor, Web Development Division
                    </h3>
                    <p className="text-[#666] text-[14px] font-medium mb-2">
                      IRDI Business Group LLC · Remote, CA
                    </p>
                    <p className="text-[#E57200] text-[13px] mb-3">
                      Jan 2025 – May 2025
                    </p>
                    <p className="text-[#444] text-[15px] leading-[1.7]">
                      Led development of a secure company website using Laravel, PHP, and SQLite while managing both admin and visitor-facing functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entry 4 - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12 flex justify-end">
                  <div className="bg-white rounded-xl shadow-md p-7 max-w-[460px]">
                    <h3 className="text-[#232D4B] font-bold text-[22px] mb-2">
                      Web Developer Intern
                    </h3>
                    <p className="text-[#666] text-[14px] font-medium mb-2">
                      IRDI Business Group LLC · Remote, CA
                    </p>
                    <p className="text-[#E57200] text-[13px] mb-3">
                      Aug 2024 – Dec 2024
                    </p>
                    <p className="text-[#444] text-[15px] leading-[1.7]">
                      Strengthened and rebuilt parts of the company’s web infrastructure after a cyber attack while improving site traffic, security, and user trust.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 shrink-0">
                  <div className="absolute w-3 h-3 bg-[#E57200] rounded-full"></div>
                  <div className="absolute w-[48px] h-[2px] bg-[#E57200] right-full"></div>
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>


              {/* Entry 5 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="relative flex items-center justify-center w-12 shrink-0">
                  <div className="absolute w-3 h-3 bg-[#E57200] rounded-full"></div>
                  <div className="absolute w-[48px] h-[2px] bg-[#E57200] left-full"></div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-xl shadow-md p-7 max-w-[460px]">
                    <h3 className="text-[#232D4B] font-bold text-[22px] mb-2">
                      Quantum Physics Research Assistant
                    </h3>
                    <p className="text-[#666] text-[14px] font-medium mb-2">
                      UVA Department of Physics · Charlottesville, VA
                    </p>
                    <p className="text-[#E57200] text-[13px] mb-3">
                      Aug 2023 – May 2024
                    </p>
                    <p className="text-[#444] text-[15px] leading-[1.7]">
                      Developed Python-based computational models and visualizations to support holographic laser experiments and quantum research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-[100px]">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-16">
            {/* <p className="text-[#E57200] uppercase font-bold text-[13px] tracking-[0.15em] mb-4">
              Projects
            </p> */}
            <h2 className="text-[#232D4B] font-bold text-[40px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Things I've Built
            </h2>
          </div>

          <div className="space-y-12">
            {/* Project 1 - Description Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl h-[380px]">
              <div className="bg-[#232D4B] p-12 flex flex-col justify-center">
                <h3 className="text-white font-bold text-[26px] mb-4">
                  DormDraft (Dorm Designer)
                </h3>
                <p className="text-[#B0B8C9] text-[15px] leading-[1.7] mb-6">
                  An interactive 3D dorm room visualizer that lets students explore their assigned space, drag and arrange furniture to scale, and plan layouts before move-in.
                </p>
                <button className="self-start border-2 border-[#E57200] text-[#E57200] px-6 py-2 rounded-full text-[14px] hover:bg-[#E57200] hover:text-white transition-colors flex items-center gap-2">
                  View Project
                  <ExternalLink size={14} />
                </button>
              </div>
              <div className="bg-[#F5F5F5] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-[#E57200] text-6xl font-bold opacity-20" style={{ fontFamily: 'Sora, sans-serif' }}>
                  PA
                </div>
              </div>
            </div>

            {/* Project 2 - Image Left, Description Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl h-[380px]">
              <div className="bg-[#F5F5F5] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-[#E57200] text-6xl font-bold opacity-20" style={{ fontFamily: 'Sora, sans-serif' }}>
                  PB
                </div>
              </div>
              <div className="bg-[#232D4B] p-12 flex flex-col justify-center">
                <h3 className="text-white font-bold text-[26px] mb-4">
                  Project Beta
                </h3>
                <p className="text-[#B0B8C9] text-[15px] leading-[1.7] mb-6">
                  An innovative mobile-first solution designed to streamline workflows. Implements advanced algorithms for optimization and provides seamless integration with existing systems.
                </p>
                <button className="self-start border-2 border-[#E57200] text-[#E57200] px-6 py-2 rounded-full text-[14px] hover:bg-[#E57200] hover:text-white transition-colors flex items-center gap-2">
                  View Project
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Project 3 - Description Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl h-[380px]">
              <div className="bg-[#232D4B] p-12 flex flex-col justify-center">
                <h3 className="text-white font-bold text-[26px] mb-4">
                  Project Gamma
                </h3>
                <p className="text-[#B0B8C9] text-[15px] leading-[1.7] mb-6">
                  A research-driven tool that combines machine learning with practical business applications. Demonstrates the intersection of technical capability and real-world problem solving.
                </p>
                <button className="self-start border-2 border-[#E57200] text-[#E57200] px-6 py-2 rounded-full text-[14px] hover:bg-[#E57200] hover:text-white transition-colors flex items-center gap-2">
                  View Project
                  <ExternalLink size={14} />
                </button>
              </div>
              <div className="bg-[#F5F5F5] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-[#E57200] text-6xl font-bold opacity-20" style={{ fontFamily: 'Sora, sans-serif' }}>
                  PG
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#F5F5F5] py-[80px]">
        <div className="max-w-[900px] mx-auto px-8">
          <div className="text-center mb-12">
            {/* <p className="text-[#E57200] uppercase font-bold text-[13px] tracking-[0.15em] mb-4">
              Skills
            </p> */}
            <h2 className="text-[#232D4B] font-bold text-[40px]" style={{ fontFamily: 'Sora, sans-serif' }}>
              What I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Languages */}
            <div>
              <h3 className="text-[#E57200] font-bold text-[16px] mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS', 'JSON/XML'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[#DDE3F0] text-[#232D4B] px-4 py-2 rounded-lg text-[13px] hover:shadow-md transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-[#E57200] font-bold text-[16px] mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Git/GitHub',
                  'Firebase',
                  'WordPress',
                  'Google reCAPTCHA',
                  'MATLAB',
                  'Unity',
                  'Linux/Unix',
                  'SolidWorks',
                  'Microsoft Office'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[#DDE3F0] text-[#232D4B] px-4 py-2 rounded-lg text-[13px] hover:shadow-md transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-[#E57200] font-bold text-[16px] mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Node.js',
                  'Django',
                  'JUnit',
                  'JDBC',
                  'Hibernate',
                  'Express'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[#DDE3F0] text-[#232D4B] px-4 py-2 rounded-lg text-[13px] hover:shadow-md transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#232D4B] py-[80px]">
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <h2 className="text-white font-bold text-[40px] mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-[#B0B8C9] text-[17px] mb-10">
            Feel free to reach out — I'd love to connect.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:tadhaniyog@gmail.com"
              className="bg-white text-[#232D4B] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#E57200] hover:text-white transition-colors"
            >
              <Mail size={20} />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/yog-tadhani-9998a01b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#232D4B] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#E57200] hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#232D4B] border-t border-white/10 py-6">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <p className="text-[#B0B8C9] text-[13px]">© 2026 Yog Tadhani</p>
        </div>
      </footer>
    </div>
  );
}
