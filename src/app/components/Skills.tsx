import { motion } from 'motion/react';
import { Palette, Smartphone, Code, Users, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating beautiful interfaces with strong attention to typography, color, and layout.',
    gradient: 'from-purple-300 to-pink-300',
  },
  {
    icon: Smartphone,
    title: 'Prototyping',
    description: 'Building interactive prototypes in Figma and other tools to test ideas quickly.',
    gradient: 'from-blue-300 to-cyan-300',
  },
  {
    icon: Code,
    title: 'Design Systems',
    description: 'Developing scalable design systems that ensure consistency across products.',
    gradient: 'from-green-300 to-emerald-300',
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Conducting user interviews, testing, and analysis to inform design decisions.',
    gradient: 'from-orange-300 to-yellow-300',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">What I Do</h2>
            <Lightbulb className="text-purple-400" size={28} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <motion.div 
                className={`w-14 h-14 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon size={28} className="text-white" />
              </motion.div>
              <h3 className="text-neutral-900">{skill.title}</h3>
              <p className="text-neutral-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}