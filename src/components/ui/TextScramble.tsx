import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextScrambleProps {
  children: string;
  className?: string;
  delay?: number;
  scrambleOnHover?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const chars = 'X#_09$%@&*!ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const TextScramble = ({ 
  children, 
  className = '', 
  delay = 0, 
  scrambleOnHover = false,
  as: Component = 'span' 
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    const originalText = children;
    const length = originalText.length;
    let iteration = 0;
    const maxIterations = length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    }, 30);
  };

  useEffect(() => {
    if (isInView && !hasAnimated.current && !scrambleOnHover) {
      hasAnimated.current = true;
      const timeout = setTimeout(() => {
        scramble();
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, scrambleOnHover]);

  const MotionComponent = motion[Component] as any;

  return (
    <MotionComponent
      ref={ref}
      className={`${className} font-mono`}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {displayText}
    </MotionComponent>
  );
};

export default TextScramble;
