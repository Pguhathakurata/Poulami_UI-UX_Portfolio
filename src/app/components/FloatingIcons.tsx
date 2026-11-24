import { motion } from 'motion/react';
import { Figma, Code2, Palette, Layout, Image, FileCode } from 'lucide-react';

const floatingTools = [
  { icon: Figma, color: 'from-purple-300 to-pink-300', position: { top: '0%', left: '-6%' }, delay: 0 },
  { icon: Layout, color: 'from-blue-300 to-cyan-300', position: { top: '20%', right: '-25%' }, delay: 0.2 },
  { icon: Palette, color: 'from-pink-300 to-rose-300', position: { bottom: '0%', left: '-18%' }, delay: 0.4 },
  { icon: Code2, color: 'from-green-300 to-emerald-300', position: { bottom: '0%', right: '-28%' }, delay: 0.6 },
  { icon: Image, color: 'from-orange-300 to-yellow-300', position: { top: '35%', left: '-25%' }, delay: 0.8 },
  { icon: FileCode, color: 'from-indigo-300 to-purple-300', position: { top: '55%', right: '-18%' }, delay: 1 },
];

export function FloatingIcons() {
  return (
    <>
      {floatingTools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: tool.delay },
            scale: { duration: 0.6, delay: tool.delay },
            y: {
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tool.delay
            }
          }}
          className="absolute"
          style={tool.position}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-xl cursor-pointer`}
          >
            <tool.icon size={28} className="text-white" />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}