import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Phone } from 'lucide-react';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Validasi gagal",
        description: "Password dan konfirmasi password tidak cocok",
      });
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Validasi gagal",
        description: "Password harus minimal 6 karakter",
      });
      setLoading(false);
      return;
    }

    // Simulasi proses registrasi
    setTimeout(() => {
      toast({
        title: "Registrasi berhasil",
        description: "Selamat datang di OK TANI!",
      });
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
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
          Minimal 6 karakter, kombinasi huruf dan angka
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover"
        disabled={loading}
      >
        {loading ? 'Memproses...' : 'Daftar'}
      </Button>
    </form>
  );
};