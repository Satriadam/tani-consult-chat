import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
          <span className="text-xl font-bold">Ketentuan Layanan</span>
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600 mb-8">
          Bacalah dengan seksama ketentuan layanan kami untuk memahami hak dan kewajiban Anda sebagai pengguna.
        </p>

        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => scrollToSection('definisi')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Definisi
          </button>
          <button
            onClick={() => scrollToSection('penggunaan')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Penggunaan Layanan
          </button>
          <button
            onClick={() => scrollToSection('akun')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Akun Pengguna
          </button>
          <button
            onClick={() => scrollToSection('privasi')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Kebijakan Privasi
          </button>
          <button
            onClick={() => scrollToSection('pembayaran')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Pembayaran
          </button>
          <button
            onClick={() => scrollToSection('batasan')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Batasan
          </button>
          <button
            onClick={() => scrollToSection('perubahan')}
            className="flex-1 min-w-[200px] p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            Perubahan Ketentuan
          </button>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <section id="definisi" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">1. Definisi</h2>
            <div className="bg-blue-50 p-4 rounded mb-4">
              Ketentuan Layanan ini mengatur hubungan antara pengguna dan penyedia layanan dalam penggunaan platform.
            </div>
            <p className="mb-2">Dalam ketentuan layanan ini, istilah-istilah berikut memiliki arti:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>"Layanan" - merujuk pada seluruh produk, fitur, dan jasa yang kami sediakan</li>
              <li>"Pengguna" - setiap individu atau entitas yang mengakses atau menggunakan Layanan</li>
              <li>"Konten" - segala bentuk informasi, data, atau materi yang tersedia melalui Layanan</li>
            </ul>
          </section>

          <section id="penggunaan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">2. Penggunaan Layanan</h2>
            <h3 className="font-semibold mb-2">2.1 Persyaratan Umum</h3>
            <p className="mb-4">Dengan menggunakan layanan kami, Anda menyetujui untuk:</p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Memenuhi seluruh hukum yang berlaku</li>
              <li>Menghormati hak kekayaan intelektual</li>
              <li>Menggunakan layanan sesuai dengan tujuan yang dimaksud</li>
            </ul>

            <h3 className="font-semibold mb-2">2.2 Batasan Penggunaan</h3>
            <p className="mb-2">Anda tidak diperbolehkan untuk:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Menyalahgunakan layanan untuk tujuan ilegal</li>
              <li>Mengganggu atau merusak sistem</li>
              <li>Menyebarkan konten yang melanggar hukum</li>
            </ul>
          </section>

          <section id="akun" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">3. Akun Pengguna</h2>
            <div className="bg-blue-50 p-4 rounded mb-4">
              Anda bertanggung jawab penuh atas keamanan dan aktivitas akun Anda.
            </div>
            <h3 className="font-semibold mb-2">3.1 Pembuatan Akun</h3>
            <p className="mb-2">Dalam membuat akun, Anda harus:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Memberikan informasi yang akurat dan lengkap</li>
              <li>Menjaga kerahasiaan kata sandi</li>
              <li>Memperbarui informasi jika ada perubahan</li>
            </ul>
          </section>

          <section id="privasi" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">4. Kebijakan Privasi</h2>
            <p className="mb-4">Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda sesuai dengan:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Peraturan perlindungan data yang berlaku</li>
              <li>Kebijakan privasi kami</li>
              <li>Standar keamanan industri</li>
            </ul>
          </section>

          <section id="pembayaran" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">5. Pembayaran</h2>
            <h3 className="font-semibold mb-2">5.1 Biaya Layanan</h3>
            <p className="mb-2">Detail mengenai biaya dan pembayaran:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Semua biaya dalam mata uang Rupiah</li>
              <li>Pembayaran dilakukan melalui gateway pembayaran resmi</li>
              <li>Pengembalian dana sesuai kebijakan yang berlaku</li>
            </ul>
          </section>

          <section id="batasan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">6. Batasan Tanggung Jawab</h2>
            <div className="bg-blue-50 p-4 rounded">
              Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan layanan di luar ketentuan yang berlaku.
            </div>
          </section>

          <section id="perubahan" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-[#4CAF50] mb-4">7. Perubahan Ketentuan</h2>
            <p>
              Kami berhak mengubah ketentuan layanan ini sewaktu-waktu dengan pemberitahuan yang sesuai kepada pengguna.
            </p>
          </section>
        </div>

        <div className="text-center text-gray-500 mt-8">
          Terakhir diperbarui: 16 November 2024
        </div>
      </div>
    </div>
  );
};

export default Terms;