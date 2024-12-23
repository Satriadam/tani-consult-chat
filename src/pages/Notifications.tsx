import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Notifikasi</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 mb-20">
        {/* Today's Notifications */}
        <div className="mb-6">
          <h2 className="text-sm text-gray-600 mb-2">Hari ini</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🌱</span>
                <div>
                  <h3 className="font-semibold">Waktunya Menanam!</h3>
                  <p className="text-sm text-gray-600">Berdasarkan kalender tanam, sekarang adalah waktu yang tepat untuk memulai penanaman padi di lahan Anda.</p>
                  <p className="text-xs text-gray-400 mt-1">2 jam yang lalu</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <span className="text-2xl mr-3">⛈️</span>
                <div>
                  <h3 className="font-semibold">Peringatan Cuaca</h3>
                  <p className="text-sm text-gray-600">Diprediksi akan turun hujan lebat dalam 3 jam ke depan. Pastikan lahan Anda sudah siap.</p>
                  <p className="text-xs text-gray-400 mt-1">4 jam yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yesterday's Notifications */}
        <div className="mb-6">
          <h2 className="text-sm text-gray-600 mb-2">Kemarin</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <h3 className="font-semibold">Laporan Mingguan</h3>
                  <p className="text-sm text-gray-600">Laporan pertumbuhan tanaman minggu ini sudah tersedia. Lihat perkembangan tanaman Anda.</p>
                  <p className="text-xs text-gray-400 mt-1">Kemarin, 14:30</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💧</span>
                <div>
                  <h3 className="font-semibold">Pengingat Penyiraman</h3>
                  <p className="text-sm text-gray-600">Jangan lupa untuk menyiram tanaman Anda sore ini untuk hasil yang optimal.</p>
                  <p className="text-xs text-gray-400 mt-1">Kemarin, 10:15</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Week's Notifications */}
        <div>
          <h2 className="text-sm text-gray-600 mb-2">Minggu Lalu</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <h3 className="font-semibold">Target Tercapai!</h3>
                  <p className="text-sm text-gray-600">Selamat! Anda telah mencapai target produksi bulanan untuk tanaman jagung.</p>
                  <p className="text-xs text-gray-400 mt-1">5 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Notifications;