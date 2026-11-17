import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.avif';

const technologies = ['Python', 'Machine Learning', 'GenAI', 'LLMs', 'RAG', 'Computer Vision', 'Backend Engineering'];

const PortfolioHero = () => (
  <section id="home" className="hero-panel relative flex min-h-[48rem] items-center overflow-hidden lg:min-h-[51rem]">
    <div className="hero-copy">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.62fr] lg:gap-20">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow hero-kicker">AI · Machine Learning · Software</p>
          <h1 className="hero-title">
            Samson Dandin<span className="hero-title-accent">.</span>
          </h1>
          <p className="mt-5 text-xl font-medium sm:text-2xl">Aspiring AI Engineer &amp; Software Developer</p>
          <p className="hero-subtitle mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            Building intelligent applications, machine learning systems and scalable software solutions.
          </p>
          <p className="hero-subtitle mt-3 max-w-2xl text-sm leading-6">
            An Artificial Intelligence and Machine Learning graduate passionate about practical AI products and reliable software—from computer vision and language models to enterprise backend engineering.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Technical focus">
            {technologies.map((technology) => (
              <span key={technology} className="border border-white/20 px-2.5 py-1.5 text-xs text-white/80">
                {technology}
              </span>
            ))}
          </div>

          <p className="hero-meta mono mt-6 text-[11px] leading-5">
            Open to full-time opportunities <span aria-hidden="true">·</span> Open to paid internships
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-none px-5">
              <a href="#projects">Explore my work <ArrowRight size={17} className="ml-2" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-none border-white/35 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white">
              <a href="/samson-dandin-resume.pdf" download="Samson_Dandin_Resume.pdf">Download résumé <ArrowDown size={16} className="ml-2" /></a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <a className="quiet-link text-white/80 hover:text-white" href="https://github.com/samsondandin" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="quiet-link text-white/80 hover:text-white" href="https://linkedin.com/in/samson-dandin" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="quiet-link text-white/80 hover:text-white" href="mailto:samsondandin335@gmail.com">
              <Mail size={16} /> Email
            </a>
            <span className="inline-divider hidden sm:block" />
            <span className="hero-meta flex items-center gap-2 text-xs"><MapPin size={14} /> Dharwad, Karnataka, India</span>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <figure className="hero-photo-frame">
            <img src={profileImage} alt="Samson Dandin" width={640} height={800} fetchPriority="high" />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
              <span className="mono block text-[10px] uppercase text-white/65">Currently building</span>
              <span className="mt-1 block text-sm font-medium text-white">AI/ML systems at Karpine Technologies</span>
            </figcaption>
          </figure>
          <p className="hero-meta mono mt-3 text-right text-[10px] uppercase">Dharwad · Bengaluru</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PortfolioHero;