import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-reset-otp', {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "Kode OTP terkirim",
        description: "Silakan cek email Anda untuk kode OTP",
      });

      // Redirect to OTP verification page
      window.location.href = `/verify-otp?email=${encodeURIComponent(email)}`;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Gagal mengirim OTP",
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
          <h1 className="text-3xl font-bold text-primary">Lupa Password</h1>
          <p className="text-gray-600">Masukkan email Anda untuk menerima kode OTP</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="email"
                required
                className="pl-10"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Mengirim...' : 'Kirim OTP'}
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-sm text-primary hover:text-primary-hover">
                Kembali ke halaman login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;