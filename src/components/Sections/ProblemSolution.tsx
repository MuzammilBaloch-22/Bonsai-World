import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { XCircle, CheckCircle, Droplets, Home, Sparkles, GraduationCap } from 'lucide-react';

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    { icon: Droplets, text: "Plants die easily with irregular watering" },
    { icon: Home, text: "No space for traditional gardens in apartments" },
    { icon: Sparkles, text: "Fake cheap bonsai that look artificial" },
    { icon: GraduationCap, text: "No knowledge on proper plant care" },
  ];

  const solutions = [
    { icon: Droplets, text: "Goldilocks care system – just right watering" },
    { icon: Home, text: "Compact root-trained trees for any space" },
    { icon: Sparkles, text: "Professionally styled authentic bonsai" },
    { icon: GraduationCap, text: "Built-in education with every purchase" },
  ];

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className="container-zen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-foreground mb-4">
            The Bonsai Difference
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Common plant problems, solved through the ancient wisdom of bonsai cultivation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="heading-subsection text-foreground">Common Problems</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-muted rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="heading-subsection text-primary-foreground">Our Solutions</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-primary-foreground/10 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
