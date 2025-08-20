'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition duration-300 ${isScrolled ? 'bg-gray-700 shadow-lg p-3' : 'bg-gray-800 p-4 shadow-md'}`}>
      <nav className={`container mx-auto flex justify-between items-center ${isScrolled ? 'text-lg' : 'text-xl'}`}>
        <Link 
          href="/" 
          className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Website
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/" className={`hover:text-blue-400 ${pathname === '/' ? 'text-blue-500 font-semibold' : ''}`}>หน้าหลัก</Link>
          <Link href="/about" className={`hover:text-blue-400 ${pathname === '/about' ? 'text-blue-500 font-semibold' : ''}`}>เกี่ยวกับ</Link>
          <Link href="/service" className={`hover:text-blue-400 ${pathname === '/service' ? 'text-blue-500 font-semibold' : ''}`}>บริการ</Link>
          <Link href="/contact" className={`hover:text-blue-400 ${pathname === '/contact' ? 'text-blue-500 font-semibold' : ''}`}>ติดต่อ</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link
              href="/login"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300 ease-in-out"
            >
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}