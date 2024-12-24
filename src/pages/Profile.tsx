import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

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
        {/* Account Management */}
        <div>
          <h2 className="text-gray-600 font-semibold mb-2">Akun</h2>
          <div className="bg-white rounded-lg">
            <Link to="/account-settings" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">👤</span>
              <span>Kelola Akun</span>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="flex items-center p-4 text-red-500 w-full">
                  <span className="text-xl mr-3">🚪</span>
                  <span>Keluar</span>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Konfirmasi Keluar</AlertDialogTitle>
                  <AlertDialogDescription>
                    Apakah Anda yakin ingin keluar dari aplikasi?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>
                  <AlertDialogAction onClick={handleLogout}>
                    Keluar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Other Information */}
        <div className="mb-6 mt-6">
          <h2 className="text-gray-600 font-semibold mb-2">Informasi Lainnya</h2>
          <div className="bg-white rounded-lg">
            <Link to="/notifications" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🔔</span>
              <span>Notifikasi</span>
            </Link>
            <Link to="/about" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🏢</span>
              <span>Tentang Perusahaan</span>
            </Link>
            <Link to="/donation" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">🎁</span>
              <span>Donasi</span>
            </Link>
            <Link to="/faq" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">❓</span>
              <span>Bantuan & FAQ</span>
            </Link>
            <Link to="/terms" className="flex items-center p-4 border-b">
              <span className="text-xl mr-3">📜</span>
              <span>Ketentuan Layanan</span>
            </Link>
            <Link to="/privacy" className="flex items-center p-4">
              <span className="text-xl mr-3">🔒</span>
              <span>Kebijakan Privasi</span>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;