import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Sun, Calendar, ArrowUp } from 'lucide-react';
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
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
        style={{
          backgroundImage: `url('/lovable-uploads/818ba950-fb11-4f6f-8191-ce1a36381263.png')`
        }}
      >
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
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary-hover inline-block"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tentang OK TANI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi platform digital terpercaya dan inovatif yang berkomitmen untuk memajukan sektor pertanian Indonesia melalui integrasi teknologi modern, dalam menciptai yang masuk akal dan layanan berkualitas berbasis kebutuhan klanten. Platform ini dirancang untuk memberikan solusi komprehensif bagi para petani, dalam memodernisasi hasil pertanian mereka melalui fitur dan layanan yang memudahkan operasional sehari hari, sekaligus dengan digital yang lengkap, dan layanan konsultasi dan yang responsif.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Misi Kami</h3>
              <p className="text-gray-600">
                Menyediakan layanan konsultasi pertanian berbasis terintegrasi berupa chatbot yang mudah diakses dan responsif untuk membantu petani mengatasi berbagai permasalahan pertanian. Mengembangkan sistem kalender tanam digital yang akurat untuk mengoptimalkan waktu dan hasil panen petani. Memberikan informasi cuaca realtime dan prediksi yang tepat untuk memaksimalkan efisiensi pengelolaan kegiatan di aktivitas pertanian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information & Media Section */}
      <section className="py-20 bg-gray-50" id="info">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informasi & Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Berita Terkini</h3>
              <p className="text-gray-600 mb-4">
                Update terbaru seputar dunia pertanian dan teknologi.
              </p>
              <Link to="/news" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Kumpulan Berita Terkini
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Artikel Edukasi</h3>
              <p className="text-gray-600 mb-4">
                Berbagai artikel informatif tentang teknik pertanian modern.
              </p>
              <Link to="/articles" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Baca Artikel Edukasi
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Media Gallery</h3>
              <p className="text-gray-600 mb-4">
                Dokumentasi kegiatan dan pencapaian OK TANI.
              </p>
              <Link to="/gallery" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Lihat Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <MessageSquare className="w-full h-full text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Konsultasi Tani</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dapatkan solusi untuk masalah anda</li>
                <li>• Rekomendasi penggunaan & perawatan</li>
                <li>• Baca teknik budidaya pertanian</li>
                <li>• Tips pencegahan pasca panen</li>
                <li>• Konsultasi gratis tanpa batas waktu</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <Sun className="w-full h-full text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Info Cuaca</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Prakiraan cuaca harian dan mingguan</li>
                <li>• Peringatan dini cuaca ekstrem</li>
                <li>• Data suhu hujanan kelembaban</li>
                <li>• Analisis pola cuaca tahunan</li>
                <li>• Rekomendasi waktu tanam optimal</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <Calendar className="w-full h-full text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Kalender Tanaman</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Penjadwalan masa tanam dan panen</li>
                <li>• Peringatan waktu pemupukan</li>
                <li>• Notifikasi pengairan hama</li>
                <li>• Riwayat kegiatan bertani</li>
                <li>• Sinkronisasi dengan kondisi cuaca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-hover"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-hover z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;