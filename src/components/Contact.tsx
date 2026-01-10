import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send, Download, Loader2, Github, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { sanitizeInput, checkRateLimit, validateFormData, logSecurityEvent } from '@/utils/security';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
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

      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
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
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="gradient-orb w-[500px] h-[500px] bg-primary/10 top-0 left-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary">
            <MessageCircle size={14} className="mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 display-font">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
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
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Download My Resume</h3>
                <Button onClick={handleDownloadResume} className="w-full btn-primary">
                  <Download size={18} className="mr-2" />
                  Download PDF Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Send size={18} className="text-primary-foreground" />
                  </div>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required 
                             className="bg-secondary/30 border-border/50 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required
                             className="bg-secondary/30 border-border/50 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?"
                           className="bg-secondary/30 border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows={5} required
                              className="bg-secondary/30 border-border/50 focus:border-primary resize-none" />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full btn-primary">
                    {isLoading ? <Loader2 size={18} className="mr-2 animate-spin" /> : <Send size={18} className="mr-2" />}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="glass-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 display-font">Ready to Innovate Together?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for an AI/ML developer or want to discuss the latest in AI, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.open('mailto:samsondandin335@gmail.com', '_blank')} className="btn-primary">
                  <Mail size={18} className="mr-2" />
                  Email Me Directly
                </Button>
                <Button onClick={() => window.open('https://linkedin.com/in/samson-dandin', '_blank')} variant="outline" className="btn-outline">
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;