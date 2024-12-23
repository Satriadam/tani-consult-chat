import { ArrowLeft, Wind, Droplets, CloudRain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';

const Weather = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Info Cuaca</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-20">
        {/* Current Weather */}
        <div className="bg-[#4CAF50] text-white rounded-lg p-6 mb-6">
          <h2 className="text-center text-xl font-bold mb-4">Cuaca Hari Ini</h2>
          <div className="flex flex-col items-center mb-4">
            <span className="text-6xl mb-2">⛅</span>
            <span className="text-4xl font-bold">28°C</span>
            <span className="text-sm">Cerah Berawan</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#43A047] rounded p-3 text-center">
              <Wind className="w-6 h-6 mx-auto mb-1" />
              <div className="text-sm">Angin</div>
              <div className="font-bold">10 km/h</div>
            </div>
            <div className="bg-[#43A047] rounded p-3 text-center">
              <Droplets className="w-6 h-6 mx-auto mb-1" />
              <div className="text-sm">Kelembaban</div>
              <div className="font-bold">75%</div>
            </div>
            <div className="bg-[#43A047] rounded p-3 text-center">
              <CloudRain className="w-6 h-6 mx-auto mb-1" />
              <div className="text-sm">Curah Hujan</div>
              <div className="font-bold">20%</div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-bold mb-4">Prakiraan 5 Hari Kedepan</h3>
          <div className="grid grid-cols-5 gap-4">
            {[
              { day: 'Senin', temp: 28, emoji: '⛅' },
              { day: 'Selasa', temp: 29, emoji: '🌤️' },
              { day: 'Rabu', temp: 30, emoji: '⛅' },
              { day: 'Kamis', temp: 31, emoji: '🌧️' },
              { day: 'Jumat', temp: 32, emoji: '⛅' }
            ].map((item) => (
              <div key={item.day} className="text-center">
                <div className="text-sm mb-1">{item.day}</div>
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="text-sm font-bold">{item.temp}°C</div>
              </div>
            ))}
          </div>
        </div>

        {/* Agricultural Impact */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Dampak Terhadap Pertanian</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-3">🌱</span>
              <span>Kondisi ideal untuk penanaman padi</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">💧</span>
              <span>Pengairan normal diperlukan</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">⚠️</span>
              <span>Waspadai serangan hama karena cuaca hangat</span>
            </li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Weather;