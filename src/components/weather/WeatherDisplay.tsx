import { useState, useEffect } from 'react';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

export const WeatherDisplay = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    description: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Temporary mock data - replace with actual API call
    setWeather({
      temperature: 28,
      humidity: 75,
      windSpeed: 10,
      description: 'Cerah Berawan',
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Cuaca Hari Ini</h2>
            <Cloud className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg">{weather.description}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Thermometer className="w-6 h-6 text-primary mr-2" />
                <span>Suhu</span>
              </div>
              <span className="font-bold">{weather.temperature}°C</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Droplets className="w-6 h-6 text-primary mr-2" />
                <span>Kelembaban</span>
              </div>
              <span className="font-bold">{weather.humidity}%</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Wind className="w-6 h-6 text-primary mr-2" />
                <span>Kecepatan Angin</span>
              </div>
              <span className="font-bold">{weather.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};