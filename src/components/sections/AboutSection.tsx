export const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tentang OK TANI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Visi Kami</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Menjadi platform digital terpercaya dan inovatif yang berkomitmen untuk memajukan sektor pertanian Indonesia melalui integrasi teknologi modern, sistem informasi yang akurat, dan layanan konsultasi berbasis kecerdasan buatan. Platform ini dirancang untuk memberikan solusi komprehensif bagi para petani dalam mengoptimalkan hasil pertanian mereka melalui fitur-fitur unggulan seperti sistem prediksi cuaca yang akurat, kalender tanam digital yang presisi, dan layanan konsultasi tani yang responsif.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Misi Kami</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Menyediakan layanan konsultasi pertanian berbasis kecerdasan buatan (chatbot) yang mudah diakses dan responsif untuk membantu petani mengatasi berbagai permasalahan pertanian. Mengembangkan sistem kalender tanam digital yang akurat untuk mengoptimalkan waktu dan hasil panen petani. Memberikan informasi cuaca real-time dan prediksi yang tepat untuk membantu petani dalam pengambilan keputusan terkait aktivitas pertanian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};