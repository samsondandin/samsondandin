import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Lightbulb, Repeat2 } from 'lucide-react';

const principles = [
  { icon: BrainCircuit, title: 'Applied AI development', text: 'Machine learning, language models and computer vision applied to practical products.' },
  { icon: Code2, title: 'Software engineering', text: 'Building across Python services, APIs and enterprise software systems.' },
  { icon: Lightbulb, title: 'Problem solving', text: 'Taking a clear problem from an idea through implementation and evaluation.' },
  { icon: Repeat2, title: 'Continuous learning', text: 'Exploring new tools and strengthening fundamentals through hands-on work.' },
];

const PortfolioAbout = () => (
  <section id="about" className="section-shell">
    <div className="content-width">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow"><span>01</span> Professional introduction</p>
        <h2>Engineering intelligence.<br /><span className="accent-ink">Building impact.</span></h2>
      </motion.div>

      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <p>
          I’m an Artificial Intelligence and Machine Learning graduate with hands-on experience developing intelligent applications and working with enterprise software systems.
        </p>
        <p className="mt-4">
          My interests include machine learning, deep learning, generative AI, NLP, computer vision and backend engineering. Through academic projects and my industry experience at Karpine Technologies, I’ve explored how software and AI systems are designed, built and integrated into practical applications.
        </p>
        <p className="mt-4">I enjoy solving engineering problems and turning ideas into working products.</p>
      </motion.div>

      <div className="about-principles">
        {principles.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            className="principle"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <Icon size={18} className="mb-4 text-primary" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioAbout;