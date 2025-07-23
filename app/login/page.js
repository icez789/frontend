// frontend/app/login/page.js

'use client'; // จำเป็นสำหรับ React Hooks เช่น useState

import { useState } from 'react';
import Link from 'next/link'; // อย่าลืม import Link

export default function LoginPage() {
  const [username, setUsername] = useState(''); // เปลี่ยนจาก email เป็น username
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // เพิ่ม state สำหรับจำฉันไว้
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // ถ้าคุณใช้ Next.js router สำหรับการ redirect หลัง login
  // import { useRouter } from 'next/navigation';
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setLoading(true); // Show loading state

    // TODO: ตรงนี้คือส่วนที่คุณจะต้องเชื่อมต่อกับระบบ Backend สำหรับการ Login จริงๆ
    // คุณอาจจะต้องส่ง username และ password ไปยัง API ของคุณ
    // ตัวอย่างเช่น:
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password, rememberMe }),
    // });
    // const data = await response.json();

    // ตัวอย่างการจำลองการ Login (แทนที่ด้วย Logic จริง)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      if (username === 'testuser' && password === 'password123') { // เปลี่ยนเงื่อนไขการตรวจสอบ
        console.log('Login successful!', { username, rememberMe });
        // router.push('/dashboard'); // เปลี่ยนเส้นทางไปหน้า Dashboard หรือหน้าหลัก
        alert('เข้าสู่ระบบสำเร็จ!');
      } else {
        setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      console.error(err);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <>
      {/* สำหรับ App Router, metadata ควรถูกจัดการใน layout.js หรือใช้ generateMetadata */}
      <title>เข้าสู่ระบบ - My Website</title>
      <meta name="description" content="หน้าเข้าสู่ระบบสำหรับ My Website" />

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              เข้าสู่ระบบ
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* ช่องกรอก Username */}
              <div>
                <label htmlFor="username" className="sr-only">
                  ชื่อผู้ใช้
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="ชื่อผู้ใช้"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* ช่องกรอก Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  รหัสผ่าน
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Checkbox "จำฉันไว้" */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  จำฉันไว้
                </label>
              </div>

              {/* ลิงก์ "ลืมรหัสผ่าน" */}
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300">
                  ลืมรหัสผ่าน?
                </Link>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              {/* ปุ่ม Login */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
              </button>
            </div>
          </form>
          {/* ลิงก์ "สมัครสมาชิก" */}
          <div className="text-center text-sm">
            <Link href="/register" className="font-medium text-blue-400 hover:text-blue-300">
              ยังไม่มีบัญชี? สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}