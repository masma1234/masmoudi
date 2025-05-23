import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main.jpg"
            alt="Decorative hinges background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Paumelle haut de gamme & articles décoratifs
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Découvrez notre collection de quincaillerie de haute qualité pour votre maison.
          </p>
          <Link
            href="/articles"
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Voir Collection
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Produits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                <Image
                  src={`/images/${item}.jpg`}
                  alt={`Featured product ${item}`}
                   fill
                    className="object-cover"
                   />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ensemble de Paumelle de luxe</h3>
                  <p className="text-gray-600 mb-4">
                    Paumelles et produits décoratives de haute qualité, parfait pour vos besoins en ameublement.
                  </p>
                  <Link
                    href="/articles"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Voir les Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité Haute Gamme</h3>
              <p className="text-gray-600">
                We source only the highest quality materials for our products.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">
                Livraison rapide et fiable jusqu'à votre porte.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Facilité de Payment</h3>
              <p className="text-gray-600">
                Options de paiement sûres, faciles et sécurisées pour votre tranquillité d'esprit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
