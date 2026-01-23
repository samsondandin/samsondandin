import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send, Download, Loader2, Github, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { sanitizeInput, checkRateLimit, validateFormData, logSecurityEvent } from '@/utils/security';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextScramble from '@/components/ui/TextScramble';
import MagneticButton from '@/components/ui/MagneticButton';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "samsondandin335@gmail.com", href: "mailto:samsondandin335@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7619687402", href: "tel:+917619687402" },
    { icon: MapPin, label: "Location", value: "Dharwad, Karnataka, India", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "samson-dandin", href: "https://linkedin.com/in/samson-dandin" },
    { icon: Github, label: "GitHub", value: "samsondandin", href: "https://github.com/samsondandin" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      toast({ title: "Validation Error", description: validation.errors.join(', '), variant: "destructive" });
      return;
    }

    const userIdentifier = formData.email;
    if (!checkRateLimit(userIdentifier)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { email: formData.email });
      toast({ title: "Too Many Requests", description: "Please wait before sending another message.", variant: "destructive" });
      return;
    }

    const emailjsConfig = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'WuPvADPuLyGsBVcX2',
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1fjqgah',
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_2t6q3xe'
    };

    setIsLoading(true);

    try {
      emailjs.init(emailjsConfig.publicKey);
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject) || 'New Contact Form Message',
        message: sanitizeInput(formData.message),
        to_email: 'samsondandin335@gmail.com'
      });

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
      logSecurityEvent('EMAIL_SENT', { fromEmail: formData.email, timestamp: new Date().toISOString() });
    } catch (error) {
      console.error('EmailJS Error:', error);
      logSecurityEvent('EMAIL_SEND_FAILED', { error: error instanceof Error ? error.message : 'Unknown error', fromEmail: formData.email });
      toast({ title: "Failed to Send", description: "Please try again or contact me directly.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/samson-dandin-resume.pdf';
      link.download = 'Samson_Dandin_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({ title: "Resume Downloaded!", description: "Thank you for downloading my resume." });
    } catch (error) {
      toast({ title: "Download Failed", description: "Please try again.", variant: "destructive" });
    }
  };

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full spotlight-glass text-sm text-primary font-mono-label mb-6">
            <MessageCircle size={14} />
            Get In Touch
          </span>
          <h2 className="hero-title text-5xl md:text-7xl mb-6">
            <TextScramble delay={200}>Let's</TextScramble>{' '}
            <span className="gradient-text">
              <TextScramble delay={400}>Connect</TextScramble>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Contact Information</h3>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl spotlight-glass group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono-label">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined} 
                           rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                           className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 text-center">
              <h3 className="font-semibold mb-4 font-display">Download My Resume</h3>
              <MagneticButton className="w-full">
                <Button onClick={handleDownloadResume} className="w-full btn-primary">
                  <Download size={18} className="mr-2" />
                  Download PDF Resume
                </Button>
              </MagneticButton>
            </SpotlightCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Send a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-mono-label">Full Name *</label>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Your name" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-mono-label">Email *</label>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="your@email.com" 
                      required
                      className="bg-background/50 border-border/50 focus:border-primary" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-mono-label">Subject</label>
                  <Input 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                    placeholder="What's this about?"
                    className="bg-background/50 border-border/50 focus:border-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-mono-label">Message *</label>
                  <Textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Your message..." 
                    rows={5} 
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none" 
                  />
                </div>
                
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="w-full py-3 px-6 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center gap-2 text-primary font-semibold"
                    >
                      <CheckCircle size={20} />
                      Message Sent Successfully!
                      <Sparkles size={16} />
                    </motion.div>
                  ) : (
                    <motion.div key="button" exit={{ opacity: 0 }}>
                      <MagneticButton className="w-full">
                        <Button type="submit" disabled={isLoading} className="w-full btn-primary">
                          {isLoading ? (
                            <>
                              <Loader2 size={18} className="mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </MagneticButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <SpotlightCard className="p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-display">Ready to Innovate Together?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for an AI/ML developer or want to discuss the latest in AI, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button onClick={() => window.open('mailto:samsondandin335@gmail.com', '_blank')} className="btn-primary">
                  <Mail size={18} className="mr-2" />
                  Email Me Directly
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button onClick={() => window.open('https://linkedin.com/in/samson-dandin', '_blank')} variant="outline" className="btn-outline">
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </MagneticButton>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
