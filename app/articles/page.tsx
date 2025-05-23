'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Categorie = 'all' | 'paumelle' | 'boule' | 'sphere';

interface Article {
  id: number;
  category: Categorie;
  imageUrl: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'boule',
    imageUrl: '/images/1.jpg',
    title: 'Boule Classique',
    description: 'Boule traditionnelle au design élégant'
  },
  {
    id: 2,
    category: 'sphere',
    imageUrl: '/images/2.jpg',
    title: 'Sphère Premium',
    description: 'Sphére de haute qualité avec finition moderne'
  },
  {
    id: 3,
    category: 'boule',
    imageUrl: '/images/3.jpg',
    title: 'Boule Deluxe',
    description: 'Boule de luxe au design unique'
  },
  {
    id: 4,
    category: 'boule',
    imageUrl: '/images/4.jpg',
    title: 'Boule Moderne',
    description: 'Design boule contemporain'
  },
  {
    id: 5,
    category: 'boule',
    imageUrl: '/images/5.jpg',
    title: 'Boule Premium',
    description: 'Style boule traditionnel'
  },
  {
    id: 6,
    category: 'boule',
    imageUrl: '/images/6.jpg',
    title: 'Boule Élite',
    description: 'Design boule moderne'
  },
  {
    id: 7,
    category: 'boule',
    imageUrl: '/images/7.jpg',
    title: 'Boule Maître',
    description: 'Boule premium'
  },
  {
    id: 8,
    category: 'boule',
    imageUrl: '/images/8.jpg',
    title: 'Boule Suprême',
    description: 'Style boule contemporain'
  },
  {
    id: 9,
    category: 'sphere',
    imageUrl: '/images/9.jpg',
    title: 'Sphère Deluxe',
    description: 'Design sphérique haut de gamme'
  },
  {
    id: 10,
    category: 'sphere',
    imageUrl: '/images/10.jpg',
    title: 'Sphère Moderne',
    description: 'Collection sphérique premium'
  },
  {
    id: 11,
    category: 'boule',
    imageUrl: '/images/11.jpg',
    title: 'Boule Grand',
    description: 'Design boule de luxe'
  },
  {
    id: 12,
    category: 'paumelle',
    imageUrl: '/images/12.jpg',
    title: 'Paumelle Classique',
    description: 'Style paumelle traditionnel'
  },
  {
    id: 14,
    category: 'paumelle',
    imageUrl: '/images/14.jpg',
    title: 'Paumelle Premium',
    description: 'Collection paumelle élite'
  },
  {
    id: 16,
    category: 'paumelle',
    imageUrl: '/images/16.jpg',
    title: 'Paumelle Maître',
    description: 'Série  de paumelle'
  }
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<Categorie>('all');

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Articles</h1>

        {/* Boîte de filtre */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Filtrer par catégorie</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Tous
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
              Sphère
            </button>
          </div>
        </div>

        {/* Grille des articles */}
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
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
