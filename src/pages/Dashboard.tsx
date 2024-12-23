import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DashboardHero } from '@/components/sections/DashboardHero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';

const Dashboard = () => {
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