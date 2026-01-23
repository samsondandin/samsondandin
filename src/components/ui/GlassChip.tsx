import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassChipProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'gold';
}

const GlassChip = ({ children, className = '', variant = 'default' }: GlassChipProps) => {
  const variantStyles = {
    default: 'bg-white/5 border-white/10 text-foreground/80',
    primary: 'bg-primary/10 border-primary/20 text-primary',
    gold: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest backdrop-blur-sm border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default GlassChip;
