import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Cloud, Calendar } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{
        backgroundImage: `url('/lovable-uploads/42d3ed7a-c0a7-4bbf-8922-dae8ba6e6029.png')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di OK TANI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Platform digital untuk mendukung kesejahteraan petani Indonesia melalui teknologi modern
          </p>
          <Link
            to="/register"
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary-hover"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Konsultasi Tani</h3>
              <p className="text-gray-600">
                Layanan konsultasi pintar berbasis AI yang tersedia 24/7 untuk membantu petani
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Info Cuaca</h3>
              <p className="text-gray-600">
                Informasi cuaca real-time dan prakiraan untuk perencanaan aktivitas pertanian
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kalender Tanam</h3>
              <p className="text-gray-600">
                Kelola jadwal tanam dengan kalender digital yang mudah digunakan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Tentang OK TANI</h2>
            <p className="text-gray-600 mb-8">
              OK TANI adalah platform digital yang dirancang khusus untuk membantu petani Indonesia
              mengoptimalkan hasil pertanian mereka melalui teknologi modern dan pendampingan yang
              berkelanjutan.
            </p>
            <Link
              to="/about"
              className="text-primary hover:text-primary-hover font-semibold"
            >
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-hover"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Index;