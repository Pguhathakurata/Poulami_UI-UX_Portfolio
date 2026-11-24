import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ut Thuong',
    role: 'Designer',
    content: 'This project is a brilliant showcase of creativity and attention to detail. Every element feels intentional and beautifully executed.',
    rating: 5,
    gradient: 'from-purple-400 to-pink-400',
    project: 'Speaking Rose Project'
  },
  {
    id: 2,
    name: 'Daniel W.',
    role: 'Client',
    content: 'Working with Poulami is incredible they are passionate and creative the perfect combination.',
    rating: 5,
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    id: 3,
    name: 'Siva N.',
    role: 'Client',
    content: 'Poulami was very professional and completed all the tasks much ahead of time. Her work was top quality. She understood all the requirements very well and delivered more than expected. We are extremely happy with her work and will try to engage her for future projects.',
    rating: 5,
    gradient: 'from-green-400 to-emerald-400',
  },
  {
    id: 4,
    name: 'Khizer M.',
    role: 'Client',
    content: 'Exemplary work! Poulami G. demonstrated exceptional creativity and skill in their design work. Their attention to detail and ability to bring our vision to life was truly impressive. A true professional who consistently delivered beyond our expectations. Highly recommended for top-notch design services.',
    rating: 5,
    gradient: 'from-orange-400 to-yellow-400',
  },
];

export function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Create multiple copies for truly seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  // Continuous infinite scroll animation
  useEffect(() => {
    if (!isPaused) {
      const cardWidth = 370; // 350px card + 20px gap
      const totalWidth = testimonials.length * cardWidth;

      const animate = () => {
        setScrollPosition((prev) => {
          // Reset to start when we've scrolled one full set
          if (Math.abs(prev) >= totalWidth) {
            return 0;
          }
          // Smooth continuous scroll
          return prev - 0.5;
        });
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Recent Appreciations</h2>
            <Quote className="text-purple-400" size={28} />
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">What clients and collaborators say about working with me</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mx-6 md:mx-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Infinite horizontal slider */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-5"
              style={{
                transform: `translateX(${scrollPosition}px)`,
                transition: 'none',
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: '350px' }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Fade edges for infinite effect */}
            <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white via-blue-50/20 to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white via-blue-50/20 to-transparent pointer-events-none z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg transition-all relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      style={{
        transformOrigin: 'center center',
      }}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`}></div>
      
      {/* Quote icon */}
      <div className="mb-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
          <Quote className="text-white" size={20} />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
        ))}
      </div>

      {/* Content */}
      <p className="text-neutral-700 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>

      {/* Author */}
      <div>
        <div className="font-semibold text-neutral-900">{testimonial.name}</div>
        <div className="text-xs text-neutral-500">{testimonial.role}</div>
      </div>

      {/* Decorative element */}
      <div
        className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity`}
      />
    </motion.div>
  );
}
