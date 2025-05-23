'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    category: 'boule',
    imageUrl: '/images/1.jpg',
    title: 'Boule Classic',
    description: 'Traditional boule hinge with elegant design',
    details: 'High-quality brass construction with polished finish. Perfect for traditional furniture and cabinetry.',
    specifications: [
      'Material: Brass',
      'Finish: Polished',
      'Size: 3" x 3"',
      'Weight: 150g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 2,
    category: 'sphere',
    imageUrl: '/images/2.jpg',
    title: 'Sphere Premium',
    description: 'High-quality sphere hinge with modern finish',
    details: 'Premium quality sphere hinge with contemporary design. Ideal for modern furniture and doors.',
    specifications: [
      'Material: Stainless Steel',
      'Finish: Brushed',
      'Size: 2.5" x 2.5"',
      'Weight: 120g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 3,
    category: 'boule',
    imageUrl: '/images/3.jpg',
    title: 'Boule Deluxe',
    description: 'Luxury boule hinge with unique design',
    details: 'Deluxe boule hinge featuring a unique design. Perfect for high-end furniture.',
    specifications: [
      'Material: Brass with Chrome',
      'Finish: Chrome Plated',
      'Size: 3.5" x 3.5"',
      'Weight: 180g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 4,
    category: 'boule',
    imageUrl: '/images/4.jpg',
    title: 'Boule Modern',
    description: 'Contemporary boule design',
    details: 'Modern take on the classic boule hinge. Features clean lines and contemporary styling.',
    specifications: [
      'Material: Aluminum',
      'Finish: Matte Black',
      'Size: 2.75" x 2.75"',
      'Weight: 100g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 5,
    category: 'boule',
    imageUrl: '/images/5.jpg',
    title: 'Boule Premium',
    description: 'Traditional boule style',
    details: 'Classic boule hinge with traditional design elements. Perfect for heritage furniture.',
    specifications: [
      'Material: Solid Brass',
      'Finish: Antique Brass',
      'Size: 3" x 3"',
      'Weight: 160g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 6,
    category: 'boule',
    imageUrl: '/images/6.jpg',
    title: 'Boule Elite',
    description: 'Modern boule design',
    details: 'Contemporary boule hinge with minimalist design. Ideal for modern interiors.',
    specifications: [
      'Material: Steel',
      'Finish: Satin Nickel',
      'Size: 2.5" x 2.5"',
      'Weight: 110g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 7,
    category: 'boule',
    imageUrl: '/images/7.jpg',
    title: 'Boule Master',
    description: 'Premium boule hinge',
    details: 'Deluxe boule hinge with premium finish. Perfect for high-end cabinetry.',
    specifications: [
      'Material: Brass',
      'Finish: Polished Gold',
      'Size: 3.25" x 3.25"',
      'Weight: 170g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 8,
    category: 'boule',
    imageUrl: '/images/8.jpg',
    title: 'Boule Supreme',
    description: 'Contemporary boule style',
    details: 'Modern boule hinge with sleek design. Perfect for contemporary furniture.',
    specifications: [
      'Material: Stainless Steel',
      'Finish: Brushed Nickel',
      'Size: 2.75" x 2.75"',
      'Weight: 130g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 9,
    category: 'sphere',
    imageUrl: '/images/9.jpg',
    title: 'Sphere Deluxe',
    description: 'High-end sphere design',
    details: 'Premium sphere hinge with luxury finish. Ideal for designer furniture.',
    specifications: [
      'Material: Brass',
      'Finish: Rose Gold',
      'Size: 3" x 3"',
      'Weight: 155g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 10,
    category: 'sphere',
    imageUrl: '/images/10.jpg',
    title: 'Sphere Modern',
    description: 'Premium sphere collection',
    details: 'Premium sphere hinge with high-end finish. Perfect for luxury furniture.',
    specifications: [
      'Material: Solid Brass',
      'Finish: Polished Chrome',
      'Size: 3.5" x 3.5"',
      'Weight: 190g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 11,
    category: 'boule',
    imageUrl: '/images/11.jpg',
    title: 'Boule Grand',
    description: 'Luxury boule design',
    details: 'Deluxe boule hinge with premium finish. Ideal for high-end furniture.',
    specifications: [
      'Material: Brass',
      'Finish: Antique Gold',
      'Size: 3" x 3"',
      'Weight: 165g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 12,
    category: 'paumelle',
    imageUrl: '/images/12.jpg',
    title: 'Paumelle Classic',
    description: 'Traditional paumelle style',
    details: 'Classic paumelle hinge with traditional design. Perfect for heritage furniture.',
    specifications: [
      'Material: Solid Brass',
      'Finish: Polished Brass',
      'Size: 3.25" x 3.25"',
      'Weight: 175g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 13,
    category: 'sphere',
    imageUrl: '/images/13.jpg',
    title: 'Sphere Elite',
    description: 'Elite sphere collection',
    details: 'Elite sphere hinge with premium finish. Perfect for luxury furniture.',
    specifications: [
      'Material: Brass',
      'Finish: Polished Nickel',
      'Size: 3.5" x 3.5"',
      'Weight: 185g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 14,
    category: 'paumelle',
    imageUrl: '/images/14.jpg',
    title: 'Paumelle Premium',
    description: 'Elite paumelle collection',
    details: 'Elite paumelle hinge with premium finish. Ideal for high-end furniture.',
    specifications: [
      'Material: Solid Brass',
      'Finish: Polished Gold',
      'Size: 3" x 3"',
      'Weight: 170g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 15,
    category: 'sphere',
    imageUrl: '/images/15.jpg',
    title: 'Sphere Master',
    description: 'Elite sphere collection',
    details: 'Elite sphere hinge with premium finish. Perfect for luxury furniture.',
    specifications: [
      'Material: Brass',
      'Finish: Polished Chrome',
      'Size: 3.25" x 3.25"',
      'Weight: 180g',
      'Package: 2 pieces'
    ]
  },
  {
    id: 16,
    category: 'paumelle',
    imageUrl: '/images/16.jpg',
    title: 'Paumelle Master',
    description: 'Master series paumelle',
    details: 'Master series paumelle hinge with premium finish. Perfect for luxury furniture.',
    specifications: [
      'Material: Solid Brass',
      'Finish: Polished Gold',
      'Size: 3.5" x 3.5"',
      'Weight: 195g',
      'Package: 2 pieces'
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
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            href="/articles"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Articles
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