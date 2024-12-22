import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return "Password harus minimal 6 karakter";
    }
    return null;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate password before submission
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast({
        variant: "destructive",
        title: "Validasi gagal",
        description: passwordError,
      });
      setLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Validasi gagal",
        description: "Password dan konfirmasi password tidak cocok",
      });
      setLoading(false);
      return;
    }

    try {
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone_number: phoneNumber,
          },
        },
      });

      if (signUpError) throw signUpError;

      if (user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: user.id,
              full_name: fullName,
              phone_number: phoneNumber,
            },
          ]);

        if (profileError) throw profileError;
      }

      toast({
        title: "Registrasi berhasil",
        description: "Silakan cek email Anda untuk verifikasi.",
      });
      
      navigate('/login');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Registrasi gagal",
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
          <h1 className="text-3xl font-bold text-primary">OK TANI</h1>
          <p className="text-gray-600">Solusi Pertanian Digital</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  required
                  className="pl-10"
                  placeholder="Nama Lengkap"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="email"
                  required
                  className="pl-10"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="tel"
                  required
                  className="pl-10"
                  placeholder="Nomor Telepon"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="password"
                  required
                  className="pl-10"
                  placeholder="Password"
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
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                />
              </div>
              <p className="text-sm text-gray-500">
                Minimal 8 karakter, kombinasi huruf dan angka
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Daftar'}
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                atau daftar dengan
              </p>
              <div className="mt-3 flex justify-center space-x-4">
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-6 h-6 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook logo" className="w-6 h-6 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-600">
                Sudah punya akun?{' '}
                <Link to="/login" className="font-medium text-primary hover:text-primary-hover">
                  Masuk
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;