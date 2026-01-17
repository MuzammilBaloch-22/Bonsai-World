import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const PrimaryCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-forest-light opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-zen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-display text-primary-foreground mb-6">
            Start Your Bonsai Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered the art of bonsai. 
            Your perfect tree is waiting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('#catalog')}
              className="group bg-background text-primary px-8 py-4 rounded-md font-medium 
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                         flex items-center gap-2"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md font-medium
                         transition-all duration-300 hover:bg-primary-foreground hover:text-primary
                         flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70"
          >
            <span>✓ Free Shipping Over $100</span>
            <span>✓ 30-Day Satisfaction Guarantee</span>
            <span>✓ Expert Care Support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrimaryCTA;
