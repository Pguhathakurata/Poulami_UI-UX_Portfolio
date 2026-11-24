import { motion } from 'motion/react';
import { Figma, Code2, Palette, Layout, Image, FileCode, Wrench, Box, Pencil, Layers } from 'lucide-react';

const tools = [
  {
    name: 'Figma',
    icon: Figma,
    category: 'Design',
    gradient: 'from-purple-300 to-pink-300',
  },
  {
    name: 'Adobe XD',
    icon: Box,
    category: 'Design',
    gradient: 'from-fuchsia-300 to-violet-300',
  },
  {
    name: 'Webflow',
    icon: Layout,
    category: 'Development',
    gradient: 'from-blue-300 to-cyan-300',
  },
  {
    name: 'Photoshop',
    icon: Image,
    category: 'Design',
    gradient: 'from-indigo-300 to-purple-300',
  },
  {
    name: 'Framer',
    icon: Layout,
    category: 'Prototyping',
    gradient: 'from-pink-300 to-rose-300',
  },
  {
    name: 'Canva',
    icon: Palette,
    category: 'Design',
    gradient: 'from-cyan-300 to-blue-300',
  },
  {
    name: 'HTML',
    icon: FileCode,
    category: 'Development',
    gradient: 'from-orange-300 to-red-300',
  },
  {
    name: 'CSS',
    icon: FileCode,
    category: 'Development',
    gradient: 'from-blue-300 to-indigo-300',
  },
  {
    name: 'Bootstrap',
    icon: Pencil,
    category: 'Development',
    gradient: 'from-amber-300 to-orange-300',
  },
  {
    name: 'InVision',
    icon: Layers,
    category: 'Prototyping',
    gradient: 'from-teal-300 to-emerald-300',
  },
];

export function Tools() {
  return (
    <section id="tools" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 bg-[length:200%_100%]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12 sm:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tools & Technologies</h2>
            <Wrench className="text-purple-400" size={28} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group w-full"
            >
              <div className={`bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 h-full transition-all shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-purple-100`}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center`}
                >
                  <tool.icon size={24} className="text-white sm:size-8" />
                </motion.div>
                <div className="text-center">
                  <p className="text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all text-sm sm:text-base">
                    {tool.name}
                  </p>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                    {tool.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}