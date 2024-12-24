import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AccountSettingsNav } from '@/components/layout/AccountSettingsNav';

const ChangePassword = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Ubah Kata Sandi</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="md:col-span-1">
            <AccountSettingsNav />
          </div>

          {/* Form Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-6">
                {/* Old Password */}
                <div>
                  <Label htmlFor="oldPassword">Kata Sandi Lama</Label>
                  <Input 
                    id="oldPassword"
                    type="password"
                    placeholder="Masukkan kata sandi lama"
                  />
                </div>

                {/* New Password */}
                <div>
                  <Label htmlFor="newPassword">Kata Sandi Baru</Label>
                  <Input 
                    id="newPassword"
                    type="password"
                    placeholder="Masukkan kata sandi baru"
                  />
                </div>

                {/* Confirm New Password */}
                <div>
                  <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
                  <Input 
                    id="confirmPassword"
                    type="password"
                    placeholder="Konfirmasi kata sandi baru"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Button variant="outline">Batal</Button>
                  <Button>Ubah Kata Sandi</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;