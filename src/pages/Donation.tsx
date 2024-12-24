import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Donation = () => {
  const currentAmount = 75000000;
  const targetAmount = 100000000;
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Donasi untuk Kebaikan</span>
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Progress Section */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-xl font-semibold mb-4">Target Donasi</h2>
          <Progress value={progress} className="h-3 mb-2" />
          <div className="flex justify-between text-sm">
            <span>Terkumpul: Rp 75.000.000</span>
            <span>Target: Rp 100.000.000</span>
          </div>
        </div>

        {/* Donation Packages */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Paket Bronze</h3>
            <div className="text-2xl font-bold text-[#4CAF50] mb-4">Rp 50.000</div>
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
              Pilih
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Paket Silver</h3>
            <div className="text-2xl font-bold text-[#4CAF50] mb-4">Rp 100.000</div>
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
              Pilih
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h3 className="font-semibold mb-2">Paket Gold</h3>
            <div className="text-2xl font-bold text-[#4CAF50] mb-4">Rp 500.000</div>
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
              Pilih
            </button>
          </div>
        </div>

        {/* Custom Donation */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-xl font-semibold mb-4">Donasi Custom</h2>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Masukkan jumlah donasi"
              className="flex-1 p-2 border rounded"
            />
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
              Donasi Sekarang
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-xl font-semibold mb-4">Metode Pembayaran</h2>
          <div className="grid grid-cols-4 gap-4">
            <button className="p-4 border rounded hover:border-[#4CAF50] hover:text-[#4CAF50]">
              Bank Transfer
            </button>
            <button className="p-4 border rounded hover:border-[#4CAF50] hover:text-[#4CAF50]">
              E-Wallet
            </button>
            <button className="p-4 border rounded hover:border-[#4CAF50] hover:text-[#4CAF50]">
              QRIS
            </button>
            <button className="p-4 border rounded hover:border-[#4CAF50] hover:text-[#4CAF50]">
              Virtual Account
            </button>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Donasi Terbaru</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white mr-3">
                  AS
                </div>
                <div>
                  <div className="font-semibold">Andi Surya</div>
                  <div className="text-sm text-gray-500">2 menit yang lalu</div>
                </div>
              </div>
              <div className="font-semibold text-[#4CAF50]">Rp 100.000</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white mr-3">
                  BR
                </div>
                <div>
                  <div className="font-semibold">Budi Rahardjo</div>
                  <div className="text-sm text-gray-500">5 menit yang lalu</div>
                </div>
              </div>
              <div className="font-semibold text-[#4CAF50]">Rp 500.000</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white mr-3">
                  CN
                </div>
                <div>
                  <div className="font-semibold">Citra Nirmala</div>
                  <div className="text-sm text-gray-500">10 menit yang lalu</div>
                </div>
              </div>
              <div className="font-semibold text-[#4CAF50]">Rp 50.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;