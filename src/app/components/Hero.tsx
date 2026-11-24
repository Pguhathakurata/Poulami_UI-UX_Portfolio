import { ArrowRight, BrainCircuit, BarChart3, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from 'figma:asset/03f2a7d3d4c74ee9824bc93986fb06fa49fb5342.png';
import { FloatingIcons } from './FloatingIcons';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-36 sm:pt-40 lg:pt-44 pb-12 relative overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Text */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Hi! I am{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Poulami
                </span>
                . A passionate UX Designer making products more engaging and problems easier to solve.
              </h1>
            </motion.div>
            
            {/* Specialty tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap justify-center gap-2.5 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 text-xs font-semibold text-violet-700 shadow-sm">
                <BrainCircuit size={14} className="text-violet-500" />
                AI Assisted Designing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-200/70 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 text-xs font-semibold text-pink-700 shadow-sm">
                <BarChart3 size={14} className="text-pink-500" />
                Data Visualizing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm">
                <Building2 size={14} className="text-emerald-500" />
                Enterprise Platform
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-lg"
            >
              I'm a designer focused on crafting beautiful, user-centered interfaces that solve real problems and delight users. Let's build something amazing together!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full transition-all hover:shadow-xl hover:shadow-purple-300/50 hover:scale-105 text-sm sm:text-base"
              >
                View my work
                <ArrowRight size={18} className="sm:size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-purple-300 text-purple-600 rounded-full transition-all hover:bg-purple-50 hover:scale-105 text-sm sm:text-base"
              >
                Let's talk
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8"
            >
              <div>
                <AnimatedCounter
                  end={5}
                  duration={2}
                  suffix="+"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-[40px]"
                />
                <div className="text-neutral-600 text-xs sm:text-sm">Years Exp</div>
              </div>
              <div>
                <AnimatedCounter
                  end={50}
                  duration={2}
                  suffix="+"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-[40px]"
                />
                <div className="text-neutral-600 text-xs sm:text-sm">Projects</div>
              </div>
              <div>
                <AnimatedCounter
                  end={30}
                  duration={2}
                  suffix="+"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-[40px]"
                />
                <div className="text-neutral-600 text-xs sm:text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image with floating tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 mb-8 flex items-start justify-center self-start sm:mb-12 lg:order-2 lg:mb-0"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 border-2 border-purple-300/30 rounded-full" style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 border-2 border-pink-300/30 rounded-full" style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}></div>
              </motion.div>

              {/* Profile image */}
              <div className="relative z-10">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating tool icons */}
              <div className="hidden md:block">
                <FloatingIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
