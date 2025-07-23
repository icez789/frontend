// frontend/app/forgot-password/page.js

'use client'; // จำเป็นสำหรับ React Hooks เช่น useState

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // สำหรับแสดงสถานะการส่ง
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // ล้างสถานะก่อนหน้า
    setLoading(true);

    // TODO: ตรงนี้คือส่วนที่คุณจะต้องเชื่อมต่อกับระบบ Backend เพื่อส่งอีเมลสำหรับรีเซ็ตรหัสผ่าน
    // Backend จะต้องสร้าง Token และส่งลิงก์รีเซ็ตที่มี Token ไปยังอีเมลของผู้ใช้
    // ตัวอย่างเช่น:
    // const response = await fetch('/api/forgot-password', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });
    // const data = await response.json();

    // ตัวอย่างการจำลองการส่งคำขอ (แทนที่ด้วย Logic จริง)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      console.log('ส่งคำขอรีเซ็ตรหัสผ่านสำหรับอีเมล:', email);

      // ในสถานการณ์จริง คุณจะตรวจสอบ response จาก Backend
      // หากสำเร็จ:
      setStatus('เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบอีเมล');
      setEmail(''); // ล้างช่องอีเมล
      // หากเกิดข้อผิดพลาด:
      // setStatus('ไม่พบอีเมลนี้ในระบบ หรือเกิดข้อผิดพลาดในการส่ง');
    } catch (err) {
      console.error('เกิดข้อผิดพลาดในการส่งคำขอ:', err);
      setStatus('เกิดข้อผิดพลาดในการส่งคำขอ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>ลืมรหัสผ่าน - My Website</title>
      <meta name="description" content="หน้าลืมรหัสผ่านสำหรับ My Website" />

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              ลืมรหัสผ่าน?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              กรอกอีเมลของคุณเพื่อรับลิงก์สำหรับรีเซ็ตรหัสผ่าน
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                อีเมล
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {status && (
              <div className={`text-sm text-center ${status.includes('สำเร็จ') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'กำลังส่ง...' : 'ส่งลิงก์รีเซ็ตรหัสผ่าน'}
              </button>
            </div>
          </form>
          <div className="text-center text-sm">
            <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
              ย้อนกลับไปหน้าเข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}