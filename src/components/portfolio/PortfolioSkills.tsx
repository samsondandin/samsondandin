import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, Languages, Workflow } from 'lucide-react';

const skillGroups = [
  {
    icon: BrainCircuit,
    title: 'Artificial intelligence',
    skills: ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG', 'NLP', 'Transformers', 'CNNs', 'Computer Vision', 'Object Detection', 'Time-Series Forecasting', 'AI Agents'],
  },
  {
    icon: Workflow,
    title: 'Frameworks & ML',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Hugging Face', 'Scikit-learn', 'MediaPipe', 'ML.NET', 'Pandas', 'NumPy'],
  },
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'C#', 'SQL', 'TypeScript', 'Java', 'C'],
  },
  {
    icon: Database,
    title: 'Backend & development',
    skills: ['FastAPI', 'Flask', '.NET', 'ABP Framework', 'REST APIs', 'React', 'Remix', 'Blazor', 'Tailwind CSS'],
  },
  {
    icon: Languages,
    title: 'Tools & platforms',
    skills: ['Docker', 'Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Streamlit', 'Cloudinary', 'Vercel', 'CI/CD'],
  },
];

const PortfolioSkills = () => (
  <section id="skills" className="section-shell section-rule">
    <div className="content-width">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow"><span>04</span> Technical toolkit</p>
        <h2>Tools for the<br /><span className="accent-ink">whole system.</span></h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">A practical mix of AI, programming and product engineering technologies used across my projects and current role.</p>
      </motion.div>

      <div className="skill-groups">
        {skillGroups.map(({ icon: Icon, title, skills }, index) => (
          <motion.article
            className="skill-group"
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="skill-group-heading"><Icon size={18} /><h3>{title}</h3></div>
            <div className="skill-group-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSkills;