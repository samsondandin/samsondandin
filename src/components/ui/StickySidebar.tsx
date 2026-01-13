import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const StickySidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="ml-8 p-6 backdrop-blur-xl bg-card/30 border border-border/20 rounded-2xl shadow-2xl max-w-[200px]">
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
            <GraduationCap size={18} className="text-primary-foreground" />
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Education</p>
            <h3 className="text-sm font-bold">B.E. in AI/ML</h3>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar size={12} className="text-primary" />
            <span>2022 - 2026</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={12} className="text-primary" />
            <span>India</span>
          </div>
          
          <div className="h-px bg-gradient-to-r from-primary/50 via-accent/50 to-transparent" />
          
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Key Metrics</p>
            <div className="grid grid-cols-1 gap-2">
              <motion.div 
                className="text-center p-2 rounded-lg bg-primary/5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-bold gradient-text code-font">78%</span>
                <p className="text-[10px] text-muted-foreground">Content Reduction</p>
              </motion.div>
              <motion.div 
                className="text-center p-2 rounded-lg bg-accent/5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-lg font-bold gradient-text code-font">22%</span>
                <p className="text-[10px] text-muted-foreground">Error Reduction</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default StickySidebar;
