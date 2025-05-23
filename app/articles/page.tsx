'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Category = 'all' | 'paumelle' | 'boule' | 'sphere';

interface Article {
  id: number;
  category: Category;
  imageUrl: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'boule',
    imageUrl: '/images/1.jpg',
    title: 'Boule Classic',
    description: 'Traditional boule hinge with elegant design'
  },
  {
    id: 2,
    category: 'sphere',
    imageUrl: '/images/2.jpg',
    title: 'Sphere Premium',
    description: 'High-quality sphere hinge with modern finish'
  },
  {
    id: 3,
    category: 'boule',
    imageUrl: '/images/3.jpg',
    title: 'Boule Deluxe',
    description: 'Luxury boule hinge with unique design'
  },
  {
    id: 4,
    category: 'boule',
    imageUrl: '/images/4.jpg',
    title: 'Boule Modern',
    description: 'Contemporary boule design'
  },
  {
    id: 5,
    category: 'boule',
    imageUrl: '/images/5.jpg',
    title: 'Boule Premium',
    description: 'Traditional boule style'
  },
  {
    id: 6,
    category: 'boule',
    imageUrl: '/images/6.jpg',
    title: 'Boule Elite',
    description: 'Modern boule design'
  },
  {
    id: 7,
    category: 'boule',
    imageUrl: '/images/7.jpg',
    title: 'Boule Master',
    description: 'Premium boule hinge'
  },
  {
    id: 8,
    category: 'boule',
    imageUrl: '/images/8.jpg',
    title: 'Boule Supreme',
    description: 'Contemporary boule style'
  },
  {
    id: 9,
    category: 'sphere',
    imageUrl: '/images/9.jpg',
    title: 'Sphere Deluxe',
    description: 'High-end sphere design'
  },
  {
    id: 10,
    category: 'sphere',
    imageUrl: '/images/10.jpg',
    title: 'Sphere Modern',
    description: 'Premium sphere collection'
  },
  {
    id: 11,
    category: 'boule',
    imageUrl: '/images/11.jpg',
    title: 'Boule Grand',
    description: 'Luxury boule design'
  },
  {
    id: 12,
    category: 'paumelle',
    imageUrl: '/images/12.jpg',
    title: 'Paumelle Classic',
    description: 'Traditional paumelle style'
  },
 
  {
    id: 14,
    category: 'paumelle',
    imageUrl: '/images/14.jpg',
    title: 'Paumelle Premium',
    description: 'Elite paumelle collection'
  },

  {
    id: 16,
    category: 'paumelle',
    imageUrl: '/images/16.jpg',
    title: 'Paumelle Master',
    description: 'Master series paumelle'
  }
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Articles</h1>

        {/* Filter Box */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('paumelle')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'paumelle'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Paumelle
            </button>
            <button
              onClick={() => setSelectedCategory('boule')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'boule'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Boule
            </button>
            <button
              onClick={() => setSelectedCategory('sphere')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'sphere'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Sphere
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 