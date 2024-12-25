import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png"
              alt="OK TANI Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-primary">OK TANI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-primary"
            >
              BERANDA
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary"
            >
              TENTANG WEB
            </button>
            <button
              onClick={() => scrollToSection('info')}
              className="text-gray-600 hover:text-primary"
            >
              INFORMASI / MEDIA
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary"
            >
              FITUR
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-primary"
            >
              KONTAK
            </button>
          </div>

          <Link to="/register">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
              Daftar/Masuk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};