import { motion } from 'framer-motion';
import { BriefcaseBusiness, MapPin } from 'lucide-react';

const responsibilities = [
  'Developing machine-learning workflows with ML.NET, from preprocessing and feature engineering to training, evaluation and inference.',
  'Integrating forecasting and regression capabilities into enterprise ABP Framework applications and exposing predictions through application services.',
  'Working across .NET backend architecture, Digital Product Passport infrastructure and decentralized digital twin integrations.',
  'Building and integrating REST APIs for data-driven enterprise applications.',
];

const technologies = ['.NET', 'C#', 'ML.NET', 'Python', 'ABP Framework', 'Blazor', 'REST APIs', 'Digital Product Passports', 'Digital Twins', 'Git'];

const PortfolioExperience = () => (
  <section id="experience" className="section-shell section-rule">
    <div className="content-width">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow"><span>02</span> Industry experience</p>
        <h2>From intelligent models<br />to <span className="accent-ink">working systems.</span></h2>
      </motion.div>

      <motion.article
        className="experience-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.45 }}
      >
        <div className="experience-card">
          <div className="experience-topline">
            <div>
              <div className="mb-3 flex items-center gap-2 text-primary"><BriefcaseBusiness size={17} /><span className="eyebrow">Current role</span></div>
              <h3 className="experience-title">AI/ML Intern</h3>
              <p className="experience-company">Karpine Technologies</p>
            </div>
            <div className="sm:text-right">
              <p className="experience-dates">MAR 2026 — PRESENT</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin size={13} /> Bangalore, India</p>
            </div>
          </div>

          <p className="experience-description">
            Building Digital Product Passport infrastructure with .NET backend architecture and decentralized digital twin systems, alongside machine-learning workflows for enterprise applications.
          </p>

          <ul className="experience-list">
            {responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
          </ul>

          <div className="tech-list" aria-label="Technologies used">
            {technologies.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
          </div>
        </div>
      </motion.article>
    </div>
  </section>
);

export default PortfolioExperience;