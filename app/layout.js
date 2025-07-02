import './globals.css'; // นำเข้า global styles ของคุณ
import Link from 'next/link'; // ใช้ Link จาก next/link สำหรับการนำทาง

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* เพิ่ม Tailwind CSS class ที่นี่ */}
      <body className="flex flex-col min-h-screen">
        {/* Navbar ของคุณ */}
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              My Website
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/about">เกี่ยวกับ</Link>
              </li>
              <li>
                <Link href="/contact">ติดต่อ</Link>
              </li>
              <li>
                <Link href="/service">บริการ</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/*
          ส่วนนี้คือ key สำคัญ!
          เราใช้ flex-grow เพื่อให้ main content ขยายเต็มพื้นที่ที่เหลือ
          เพื่อดัน Footer ลงไปด้านล่าง
        */}
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>

        {/* Footer ของคุณ */}
        <footer className="bg-gray-700 p-4 text-white text-center mt-8">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}