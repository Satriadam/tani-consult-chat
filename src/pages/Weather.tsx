import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WeatherDisplay } from '@/components/weather/WeatherDisplay';

const Weather = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error || !session) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "Please login to access this page",
        });
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate, toast]);

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