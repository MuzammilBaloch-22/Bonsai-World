import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import chokkan from '@/assets/Chokkan.png';
import kengai from '@/assets/Kengai.png';
import moyogi from '@/assets/Moyogi.png';
import sokan from '@/assets/soken.png';
import fukinagashi from '@/assets/styles/fukinagashi.jpg';
import yoseue from '@/assets/styles/yose-ue.jpg';

const BonsaiStyles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const styles = [
    {
      name: 'Chokkan',
      subtitle: 'Formal Upright',
      description: 'A perfectly straight trunk symbolizing strength and dignity. The apex sits directly above the base.',
      image: chokkan,
    },
    {
      name: 'Moyogi',
      subtitle: 'Informal Upright',
      description: 'A curved trunk that still reaches skyward. Natural movement with balanced asymmetry.',
      image: moyogi,
    },
    {
      name: 'Kengai',
      subtitle: 'Cascade',
      description: 'Dramatic trunk cascading below the pot, mimicking trees growing on cliffsides.',
      image: kengai,
    },
    {
      name: 'Fukinagashi',
      subtitle: 'Windswept',
      description: 'All branches swept to one side, capturing the essence of trees shaped by constant wind.',
      image: fukinagashi,
    },
    {
      name: 'Sokan',
      subtitle: 'Twin Trunk',
      description: 'Two trunks from one root system, representing harmony and natural partnership.',
      image: sokan,
    },
    {
      name: 'Yose-ue',
      subtitle: 'Forest Style',
      description: 'Multiple trees creating a miniature forest landscape. A complete ecosystem in a pot.',
      image: yoseue,
    },
  ];

  return (
    <section ref={ref} id="styles" className="section-padding">
      <div className="container-zen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-zen mb-4 inline-block">Japanese Art Forms</span>
          <h2 className="heading-section text-foreground mb-4">
            Traditional Bonsai Styles
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Each style tells a story of nature's resilience. Master stylists shape trees 
            to capture moments from the natural world.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={style.image}
                alt={`${style.name} bonsai style`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-secondary text-sm font-medium mb-1">{style.subtitle}</p>
                <h3 className="font-serif text-2xl font-semibold text-background mb-2">
                  {style.name}
                </h3>
                <p className="text-background/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {style.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonsaiStyles;
