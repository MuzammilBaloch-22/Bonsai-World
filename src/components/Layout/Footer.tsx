import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'Indoor Bonsai', href: '#catalog' },
      { label: 'Outdoor Bonsai', href: '#catalog' },
      { label: 'Flowering Bonsai', href: '#catalog' },
      { label: 'Premium Collection', href: '#catalog' },
    ],
    learn: [
      { label: 'Care Guide', href: '#care' },
      { label: 'Bonsai Styles', href: '#styles' },
      { label: 'Articles', href: '#articles' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Delivery', href: '#delivery' },
      { label: 'Privacy Policy', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a2e1a] text-white/90">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <Leaf className="w-8 h-8 text-emerald-400 transition-transform group-hover:rotate-12" />
              <span className="font-serif text-3xl font-bold tracking-tight text-white">Bonsai World</span>
            </a>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Bringing the ancient art of bonsai to modern homes. Our mission is to provide 
              sustainable, beautiful trees built to last for generations.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="p-2.5 bg-white/5 hover:bg-emerald-500 hover:text-white rounded-full transition-all duration-300 border border-white/10"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl font-medium text-white mb-6">Explore</h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/50 hover:text-emerald-400 transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 transition-all group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl font-medium text-white mb-6">Learning</h4>
              <ul className="space-y-4">
                {footerLinks.learn.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/50 hover:text-emerald-400 transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 transition-all group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-xl font-medium text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/50 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:text-emerald-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hello@bonsaiworld.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/50 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:text-emerald-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-4 text-white/50 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:text-emerald-400 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-snug">123 Bonsai Lane, Garden City, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-white/40">
              © {currentYear} Bonsai World. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-white/40 italic">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the art of bonsai
            </p>
          </div>

          {/* Developer Credit */}
          <div className="py-2 px-4 rounded-full bg-white/5 border border-white/10">
            <p className="text-white/60">
              Designed & Developed by{" "}
              <span className="text-emerald-400 font-semibold tracking-wide hover:underline cursor-pointer">
                Muzammil Ahmed
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;