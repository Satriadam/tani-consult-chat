import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Pengaturan</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 mb-20">
        {/* Language Settings */}
        <div className="bg-white rounded-lg mb-4">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <span className="text-xl mr-3">🌐</span>
              <span>Pilih Bahasa</span>
            </div>
            <div className="text-gray-500">
              <span>Bahasa:</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <span className="text-xl mr-3">🌙</span>
              <span>Mode Gelap</span>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200">
              <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow"></div>
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div className="mb-6">
          <h2 className="text-gray-600 font-semibold mb-2">Informasi Lainnya</h2>
          <div className="bg-white rounded-lg">
            <Link to="#" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🔔</span>
              <span>Notifikasi</span>
            </Link>
            <Link to="#" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🏢</span>
              <span>Tentang Perusahaan</span>
            </Link>
            <Link to="#" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🎁</span>
              <span>Donasi</span>
            </Link>
            <Link to="#" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">❓</span>
              <span>Bantuan & FAQ</span>
            </Link>
            <Link to="#" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">📜</span>
              <span>Ketentuan Layanan</span>
            </Link>
            <Link to="#" className="flex items-center p-4">
              <span className="text-xl mr-3">🔒</span>
              <span>Kebijakan Privasi</span>
            </Link>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-gray-600 font-semibold mb-2">Akun</h2>
          <div className="bg-white rounded-lg">
            <Link to="#" className="flex items-center p-4 text-red-500">
              <span className="text-xl mr-3">🚪</span>
              <span>Keluar</span>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
