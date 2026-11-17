import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Trophy } from 'lucide-react';

const certifications = [
  { name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'Cloud Technologies', issuer: 'Infosys Springboard', year: '2025' },
  { name: 'Explore Machine Learning using Python', issuer: 'Infosys Springboard', year: '2024' },
  { name: 'Programming using Java', issuer: 'Infosys Springboard', year: '2024' },
];

const Education = () => (
  <section id="education" className="section-shell">
    <div className="content-width">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow"><span>05</span> Education & recognition</p>
        <h2>Strong foundations.<br /><span className="accent-ink">Curiosity in practice.</span></h2>
      </motion.div>

      <div className="education-layout">
        <motion.article
          className="education-degree"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="section-icon"><BookOpen size={19} /></div>
          <p className="eyebrow">Bachelor of Engineering · 2022—2026</p>
          <h3>Artificial Intelligence<br />and Machine Learning</h3>
          <p className="education-institution">SDM College of Engineering and Technology</p>
          <p className="education-place">Dharwad, Karnataka, India</p>
        </motion.article>

        <div className="credentials-column">
          <div className="subsection-title">
            <Award size={17} aria-hidden="true" />
            <h3>Certifications</h3>
          </div>
          <ul className="credential-list">
            {certifications.map((certification, index) => (
              <motion.li
                key={certification.name}
                className="credential-row"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <div>
                  <h4>{certification.name}</h4>
                  <p>{certification.issuer}</p>
                </div>
                <span className="credential-year">{certification.year}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recognition-grid">
        <article className="recognition-block">
          <div className="subsection-title">
            <Trophy size={17} aria-hidden="true" />
            <h3>Street-play competitions</h3>
          </div>
          <p>1st place · Semester 3</p>
          <p>2nd place · Semesters 2 and 5</p>
        </article>
        <article className="recognition-block community-block">
          <div className="subsection-title">
            <Heart size={17} aria-hidden="true" />
            <h3>Community involvement</h3>
          </div>
          <p>Reached 300+ people through 3+ health drives with Dandin Trust and Indian Cancer Society.</p>
          <div className="initiative-list">
            <span>Blood donation</span>
            <span>Tobacco awareness</span>
            <span>Cancer awareness</span>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Education;