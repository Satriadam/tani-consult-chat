import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DashboardHero } from '@/components/sections/DashboardHero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';

const Dashboard = () => {
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
      <main>
        <DashboardHero />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;