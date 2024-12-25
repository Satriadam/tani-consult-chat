import { Link } from 'react-router-dom';
import { MessageSquare, CloudSun, Calendar, Bell, HelpCircle } from 'lucide-react';
import { BottomNav } from '@/components/layout/BottomNav';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-[#4CAF50] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png" 
            alt="OK TANI" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">OK TANI</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Selamat Malam</span>
          <div className="flex items-center space-x-2">
            <Link to="/notifications" className="p-2 hover:bg-[#45a049] rounded-full transition-colors">
              <Bell size={24} />
            </Link>
            <Link to="/faq" className="p-2 hover:bg-[#45a049] rounded-full transition-colors">
              <HelpCircle size={24} />
            </Link>
            <div className="w-8 h-8 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/consultation" className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center">
              💬
            </div>
            <span className="text-lg font-semibold">Konsultasi Tani</span>
          </Link>

          <Link to="/weather" className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center">
              🌤️
            </div>
            <span className="text-lg font-semibold">Info Cuaca</span>
          </Link>

          <Link to="/calendar" className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-4xl flex items-center justify-center">
              📅
            </div>
            <span className="text-lg font-semibold">Kalender Tanam</span>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;