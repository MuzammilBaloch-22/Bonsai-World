import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Star, ShieldCheck, Truck } from 'lucide-react';
import heroBonsai from '@/assets/hero-bonsai.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#fafaf9] overflow-hidden">
      
      {/* Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src={heroBonsai}
          alt="Bonsai Heritage"
          className="w-full h-full object-cover scale-105"
        />
        {/* Cinematic Gradient for Left-Aligned Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="flex flex-col items-start text-left max-w-3xl">
          
          {/* Label Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-primary"></span>
            <span className="text-primary font-semibold tracking-[0.25em] text-[10px] uppercase">
              The Botanical Legacy
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-[1.05] mb-6 tracking-tight"
          >
            Living Art for <br />
            <span className="italic font-light text-primary/80">Refined Spaces</span>
          </motion.h1>

          {/* Vocabulary-Rich Description */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
          >
            Curating a rare collection of ancient bonsai, where centuries of 
            tradition meet contemporary aesthetics. Elevate your sanctuary 
            with nature’s silent masterpieces.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => scrollToSection('#catalog')}
              className="px-8 py-3.5 bg-foreground text-background rounded-full font-medium flex items-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('#care')}
              className="px-8 py-3.5 border border-foreground/10 rounded-full font-medium flex items-center gap-3 hover:bg-white transition-all backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              The Art of Care
            </button>
          </motion.div>

          {/* Compact Trust Section - Ab ye screen se bahar nahi jayega */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-6 border-t border-foreground/5"
          >
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary">
                <Star className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[13px] font-bold text-foreground uppercase tracking-wider">Heritage</h4>
                <p className="text-[12px] text-muted-foreground leading-tight">25 years of Japanese horticultural mastery.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[13px] font-bold text-foreground uppercase tracking-wider">Curation</h4>
                <p className="text-[12px] text-muted-foreground leading-tight">Ethically sourced specimens of high pedigree.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[13px] font-bold text-foreground uppercase tracking-wider">Logistics</h4>
                <p className="text-[12px] text-muted-foreground leading-tight">Secure, climate-controlled global delivery.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Vertical Line Indicator */}
      <div className="absolute bottom-0 right-12 h-24 w-[1px] bg-gradient-to-t from-primary/50 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;