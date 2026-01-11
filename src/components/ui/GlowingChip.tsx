import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingChipProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
  tag?: string;
}

const GlowingChip = ({ children, className = '', highlight = false, tag }: GlowingChipProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-default
        bg-secondary/50 border border-border/50 backdrop-blur-sm
        hover:bg-primary/20 hover:border-primary/50 hover:text-primary
        transition-colors duration-300 ${highlight ? 'ring-2 ring-primary/50 bg-primary/10' : ''} ${className}`}
    >
      {children}
      {highlight && tag && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[9px] px-1.5 py-0.5 rounded-full font-medium">
          {tag}
        </span>
      )}
    </motion.div>
  );
};

export default GlowingChip;
