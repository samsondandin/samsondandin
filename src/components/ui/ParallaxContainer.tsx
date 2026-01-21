import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: 'vertical' | 'horizontal';
}

const ParallaxContainer = ({ 
  children, 
  className = '', 
  speed = -0.2,
  direction = 'vertical'
}: ParallaxContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const x = useTransform(scrollYProgress, [0, 1], [speed * 50, -speed * 50]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={direction === 'vertical' ? { y } : { x }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
