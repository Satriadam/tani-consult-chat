import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Pengaturan Data Diri</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            {/* Profile Photo */}
            <div>
              <h3 className="text-gray-600 mb-2">Foto Profil</h3>
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            </div>

            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">Nama Lengkap</Label>
              <Input 
                id="fullName"
                placeholder="Masukkan nama lengkap"
                defaultValue="MUHAMMAD FAJAR SATRIA ADAM"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                defaultValue="adamdeploy8@gmail.com"
                readOnly
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phone">No. Handphone</Label>
              <div className="flex gap-2">
                <Input 
                  className="w-20"
                  defaultValue="+62"
                  readOnly
                />
                <Input 
                  id="phone"
                  placeholder="Masukkan nomor handphone"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <Label>Jenis Kelamin</Label>
              <RadioGroup defaultValue="male" className="flex gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Laki - laki</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Perempuan</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button variant="outline">Batal</Button>
              <Button>Simpan</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;