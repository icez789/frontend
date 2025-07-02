// frontend/app/layout.js

import './globals.css'; // ตรวจสอบว่า import ถูกต้อง
import Link from 'next/link';

export const metadata = { // สำหรับ Next.js 13+ App Router, metadata ควรอยู่ที่นี่
  title: 'My Website - สร้างสรรค์เว็บไซต์คุณภาพ',
  description: 'บริการพัฒนาเว็บไซต์ Next.js และ Tailwind CSS สร้างประสบการณ์ผู้ใช้ที่รวดเร็วและสวยงาม',
  keywords: 'Next.js, Tailwind CSS, เว็บไซต์, พัฒนาเว็บไซต์, ออกแบบเว็บ, เว็บไซต์ธุรกิจ, เว็บแอปพลิเคชัน',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        {/* Header หรือ Navbar ของคุณ */}
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">My Website</Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-blue-400">หน้าหลัก</Link>
                    <Link href="/about" className="hover:text-blue-400">เกี่ยวกับ</Link>
                    <Link href="/contact" className="hover:text-blue-400">ติดต่อ</Link>
                    <Link href="/service" className="hover:text-blue-400">บริการ</Link>
                </div>
            </nav>
        </header>

        {/* Main content - ลบคลาสที่จำกัดความกว้างออกไป เพื่อให้ Carousel สามารถเต็มหน้าจอได้ */}
        <main className="bg-gray-900 min-h-screen text-white"> {/* ลบ container, mx-auto, px-4 ออก */}
          {children}
        </main>

        {/* Footer ของคุณ */}
        <footer className="bg-gray-800 text-gray-300 text-center p-6">
            <div className="container mx-auto">
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </div>
        </footer>
      </body>
    </html>
  );
}