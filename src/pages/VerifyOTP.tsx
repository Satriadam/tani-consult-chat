import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value && index < 5) {
      const nextInput = element.parentElement?.nextElementSibling?.querySelector('input');
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    
    if (otpValue.length === 6) {
      toast({
        title: "Kode OTP valid",
        description: "Silakan buat password baru",
      });
      navigate(`/reset-password?email=${encodeURIComponent(email || '')}`);
    } else {
      toast({
        variant: "destructive",
        title: "Kode OTP tidak valid",
        description: "Pastikan kode OTP yang Anda masukkan benar",
      });
    }
  };

  const resendOTP = () => {
    setTimeLeft(120);
    toast({
      title: "Kode OTP baru telah dikirim",
      description: "Silakan cek email Anda",
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <img
              className="mx-auto h-12 w-auto mb-4"
              src="/lovable-uploads/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png"
              alt="OK TANI Logo"
            />
            <h1 className="text-3xl font-bold text-primary mb-2">OK TANI</h1>
            <p className="text-gray-600">Solusi Pertanian Digital</p>
            <p className="text-gray-600 mt-4">
              Kami telah mengirimkan kode OTP ke
              <br />
              <span className="font-medium">{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-12 h-12 border-2 rounded text-center text-xl font-semibold focus:border-primary focus:outline-none"
                />
              ))}
            </div>

            <div className="text-center text-sm">
              <p className="text-gray-600">
                Kirim ulang kode dalam {formatTime(timeLeft)}
              </p>
              <button
                type="button"
                onClick={resendOTP}
                disabled={timeLeft > 0}
                className="text-primary hover:text-primary-hover mt-2 font-medium disabled:opacity-50"
              >
                Kirim Ulang Kode
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover"
              disabled={otp.some(digit => !digit)}
            >
              Verifikasi
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTP;