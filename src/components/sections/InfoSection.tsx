import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const InfoSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="info">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Informasi & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Berita Terkini</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Update terbaru seputar dunia pertanian dan teknologi.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/news" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Kumpulan Berita Terkini
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Artikel Edukasi</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Berbagai artikel informatif tentang teknik pertanian modern.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/articles" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Baca Artikel Edukasi
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Media Gallery</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Dokumentasi kegiatan dan pencapaian OK TANI.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/gallery" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Lihat Gallery
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};