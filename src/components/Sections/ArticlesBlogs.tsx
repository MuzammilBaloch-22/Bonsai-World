import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const ArticlesBlogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      title: 'What Is Bonsai and Why It Lives Longer Than Wild Trees',
      excerpt: 'Discover the science behind how proper care and root pruning can extend a tree\'s life far beyond its natural span in the wild.',
      readTime: '5 min read',
      category: 'Fundamentals',
    },
    {
      title: 'Beginner\'s Guide to Indoor Bonsai Care',
      excerpt: 'Everything you need to know about successfully growing bonsai indoors, from light requirements to humidity management.',
      readTime: '8 min read',
      category: 'Care Guide',
    },
    {
      title: 'Understanding Japanese Bonsai Styles',
      excerpt: 'A deep dive into the traditional forms that have defined bonsai for centuries, and what each style represents.',
      readTime: '6 min read',
      category: 'Styles',
    },
    {
      title: 'How to Avoid Fake Bonsai Plants',
      excerpt: 'Learn the telltale signs of mass-produced "bonsai" and how to find authentic, healthy specimens worth your investment.',
      readTime: '4 min read',
      category: 'Buying Guide',
    },
    {
      title: 'Bonsai for Apartments: The Perfect Urban Tree',
      excerpt: 'Living in a small space doesn\'t mean you can\'t enjoy bonsai. These species thrive in apartments and condos.',
      readTime: '7 min read',
      category: 'Urban Living',
    },
    {
      title: 'Top Bonsai Plants for Beginners',
      excerpt: 'Start your journey with these forgiving species that tolerate mistakes while you learn the art of bonsai.',
      readTime: '5 min read',
      category: 'Beginners',
    },
  ];

  return (
    <section ref={ref} id="articles" className="section-padding bg-muted">
      <div className="container-zen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-zen mb-4 inline-block">Learn & Grow</span>
          <h2 className="heading-section text-foreground mb-4">
            Articles & Resources
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Deepen your bonsai knowledge with our expert-written guides. 
            From beginners to advanced practitioners, there's always more to learn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-zen">{article.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                <BookOpen className="w-4 h-4" />
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesBlogs;
