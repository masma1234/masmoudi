import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-white text-center md:text-left">
  <h3 className="text-2xl font-extrabold text-white mb-2 tracking-wide">
    Paumellerie & Decor
  </h3>

  <div className="flex justify-center md:justify-start mb-3">
    <Image
      src="/images/logo_noir.jpg"
      alt="Logo"
      width={100}
      height={100}
      className="rounded shadow-lg"
    />
  </div>

  <p className="text-gray-300 text-sm max-w-sm mx-auto md:mx-0">
    Votre source de confiance pour des charnières et des articles décoratifs de haute qualité.
  </p>
</div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-300 hover:text-white">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://www.google.com/maps/@34.7755606,10.7826936,45m/data=!3m1!1e3?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Mahdia Route KM 5.5, Markez Becha
                </a>
              </li>
              <li>Email: masmoudiahmed245@gmail.com</li>
              <li>Phone: +216 50 478 435</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Paumellerie & Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
