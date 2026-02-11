import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative py-2 flex items-center justify-center">
      <motion.div
        className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
      />
    </div>
  );
};

export default SectionDivider;
