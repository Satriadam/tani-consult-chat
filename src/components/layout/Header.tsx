import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-primary text-2xl font-bold">
            OK TANI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Beranda
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              Tentang Web
            </Link>
            <Link to="/info" className="text-gray-600 hover:text-primary">
              Informasi/Media
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-primary">
              Fitur
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Kontak
            </Link>
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover"
            >
              Login/Masuk
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Tentang Web
              </Link>
              <Link
                to="/info"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Informasi/Media
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Fitur
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <Link
                to="/login"
                className="bg-primary text-white px-4 py-2 rounded text-center hover:bg-primary-hover"
                onClick={() => setIsOpen(false)}
              >
                Login/Masuk
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};