import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Kalender Tanam</h1>
        {/* Calendar content will be implemented later */}
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;