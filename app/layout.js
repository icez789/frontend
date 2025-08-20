import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Website - สร้างสรรค์เว็บไซต์คุณภาพ',
  description: 'บริการพัฒนาเว็บไซต์ Next.js และ Tailwind CSS สร้างประสบการณ์ผู้ใช้ที่รวดเร็วและสวยงาม',
  keywords: 'Next.js, Tailwind CSS, เว็บไซต์, พัฒนาเว็บไซต์, ออกแบบเว็บ, เว็บไซต์ธุรกิจ, เว็บแอปพลิเคชัน',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Navbar /> {/* เรียกใช้ Navbar Component ที่นี่ */}
        
        <main className="bg-gray-900 min-h-screen text-white pt-20">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-gray-300 text-center p-6">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} ธีรภัทร คำชุม.
          </div>
        </footer>
      </body>
    </html>
  );
}