import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Kebijakan Privasi</span>
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600 mb-8">
          Kami berkomitmen untuk melindungi privasi dan data pribadi Anda. Pelajari bagaimana kami
          mengumpulkan, menggunakan, dan melindungi informasi Anda.
        </p>

        {/* Quick Navigation */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Navigasi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={() => scrollToSection('pengumpulan')}
              className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center"
            >
              📊 Pengumpulan Data
            </button>
            <button
              onClick={() => scrollToSection('penggunaan')}
              className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center"
            >
              🔄 Penggunaan Informasi
            </button>
            <button
              onClick={() => scrollToSection('perlindungan')}
              className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center"
            >
              🔒 Perlindungan Data
            </button>
            <button
              onClick={() => scrollToSection('hak')}
              className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center"
            >
              👤 Hak Pengguna
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <section id="pengumpulan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">Pengumpulan Data</h2>
            <div className="bg-green-50 p-4 rounded mb-4">
              <h3 className="font-semibold mb-2">Informasi yang Kami Kumpulkan</h3>
              <p>
                Kami mengumpulkan informasi yang Anda berikan secara langsung dan data yang dihasilkan saat Anda menggunakan layanan kami.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Data Pribadi</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Nama lengkap dan informasi kontak</li>
                <li>Alamat email dan nomor telepon</li>
                <li>Informasi pembayaran dan transaksi</li>
                <li>Data profil dan preferensi</li>
              </ul>
            </div>
          </section>

          <section id="penggunaan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">Penggunaan Informasi</h2>
            <p className="mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Menyediakan dan meningkatkan layanan kami</li>
              <li>Memproses transaksi dan pembayaran</li>
              <li>Mengirim pemberitahuan penting</li>
              <li>Mencegah aktivitas pelanggaran dan penipuan</li>
            </ul>
          </section>

          <section id="perlindungan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">Perlindungan Data</h2>
            <div className="bg-green-50 p-4 rounded mb-4">
              <h3 className="font-semibold mb-2">Komitmen Keamanan</h3>
              <p>
                Kami mengimplementasikan langkah-langkah keamanan terkini untuk melindungi data Anda.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Langkah Keamanan</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Enkripsi data end-to-end</li>
                <li>Pemantauan keamanan 24/7</li>
                <li>Pembatasan akses data</li>
                <li>Backup data berkala</li>
              </ul>
            </div>
          </section>

          <section id="hak" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">Hak Pengguna</h2>
            <p className="mb-4">Anda memiliki hak untuk:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Mengakses data pribadi Anda</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Menghapus data Anda</li>
              <li>Membatasi penggunaan data</li>
            </ul>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-4">Punya Pertanyaan?</h2>
          <p className="mb-4">Tim privasi kami siap membantu menjawab pertanyaan Anda tentang kebijakan privasi ini.</p>
          <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
            Hubungi Tim Privasi
          </button>
        </div>

        <div className="text-center text-gray-500 mt-8">
          Terakhir diperbarui: 16 November 2024
        </div>
      </div>
    </div>
  );
};

export default Privacy;