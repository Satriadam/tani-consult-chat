import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  useEffect(() => {
    if (!email || !token) {
      navigate('/forgot-password');
    }
  }, [email, token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password tidak cocok",
        description: "Password dan konfirmasi password harus sama",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Password terlalu pendek",
        description: "Password harus minimal 6 karakter",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke('reset-password', {
        body: { email, token, password },
      });

      if (error) throw error;

      toast({
        title: "Password berhasil diubah",
        description: "Silakan login dengan password baru Anda",
      });

      navigate('/login');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Gagal mengubah password",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <img
            className="mx-auto h-12 w-auto"
            src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png"
            alt="OK TANI Logo"
          />
          <h1 className="text-3xl font-bold text-primary">Buat Password Baru</h1>
          <p className="text-gray-600">Masukkan password baru Anda</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="password"
                  required
                  className="pl-10"
                  placeholder="Password baru"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="password"
                  required
                  className="pl-10"
                  placeholder="Konfirmasi password baru"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Simpan Password Baru'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;