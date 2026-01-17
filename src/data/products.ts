import ginsengFicus from '@/assets/products/ginseng-ficus.jpg';
import chineseElm from '@/assets/products/chinese-elm.jpg';
import dwarfJade from '@/assets/products/dwarf-jade.jpg';
import juniper from '@/assets/products/juniper.jpg';
import japaneseMaple from '@/assets/products/japanese-maple.jpg';
import pine from '@/assets/products/pine.jpg';
import cherryBlossom from '@/assets/products/cherry-blossom.jpg';
import pomegranate from '@/assets/products/pomegranate.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  environment: 'Indoor' | 'Outdoor' | 'Both';
  careHint: string;
  isLimited?: boolean;
  isBundle?: boolean;
}

export const products: Product[] = [
  {
    id: 'ginseng-ficus',
    name: 'Ginseng Ficus Bonsai',
    description: 'The perfect beginner bonsai with unique bulbous roots and glossy leaves. Thrives indoors with minimal care.',
    price: 49.99,
    originalPrice: 69.99,
    image: ginsengFicus,
    category: ['beginner', 'indoor'],
    difficulty: 'Beginner',
    environment: 'Indoor',
    careHint: 'Water when top soil feels dry. Loves humidity.',
  },
  {
    id: 'chinese-elm',
    name: 'Chinese Elm Bonsai',
    description: 'A classic choice with small serrated leaves and elegant branch structure. Very forgiving and adaptable.',
    price: 79.99,
    image: chineseElm,
    category: ['beginner', 'indoor', 'outdoor'],
    difficulty: 'Beginner',
    environment: 'Both',
    careHint: 'Adaptable to various conditions. Semi-deciduous.',
  },
  {
    id: 'dwarf-jade',
    name: 'Dwarf Jade Bonsai',
    description: 'Succulent bonsai with thick trunk and fleshy leaves. Stores water, making it drought-tolerant.',
    price: 59.99,
    image: dwarfJade,
    category: ['beginner', 'indoor'],
    difficulty: 'Beginner',
    environment: 'Indoor',
    careHint: 'Water sparingly. Let soil dry between waterings.',
  },
  {
    id: 'juniper',
    name: 'Juniper Bonsai',
    description: 'The iconic bonsai seen in "Karate Kid". Dense foliage and dramatic styling possibilities.',
    price: 129.99,
    originalPrice: 159.99,
    image: juniper,
    category: ['outdoor', 'premium'],
    difficulty: 'Intermediate',
    environment: 'Outdoor',
    careHint: 'Needs outdoor conditions. Full sun preferred.',
    isLimited: true,
  },
  {
    id: 'japanese-maple',
    name: 'Japanese Maple Bonsai',
    description: 'Stunning deciduous bonsai with delicate lobed leaves. Beautiful seasonal color changes.',
    price: 199.99,
    image: japaneseMaple,
    category: ['outdoor', 'premium'],
    difficulty: 'Advanced',
    environment: 'Outdoor',
    careHint: 'Protect from harsh afternoon sun. Needs winter dormancy.',
    isLimited: true,
  },
  {
    id: 'pine',
    name: 'Japanese Black Pine Bonsai',
    description: 'The king of bonsai. Rugged bark and needle foliage create a powerful, ancient appearance.',
    price: 249.99,
    originalPrice: 299.99,
    image: pine,
    category: ['outdoor', 'premium'],
    difficulty: 'Advanced',
    environment: 'Outdoor',
    careHint: 'Requires candle pinching in spring. Full sun essential.',
    isLimited: true,
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom Bonsai',
    description: 'Sakura in miniature form. Produces stunning pink blossoms in spring, bringing Japanese beauty to your space.',
    price: 179.99,
    image: cherryBlossom,
    category: ['flowering', 'outdoor', 'premium'],
    difficulty: 'Intermediate',
    environment: 'Outdoor',
    careHint: 'Needs cold winter for blooming. Regular watering.',
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate Bonsai',
    description: 'Fruiting bonsai that produces real miniature pomegranates. Orange flowers and red fruit.',
    price: 149.99,
    image: pomegranate,
    category: ['fruiting', 'outdoor'],
    difficulty: 'Intermediate',
    environment: 'Outdoor',
    careHint: 'Full sun for fruiting. Keep moist during growing season.',
    isBundle: true,
  },
];

export const categories = [
  { id: 'all', label: 'All Bonsai' },
  { id: 'beginner', label: 'Beginner Friendly' },
  { id: 'indoor', label: 'Indoor Bonsai' },
  { id: 'outdoor', label: 'Outdoor Bonsai' },
  { id: 'flowering', label: 'Flowering Bonsai' },
  { id: 'fruiting', label: 'Fruiting Bonsai' },
  { id: 'premium', label: 'Premium Classic' },
];
