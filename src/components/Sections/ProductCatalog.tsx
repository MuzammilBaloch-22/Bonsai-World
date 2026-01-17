import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Star, Leaf, Sun, Package } from 'lucide-react';
import { products, categories, type Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import Toast from '@/components/Shared/Toast';

const ProductCatalog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category.includes(activeCategory));

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setToastMessage(`${product.name} added to cart!`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <section ref={ref} id="catalog" className="section-padding">
      <div className="container-zen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-zen mb-4 inline-block">Our Collection</span>
          <h2 className="heading-section text-foreground mb-4">
            Find Your Perfect Bonsai
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Each tree is hand-selected and professionally styled. From beginner-friendly 
            species to rare collector pieces, discover the art of bonsai.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group card-zen overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isLimited && (
                    <span className="badge-limited">Limited Stock</span>
                  )}
                  {product.isBundle && (
                    <span className="badge-zen">Bundle Deal</span>
                  )}
                </div>

                {/* Environment Badge */}
                <div className="absolute top-3 right-3">
                  {product.environment === 'Indoor' ? (
                    <span className="badge-indoor flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Indoor
                    </span>
                  ) : product.environment === 'Outdoor' ? (
                    <span className="badge-outdoor flex items-center gap-1">
                      <Sun className="w-3 h-3" />
                      Outdoor
                    </span>
                  ) : (
                    <span className="badge-zen flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      Both
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Difficulty */}
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < (product.difficulty === 'Beginner' ? 1 : product.difficulty === 'Intermediate' ? 2 : 3)
                          ? 'text-secondary fill-secondary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {product.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                {/* Care Hint */}
                <p className="text-xs text-primary/80 bg-primary/5 px-3 py-2 rounded-lg">
                  💡 {product.careHint}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  );
};

export default ProductCatalog;
