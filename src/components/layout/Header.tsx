import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png" 
              alt="OK TANI Logo" 
              className="h-8 w-auto"
            />
            <span className="text-primary text-2xl font-bold">OK TANI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-primary"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary"
            >
              Tentang Web
            </button>
            <button
              onClick={() => scrollToSection('info')}
              className="text-gray-600 hover:text-primary"
            >
              Informasi/Media
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-primary"
            >
              Kontak
            </button>
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
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-primary"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary"
              >
                Tentang Web
              </button>
              <button
                onClick={() => scrollToSection('info')}
                className="text-gray-600 hover:text-primary"
              >
                Informasi/Media
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-primary"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary"
              >
                Kontak
              </button>
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