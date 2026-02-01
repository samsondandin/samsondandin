import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

const TextReveal = ({ children, className = '', delay = 0, staggerChildren = 0.05 }: TextRevealProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // If children is a string, split it into characters
  if (typeof children === 'string') {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{ transformOrigin: 'center bottom' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
