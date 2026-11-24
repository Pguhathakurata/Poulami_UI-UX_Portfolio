import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-white/20' : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
          className="relative overflow-hidden group"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Poulami G.
          </motion.span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {['about', 'projects', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(section)}
              className="relative capitalize text-neutral-900 group px-2 lg:px-4 py-2"
            >
              <span className="relative z-10 text-sm lg:text-base transition-all duration-300 group-hover:tracking-wider group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
                {section}
              </span>
              {/* Animated dots that appear on hover */}
              <motion.div
                className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"
                initial={{ scale: 0, x: 0 }}
                whileHover={{ scale: 1, x: -4 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink-400"
                initial={{ scale: 0, x: 0 }}
                whileHover={{ scale: 1, x: 4 }}
                transition={{ duration: 0.3 }}
              />
              {/* Animated line that sweeps from left to right */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-md"
        >
          {mobileMenuOpen ? (
            <X className="text-purple-600" size={24} />
          ) : (
            <Menu className="text-purple-600" size={24} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-white/20"
        >
          <div className="px-4 py-4 space-y-2">
            {['about', 'projects', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(section)}
                className="w-full text-left capitalize text-neutral-900 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all"
              >
                <span className="text-base">{section}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}