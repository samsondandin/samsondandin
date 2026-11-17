import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const PortfolioNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-24% 0px -62% 0px', threshold: [0, 0.15, 0.4] },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', updateHeader);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="content-width flex h-[4.5rem] items-center justify-between gap-4" aria-label="Main navigation">
        <a href="#home" className="flex shrink-0 items-center gap-3" onClick={closeMenu} aria-label="Samson Dandin, home">
          <img src="/favicon.jpg" alt="" width={34} height={34} className="h-[34px] w-[34px] object-cover" />
          <span className="hidden text-sm font-semibold sm:inline">Samson Dandin</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className={`px-3 py-2 text-xs font-medium transition-colors ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-none sm:inline-flex">
            <a href="/samson-dandin-resume.pdf" download="Samson_Dandin_Resume.pdf">
              Resume <ArrowUpRight size={15} className="ml-1" />
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-none xl:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-border bg-background xl:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
          >
            <div className="content-width grid grid-cols-2 gap-x-5 py-3 sm:grid-cols-3">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  className={`border-b border-border py-3 text-sm ${activeSection === item.id ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/samson-dandin-resume.pdf"
                download="Samson_Dandin_Resume.pdf"
                onClick={closeMenu}
                className="border-b border-border py-3 text-sm font-medium text-primary"
              >
                Download résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PortfolioNavigation;