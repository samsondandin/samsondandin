import { useState } from 'react';
import { motion } from 'framer-motion';

interface ChromaticTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const ChromaticText = ({ children, className = '', intensity = 3 }: ChromaticTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Red channel */}
      <motion.span
        className="absolute inset-0 text-red-500/60 mix-blend-screen pointer-events-none select-none"
        aria-hidden
        animate={{
          x: isHovered ? -intensity : 0,
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Blue channel */}
      <motion.span
        className="absolute inset-0 text-cyan-400/60 mix-blend-screen pointer-events-none select-none"
        aria-hidden
        animate={{
          x: isHovered ? intensity : 0,
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Main text */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
};

export default ChromaticText;
