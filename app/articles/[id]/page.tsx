'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    category: 'boule',
    imageUrl: '/images/1.jpg',
    title: 'Boule B',
    description: 'Boule en forme B avec design elegant  ',
    details: '"Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.".',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 2,
    category: 'sphere',
    imageUrl: '/images/2.jpg',
    title: 'Sphere Premium',
    description: 'Sphere classique bien finie',
    details: '"Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 3,
    category: 'boule',
    imageUrl: '/images/3.jpg',
    title: 'Boule Deluxe',
    description: 'Boule en forme W avec un unique design',
    details: ' boule de luxe avec design unique. Parfaite pour la ferronnerie haut de gamme.',
    specifications: [
     'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 4,
    category: 'boule',
    imageUrl: '/images/4.jpg',
     title: 'Boule B',
    description: 'Boule en forme B avec design elegant  ',
    details: '"Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.".',
    specifications: [
    'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 5,
    category: 'boule',
    imageUrl: '/images/5.jpg',
    title: 'Boule Premium',
    description: 'Style boule Traditionel  ',
    details: 'Boule classique aux éléments de design traditionnels. Parfaite pour la ferronnerie de style patrimonial',
    specifications: [
    'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 6,
    category: 'boule',
    imageUrl: '/images/6.jpg',
    title: 'Boule Elite',
    description: 'Boule en forme W avec un unique design',
    details: ' boule de luxe avec design unique. Parfaite pour la ferronnerie haut de gamme.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 7,
    category: 'boule',
    imageUrl: '/images/7.jpg',
    title: 'Maitre Boule',
    description: 'Boule Premium ',
    details: 'Boule Deluxe avec finition top. Parfaite pour decoration du fer forgé.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 8,
    category: 'boule',
    imageUrl: '/images/8.jpg',
    title: 'Boule Supreme',
    description: 'Style boule contemporain',
    details: 'Boule classique aux éléments de design traditionnels. Parfaite pour la ferronnerie de style patrimonial',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 9,
    category: 'sphere',
    imageUrl: '/images/9.jpg',
    title: 'Sphere Deluxe',
    description: 'Design sphérique haut de gamme',
    details: 'Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.',
    specifications: [
   'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 10,
    category: 'sphere',
    imageUrl: '/images/10.jpg',
    title: 'Sphere Modern',
    description: 'Collection sphérique premium',
    details: 'Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 11,
    category: 'boule',
    imageUrl: '/images/11.jpg',
    title: 'Boule Grand',
    description: 'Boule en forme W avec un unique design',
    details: ' boule de luxe avec design unique. Parfaite pour la ferronnerie haut de gamme.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces's'
    ]
  },
  {
    id: 12,
    category: 'paumelle',
    imageUrl: '/images/12.jpg',
    title: 'Paumelle Classique 25',
    description: 'Style paumelle traditionnel',
    details: 'Paumelle classique avec design traditionnel. Parfaite pour les portes.',
    specifications: [
      'Material: Fer',
      'Size: 25 x 100',
      'Package: 100 pieces'
    ]
  },
  {
    id: 13,
    category: 'sphere',
    imageUrl: '/images/13.jpg',
    title: 'Sphere Elite',
    description: 'Collection sphére elite',
    details: 'Construction en laiton de haute qualité avec une finition polie. Parfait pour les meubles et les armoires de style traditionnel.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 14,
    category: 'paumelle',
    imageUrl: '/images/14.jpg',
    title: 'Paumelle roulement',
    description: 'Collection paumelle élite',
    details: 'Paumelle classique avec design traditionnel. Parfaite pour les portes lourdes.',
    specifications: [
      'Material: Fer',
      'Size: 25 x 100',
      'Package: 100 pieces'
    ]
  },
  {
    id: 15,
    category: 'sphere',
    imageUrl: '/images/15.jpg',
    title: 'Sphere Maitre',
    description: 'Collection sphére elite',
    details: 'Elite sphere avec finition premium. Parfaite pour furniture luxieuse.',
    specifications: [
      'Material: Fer',
      'Size: 3" x 3"',
      'Package: 100 pieces'
    ]
  },
  {
    id: 16,
    category: 'paumelle',
    imageUrl: '/images/16.jpg',
    title: 'Paumelle 30',
    description: 'Master series paumelle',
    details: 'Paumelle classique avec design traditionnel. Parfaite pour les portes.',
    specifications: [
      'Material: Fer',
      'Size: 30 x 100',
      'Package: 100 pieces'
    ]
  }
];

export default function ArticleDetails() {
  const params = useParams();
  const articleId = Number(params.id);
  
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Article Non Trouvé</h1>
          <p className="text-gray-600 mb-8">L'article cherché n'existe pas.</p>
          <Link
            href="/articles"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/articles"
          className="inline-block text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Articles
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-600 mb-6">{article.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <p className="text-gray-700">{article.details}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <ul className="space-y-2">
                {article.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-700">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact for Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
