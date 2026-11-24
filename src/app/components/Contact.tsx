import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import behanceLogo from 'figma:asset/7b5f3ac2060e45fa16744de94a7a6a1402551d85.png';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-purple-100/40 via-pink-100/40 to-blue-100/40 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Let's Work Together</h2>
              <Send className="text-purple-400" size={28} />
            </div>
            <p className="text-neutral-700 max-w-2xl mx-auto text-lg">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <motion.a
              href="mailto:pguhathakurata123@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full transition-all hover:shadow-xl hover:shadow-purple-300/50"
            >
              <Mail size={20} />
              Get in touch
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/poulami-g', name: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/Pguhathakurata', name: 'GitHub' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white text-neutral-700 border-2 border-purple-200/30"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
            <motion.a
              href="https://www.behance.net/poulamiguhatha1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white text-neutral-700 border-2 border-purple-200/30"
            >
              <img src={behanceLogo} alt="Behance" className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-purple-200/30"
        >
          <p className="text-neutral-600">
            © 2026 Portfolio. Designed with care
          </p>
        </motion.div>
      </div>
    </section>
  );
}