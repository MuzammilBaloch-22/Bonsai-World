import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import ProblemSolution from '@/components/Sections/ProblemSolution';
import ProductCatalog from '@/components/Sections/ProductCatalog';
import BonsaiStyles from '@/components/Sections/BonsaiStyles';
import CareSystem from '@/components/Sections/CareSystem';
import ArticlesBlogs from '@/components/Sections/ArticlesBlogs';
import ContactSection from '@/components/Sections/ContactSection';
import PrimaryCTA from '@/components/Sections/PrimaryCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductCatalog />
        <BonsaiStyles />
        <CareSystem />
        <ArticlesBlogs />
        <ContactSection />
        <PrimaryCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
