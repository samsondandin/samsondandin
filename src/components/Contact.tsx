import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send, Download, Loader2, Github } from 'lucide-react';
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
    {
      icon: Mail,
      label: "Email",
      value: "samsondandin335@gmail.com",
      href: "mailto:samsondandin335@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7619687402",
      href: "tel:+917619687402",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dharwad, Karnataka, India",
      href: null,
      color: "text-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/samson-dandin",
      href: "https://linkedin.com/in/samson-dandin",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/samsondandin",
      href: "https://github.com/samsondandin",
      color: "text-gray-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Sanitize input to prevent XSS
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Comprehensive validation
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      toast({
        title: "Validation Error",
        description: validation.errors.join(', '),
        variant: "destructive"
      });
      return;
    }

    // Rate limiting check
    const userIdentifier = formData.email; // Using email as identifier
    if (!checkRateLimit(userIdentifier)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { email: formData.email });
      toast({
        title: "Too Many Requests",
        description: "Please wait before sending another message. Maximum 3 messages per hour.",
        variant: "destructive"
      });
      return;
    }

    // Check for environment variables
    const emailjsConfig = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'WuPvADPuLyGsBVcX2',
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1fjqgah',
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_2t6q3xe'
    };

    setIsLoading(true);

    try {
      // Initialize EmailJS with environment variable or fallback
      emailjs.init(emailjsConfig.publicKey);

      // Send email using EmailJS with sanitized data
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: sanitizeInput(formData.name),
          from_email: sanitizeInput(formData.email),
          subject: sanitizeInput(formData.subject) || 'New Contact Form Message',
          message: sanitizeInput(formData.message),
          to_email: 'samsondandin335@gmail.com'
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Log successful submission
      logSecurityEvent('EMAIL_SENT', { 
        fromEmail: formData.email,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      logSecurityEvent('EMAIL_SEND_FAILED', { 
        error: error instanceof Error ? error.message : 'Unknown error',
        fromEmail: formData.email
      });
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDirectEmail = () => {
    window.open('mailto:samsondandin335@gmail.com?subject=Let\'s Connect&body=Hi Samson,', '_blank');
  };

  const handleLinkedInConnect = () => {
    window.open('https://linkedin.com/in/samson-dandin', '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    try {
      // Create a temporary link to download resume
      const link = document.createElement('a');
      link.href = '/samson-dandin-resume.pdf';
      link.download = 'Samson_Dandin_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Resume Downloaded Successfully!",
        description: "Thank you for downloading my resume. I look forward to hearing from you!",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again or contact me directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="section-spacing px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-bg opacity-20"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 neon-border">
            <Mail size={14} className="mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Let's <span className="accent-gradient bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to collaborate on exciting AI/ML projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="card-gradient border-border shadow-elegant mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail size={24} className="mr-3 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover-glow transition-smooth">
                    <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center`}>
                      <info.icon size={20} className={info.color} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="font-medium hover:text-primary transition-smooth"
                          target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                          rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        >
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

            {/* Download Resume */}
            <Card className="card-gradient border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">Download My Resume</h3>
                <Button onClick={handleDownloadResume} className="accent-gradient hover:shadow-glow w-full">
                  <Download size={18} className="mr-2" />
                  Download PDF Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            <Card className="glass-morphism shadow-elegant relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                    <Send size={20} className="text-white" />
                  </div>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full accent-gradient hover:shadow-glow">
                    {isLoading ? (
                      <Loader2 size={18} className="mr-2 animate-spin" />
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-gradient border-border shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Innovate Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for a passionate AI/ML developer, need help with a project, 
                or want to discuss the latest in artificial intelligence, I'm here to help make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleDirectEmail} size="lg" className="accent-gradient hover:shadow-glow">
                  <Mail size={18} className="mr-2" />
                  Email Me Directly
                </Button>
                <Button onClick={handleLinkedInConnect} variant="outline" size="lg" className="hover-glow">
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