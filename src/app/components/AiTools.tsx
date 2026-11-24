import { motion } from 'motion/react';
import { Bot, Zap, Eye, MessageSquare } from 'lucide-react';

const aiTools = [
  {
    name: 'ChatGPT',
    icon: MessageSquare,
    gradient: 'from-emerald-400 to-teal-400',
    bgGradient: 'from-emerald-50 to-teal-50',
    accentColor: 'text-emerald-600',
    how: 'My go-to for UX copywriting, research synthesis, and accessibility check-lists. It condenses user interview notes into actionable insights and drafts microcopy iterations on demand.',
  },
  {
    name: 'Claude Design',
    icon: Bot,
    gradient: 'from-orange-400 to-amber-400',
    bgGradient: 'from-orange-50 to-amber-50',
    accentColor: 'text-orange-500',
    how: 'Helps me think through design system decisions, critique interaction patterns, and generate structured design documentation — acting as a senior design collaborator available around the clock.',
  },
  {
    name: 'Visily AI',
    icon: Eye,
    gradient: 'from-pink-400 to-rose-400',
    bgGradient: 'from-pink-50 to-rose-50',
    accentColor: 'text-pink-500',
    how: 'Converts sketches and screenshots into editable wireframes instantly. Perfect for turning rough whiteboard sessions into structured prototypes that the whole team can iterate on.',
  },
];

export function AiTools() {
  return (
    <section id="ai-tools" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-fuchsia-50/30" />

      {/* Floating accent orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sneakpeak into a few of my AI design partners
            </h2>
            <Zap className="text-pink-400" size={28} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto" />
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Leveraging cutting-edge AI tools to design faster, think deeper, and collaborate smarter
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-transparent hover:border-purple-100 transition-all relative overflow-hidden">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient} rounded-t-2xl`} />

                {/* Subtle bg tint on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.bgGradient} opacity-0 group-hover:opacity-40 transition-opacity rounded-2xl`} />

                <div className="relative z-10 space-y-4">
                  {/* Icon + name row */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <tool.icon size={22} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className={`font-semibold text-neutral-900 group-hover:${tool.accentColor} transition-colors text-base`}>
                        {tool.name}
                      </h3>
                      <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">AI Tool</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${tool.gradient} opacity-20`} />

                  {/* How it helps */}
                  <p className="text-neutral-600 text-sm leading-relaxed">{tool.how}</p>

                  {/* Bottom badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${tool.gradient} bg-opacity-10 text-xs font-medium`}
                       style={{ background: 'transparent' }}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient}`} />
                    <span className={tool.accentColor}>Workflow boost</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
