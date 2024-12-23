import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatInterface } from '@/components/chat/ChatInterface';

const Consultation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Konsultasi Tani</h1>
        <ChatInterface />
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;