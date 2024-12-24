import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Bantuan & FAQ</span>
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-[#4CAF50] mb-8">
          Pertanyaan yang Sering Diajukan
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            className="w-full p-4 border border-gray-200 rounded-lg"
          />
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-[#4CAF50] text-white p-3 rounded-lg">
            Semua
          </button>
          <button className="border border-gray-200 p-3 rounded-lg hover:border-[#4CAF50]">
            Umum
          </button>
          <button className="border border-gray-200 p-3 rounded-lg hover:border-[#4CAF50]">
            Akun
          </button>
          <button className="border border-gray-200 p-3 rounded-lg hover:border-[#4CAF50]">
            Layanan
          </button>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              Bagaimana cara mendaftar di OK TANI?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              Untuk mendaftar di OK TANI, Anda dapat mengikuti langkah-langkah berikut:
              <ol className="list-decimal ml-4 mt-2">
                <li>Kunjungi halaman pendaftaran</li>
                <li>Isi formulir dengan data diri yang valid</li>
                <li>Verifikasi email Anda</li>
                <li>Lengkapi profil Anda</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg shadow">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              Bagaimana cara mengubah password?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              Untuk mengubah password, masuk ke menu Profil, pilih Pengaturan Akun, lalu klik opsi Ubah Password. Ikuti instruksi yang diberikan untuk membuat password baru.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg shadow">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              Apa manfaat menjadi member OK TANI?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              Sebagai member OK TANI, Anda akan mendapatkan berbagai keuntungan seperti akses ke fitur premium, konsultasi prioritas, update informasi terbaru, dan berbagai promo eksklusif.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Feedback Section */}
        <div className="mt-8 text-center">
          <p className="mb-4">Apakah informasi ini membantu?</p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#45a049]">
              Ya
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;