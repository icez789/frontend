
import './globals.css';
import Link from 'next/link'; // อย่าลืม import Link

export const metadata = {
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
                    <Link href="/service" className="hover:text-blue-400">บริการ</Link>
                    <Link href="/contact" className="hover:text-blue-400">ติดต่อ</Link>
                    {/* เพิ่มลิงก์เข้าสู่ระบบแบบมีกรอบตรงนี้ */}
                    <Link
                      href="/login"
                      className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    >
                      เข้าสู่ระบบ
                    </Link>
                    {/* ถ้ามีลิงก์สมัครสมาชิกและอยากให้มีกรอบด้วย */}
                    <Link
                      href="/register"
                      className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    >
                      สมัครสมาชิก
                    </Link>
                </div>
            </nav>
        </header>

        {/* Main content */}
        <main className="bg-gray-900 min-h-screen text-white">
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