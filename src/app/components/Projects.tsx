import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useState, useEffect, useRef } from 'react';
import projectImage1 from 'figma:asset/f15d02823d6e441c6bd62b0c67cc0fafd982f71b.png';
import projectImage2 from 'figma:asset/ae51c53c6788deefbbf6f51e34a285145c040383.png';
import projectImage3 from 'figma:asset/90edf569c87705b9f5a6b71165bf5d28ced061f2.png';
import projectImage4 from 'figma:asset/40392e6694ab2c77d31ff34e3d446b8a117a1643.png';
import projectImage5 from 'figma:asset/e31148fd7ea152a90c3447341414b0699aa3ddcc.png';
import { Briefcase, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Speaking Rose',
    description: 'A Story of a product that connects to heart - mobile app design for customizable rose gifting with intuitive color selection.',
    category: 'SaaS Platform',
    image: projectImage5,
    tags: ['SaaS Platform', 'E-commerce', 'Web App'],
    gradient: 'from-rose-300 to-pink-300',
    caseStudyUrl: 'https://www.behance.net/poulamiguhatha1',
  },
  {
    id: 2,
    title: 'AI Meeting Assistance Platform',
    description: 'A comprehensive landing page design for an AI-powered meeting assistant with seamless tool integrations.',
    category: 'Web Design',
    image: projectImage1,
    tags: ['Landing Page', 'AI Platform', 'Web'],
    gradient: 'from-purple-300 to-pink-300',
    caseStudyUrl: 'https://www.behance.net/poulamiguhatha1',
  },
  {
    id: 3,
    title: 'Travel Infographics Design',
    description: 'A visually dynamic infographic capturing PTI\'s end-to-end travel experience with engaging visual storytelling.',
    category: 'Infographic Design',
    image: projectImage2,
    tags: ['Infographic', 'Visual Design', 'Content'],
    gradient: 'from-blue-300 to-cyan-300',
    caseStudyUrl: 'https://www.behance.net/poulamiguhatha1',
  },
  {
    id: 4,
    title: 'Voltplay Gaming App',
    description: 'UI mockups for an online gaming mobile application with intuitive navigation and engaging user experience.',
    category: 'Mobile Design',
    image: projectImage3,
    tags: ['Mobile', 'Gaming', 'UI Design'],
    gradient: 'from-green-300 to-emerald-300',
    caseStudyUrl: 'https://www.behance.net/poulamiguhatha1',
  },
  {
    id: 5,
    title: 'KIKU - Knowledge Platform',
    description: 'Unified knowledge platform with seamless content management, collaborative workflows, and efficient knowledge sharing.',
    category: 'Web Design',
    image: projectImage4,
    tags: ['User Desktop App', 'Admin Screens', 'Mobile App'],
    gradient: 'from-orange-300 to-yellow-300',
    caseStudyUrl: 'https://www.behance.net/poulamiguhatha1',
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 3000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isDesktop]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12 md:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Selected Work</h2>
            <Briefcase className="text-purple-400" size={28} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">Check out some of my recent projects and case studies</p>
        </motion.div>
        
        {/* Desktop: Horizontal Slider with Controls */}
        {isDesktop ? (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 md:gap-8"
            >
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${project.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white transition-all hover:scale-110 border-2 border-purple-200/30"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white transition-all hover:scale-110 border-2 border-purple-200/30"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-400'
                      : 'w-2 bg-purple-200/50 hover:bg-purple-300/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Mobile: Vertical Cards in Single Column
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <a
            href="https://www.behance.net/poulamiguhatha1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full transition-all hover:shadow-xl hover:shadow-purple-300/50 hover:scale-105"
          >
            View All Projects
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
