import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header = () => {
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

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Beranda
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              Tentang Web
            </Link>
            <Link to="/consultation" className="text-gray-600 hover:text-primary">
              Konsultasi
            </Link>
            <Link to="/weather" className="text-gray-600 hover:text-primary">
              Cuaca
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-primary">
              FAQ
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};