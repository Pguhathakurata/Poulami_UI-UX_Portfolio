import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ end, duration = 2, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = 1;
    const totalSteps = end;
    const stepDuration = (duration * 1000) / totalSteps;

    let currentCount = 0;
    
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <motion.div
      className={className}
    >
      {count}{suffix}
    </motion.div>
  );
}