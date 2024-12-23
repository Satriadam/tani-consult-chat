import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';

const Consultation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Konsultasi Tani</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
          <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-10 h-10 text-[#4CAF50]" />
          </div>
          <h2 className="text-xl font-bold mb-2">Konsultasi Tani</h2>
          <p className="text-gray-600">Asisten pintar yang siap membantu pertanian Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <span className="mr-3">🌱</span>
            <span>Hama & Penyakit</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <span className="mr-3">🌿</span>
            <span>Teknik Budidaya</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <span className="mr-3">💧</span>
            <span>Sistem Irigasi</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <span className="mr-3">🌾</span>
            <span>Pasca Panen</span>
          </div>
        </div>

        <div className="bg-[#E8F5E9] rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-3">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <p className="text-gray-700">
              Halo! Saya adalah asisten Konsultasi Tani yang siap membantu Anda. 
              Silakan pilih topik atau ajukan pertanyaan seputar pertanian.
            </p>
          </div>
        </div>

        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ketik pertanyaan Anda..."
              className="flex-1 p-3 border rounded-l-lg focus:outline-none"
            />
            <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-r-lg">
              Kirim
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Consultation;