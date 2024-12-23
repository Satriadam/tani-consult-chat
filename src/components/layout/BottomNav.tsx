import { Link, useLocation } from 'react-router-dom';
import { Home, Bell, User } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/dashboard" 
          className={`flex flex-col items-center ${location.pathname === '/dashboard' ? 'text-[#4CAF50]' : 'text-gray-600'}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Beranda</span>
        </Link>
        <Link 
          to="/notifications" 
          className={`flex flex-col items-center ${location.pathname === '/notifications' ? 'text-[#4CAF50]' : 'text-gray-600'}`}
        >
          <Bell size={24} />
          <span className="text-xs mt-1">Notifikasi</span>
        </Link>
        <Link 
          to="/profile" 
          className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-[#4CAF50]' : 'text-gray-600'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </nav>
  );
};