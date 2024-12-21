import { Link } from 'react-router-dom';
import { Home, Bell, User } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
              <p>Email: info@oktani.com</p>
              <p>Tel: +62 812 3456 7890</p>
              <p>Jl. Raya No. 123, Indonesia</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kategori</h3>
              <ul className="space-y-2">
                <li><Link to="/pertanian" className="hover:text-primary">Pertanian Modern</Link></li>
                <li><Link to="/tips" className="hover:text-primary">Tips & Trik</Link></li>
                <li><Link to="/teknologi" className="hover:text-primary">Teknologi Pertanian</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-primary">Tentang Kami</Link></li>
                <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="grid grid-cols-3 gap-4 p-4">
          <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-primary">
            <Home size={24} />
            <span className="text-xs">Beranda</span>
          </Link>
          <Link to="/notifications" className="flex flex-col items-center text-gray-600 hover:text-primary">
            <Bell size={24} />
            <span className="text-xs">Notifikasi</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-primary">
            <User size={24} />
            <span className="text-xs">Profil</span>
          </Link>
        </div>
      </nav>
    </>
  );
};