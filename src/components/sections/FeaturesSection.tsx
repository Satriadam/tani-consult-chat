export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              💬
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
            <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              🌤️
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
            <div className="w-16 h-16 mx-auto mb-4 text-4xl flex items-center justify-center">
              📅
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
  );
};