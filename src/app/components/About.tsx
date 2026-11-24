import { motion } from 'motion/react';
import { Sparkles, Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-32 h-32 border-4 border-purple-200/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-24 h-24 border-4 border-pink-200/30 rounded-lg"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
              <Sparkles className="text-purple-400" size={28} />
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-neutral-700 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          >
            <p>
              I am a UX Designer specialized in crafting User Interfaces for Websites and Mobile Apps.
            </p>
            <p>
              My Designs has been successful in increasing user engagement and traffic visibly by ensuring accessibility, design aesthetics and fulfilling client needs.
            </p>
            <p>
              I am a fantastic team player, adaptive and flexible in approching others. I prefer open communication and collaboration to make every project a milestone for all!
            </p>
            <p>
              With over 5 years of experience in UI/UX design, I specialize in creating seamless digital experiences that bridge the gap between user needs and business goals. My approach combines research-driven insights with aesthetic sensibility.
            </p>
            <p>
              I believe great design is invisible—it just works. Every project I undertake begins with understanding the problem deeply, followed by iterative design processes that involve sketching, prototyping, and rigorous user testing.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full transition-all hover:shadow-xl hover:shadow-purple-300/50 hover:scale-105"
              >
                <Download size={20} />
                Check my CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}