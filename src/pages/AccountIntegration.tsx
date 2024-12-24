import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AccountIntegration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Integrasi Akun</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            {/* Google Integration */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Google</h3>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-8 h-8" />
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-grow">
                    <p className="text-green-600 font-medium mb-1">Telah Terhubung</p>
                    <p className="text-gray-600">Akun Google Anda sudah terhubung dengan Website (taniok362@gmail.com)</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline">Lihat Media Library</Button>
                  <Button variant="link" className="text-blue-600">
                    Atur akun Google Anda
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountIntegration;