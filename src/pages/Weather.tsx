import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WeatherDisplay } from '@/components/weather/WeatherDisplay';

const Weather = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Informasi Cuaca</h1>
        <WeatherDisplay />
      </main>
      <Footer />
    </div>
  );
};

export default Weather;