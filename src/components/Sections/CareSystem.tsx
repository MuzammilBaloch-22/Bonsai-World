import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, FlaskConical, Layers, Sun, ThermometerSun, Scissors } from 'lucide-react';

const CareSystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const careSteps = [
    {
      icon: Droplets,
      title: 'The Goldilocks Watering',
      description: 'Not too wet, not too dry – just right. Check soil moisture daily. Water when the top inch feels dry.',
      detail: 'Maples need consistent moisture. Jades prefer to dry out between waterings. Know your tree.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: FlaskConical,
      title: 'Balanced Nutrition',
      description: 'Use a balanced 3-3-3 fertilizer during the growing season (spring to fall).',
      detail: 'Feed every 2-4 weeks. Reduce in winter. Organic options like fish emulsion work great.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Layers,
      title: 'Proper Soil Mix',
      description: 'Bonsai soil is special: Akadama, Pumice, and Lava rock in equal parts.',
      detail: 'This mix drains well while retaining nutrients. Repot every 2-3 years to refresh soil.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Sun,
      title: 'Light Requirements',
      description: 'Most bonsai need 5-6 hours of direct sunlight. Indoor trees need bright, indirect light.',
      detail: 'Rotate your tree quarterly for even growth. Supplement with grow lights if needed.',
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: ThermometerSun,
      title: 'Seasonal Care',
      description: 'Spring: vigorous growth. Summer: protection from heat. Fall: color change. Winter: dormancy.',
      detail: 'Outdoor trees need winter protection. Indoor trees benefit from humidity trays.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Scissors,
      title: 'Pruning & Shaping',
      description: 'Regular pinching maintains shape. Structural pruning in late winter when dormant.',
      detail: 'Use sharp, clean tools. Seal large cuts with cut paste. Less is more when starting out.',
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  return (
    <section ref={ref} id="care" className="section-padding bg-muted">
      <div className="container-zen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-zen mb-4 inline-block">Care Guide</span>
          <h2 className="heading-section text-foreground mb-4">
            The Goldilocks Care System
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Our proven system makes bonsai care intuitive. Follow these principles 
            and your tree will thrive for generations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                <step.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {step.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary/80">
                  💡 {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-primary rounded-2xl p-8 text-center"
        >
          <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
            Every Purchase Includes a Care Guide
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Don't worry about memorizing everything. Each bonsai comes with a species-specific 
            care card and access to our online care library with seasonal reminders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareSystem;
