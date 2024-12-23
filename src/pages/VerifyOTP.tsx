import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { supabase } from '@/integrations/supabase/client';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('verify-otp', {
        body: { email, otp },
      });

      if (error) throw error;

      toast({
        title: "Kode OTP valid",
        description: "Silakan buat password baru",
      });

      navigate(`/reset-password?email=${encodeURIComponent(email)}&token=${encodeURIComponent(otp)}`);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Verifikasi gagal",
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
          <h1 className="text-3xl font-bold text-primary">Verifikasi OTP</h1>
          <p className="text-gray-600">Masukkan kode OTP yang telah dikirim ke email Anda</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center">
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2">
                    {slots.map((slot, index) => (
                      <InputOTPSlot key={index} {...slot} index={index} />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading || otp.length !== 6}
            >
              {loading ? 'Memverifikasi...' : 'Verifikasi OTP'}
            </Button>
            <div className="text-center space-y-2">
              <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-hover block">
                Kirim ulang kode OTP
              </Link>
              <Link to="/login" className="text-sm text-primary hover:text-primary-hover block">
                Kembali ke halaman login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTP;