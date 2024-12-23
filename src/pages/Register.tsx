import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegistrationForm } from '@/components/registration/RegistrationForm';
import { SocialLogin } from '@/components/registration/SocialLogin';

const Register = () => {
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
          <RegistrationForm />
          <div className="mt-6">
            <SocialLogin />
          </div>
          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Sudah punya akun?{' '}
              <Link to="/login" className="font-medium text-primary hover:text-primary-hover">
                Masuk
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;