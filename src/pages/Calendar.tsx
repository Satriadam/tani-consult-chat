import { ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Kalender Tanam</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-20">
        {/* Calendar Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <button className="p-2">-</button>
            <h2 className="text-xl font-bold">Oktober 2024</h2>
            <button className="p-2">+</button>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
              <div key={day} className="text-center font-bold p-2">{day}</div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="text-center p-2 relative">
                {i + 1}
                {i === 2 && <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>}
                {i === 6 && <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Planting Schedule */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold mb-4">Jadwal Tanam</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-3">🌾</span>
                <div>
                  <div className="font-semibold">Tanam Padi</div>
                  <div className="text-sm text-gray-600">3 Oktober 2024</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-100 text-green-600 rounded">Edit</button>
                <button className="px-3 py-1 bg-red-100 text-red-600 rounded">Hapus</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-3">🌽</span>
                <div>
                  <div className="font-semibold">Tanam Jagung</div>
                  <div className="text-sm text-gray-600">7 Oktober 2024</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-100 text-green-600 rounded">Edit</button>
                <button className="px-3 py-1 bg-red-100 text-red-600 rounded">Hapus</button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button className="fixed bottom-20 right-4 bg-[#4CAF50] text-white p-4 rounded-full shadow-lg">
          <Plus size={24} />
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Calendar;