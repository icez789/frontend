// frontend/app/register/page.js
// หรือตำแหน่งที่ Component สมัครสมาชิกของคุณอยู่

'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');         // เปลี่ยนจาก gender เป็น sex
  const [birthday, setBirthday] = useState(''); // เปลี่ยนจาก dob เป็น birthday
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // ส่งข้อมูลทั้งหมดไป Backend พร้อมชื่อ field ที่ตรงกัน
        body: JSON.stringify({ firstname, fullname, lastname, username, password, address, sex, birthday }), // แก้ตรงนี้
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ!',
          text: result.message || 'คุณจะถูกนำไปยังหน้าเข้าสู่ระบบ',
          confirmButtonText: 'ตกลง'
        }).then(() => {
          router.push('/login');
        });
      } else {
        setError(result.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก');
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด!',
          text: result.message || 'ไม่สามารถสมัครสมาชิกได้',
          confirmButtonText: 'ตกลง'
        });
      }
    } catch (apiError) {
      console.error('API Error:', apiError);
      setError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
      Swal.fire({
        icon: 'error',
        title: 'การเชื่อมต่อผิดพลาด!',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง',
        confirmButtonText: 'ตกลง'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>สมัครสมาชิก - My Website</title>
      <meta name="description" content="หน้าสมัครสมาชิกสำหรับ My Website" />

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-xl text-white">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              สมัครสมาชิก
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {/* คำนำหน้าชื่อ */}
              <div>
                <label htmlFor="firstname" className="sr-only">คำนำหน้าชื่อ</label>
                <select
                  id="firstname"
                  name="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                  value={firstname}
                >
                  <option value="">เลือกคำนำหน้าชื่อ</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>

              {/* ชื่อ */}
              <div>
                <label htmlFor="fullname" className="sr-only">ชื่อ</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="ชื่อ"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                />
              </div>

              {/* นามสกุล */}
              <div>
                <label htmlFor="lastname" className="sr-only">นามสกุล</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="นามสกุล"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                />
              </div>

              
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="ชื่อผู้ใช้"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                />
              </div>

              
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                />
              </div>

              
              <div>
                <label htmlFor="address" className="sr-only">ที่อยู่</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="ที่อยู่"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                ></textarea>
              </div>

              
              <div>
                <label htmlFor="sex" className="sr-only">เพศ</label>
                <select
                  id="sex" // เปลี่ยน id
                  name="sex" // เปลี่ยน name
                  onChange={(e) => setSex(e.target.value)} // เปลี่ยน setGender เป็น setSex
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                  value={sex} // เปลี่ยน value
                >
                  <option value="">เลือกเพศ</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              
              <div className="rounded-b-md">
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-300 sr-only">วันเกิด</label>
                <input
                  id="birthday" // เปลี่ยน id
                  name="birthday" // เปลี่ยน name
                  type="date"
                  placeholder="วันเกิด"
                  value={birthday} // เปลี่ยน value
                  onChange={(e) => setBirthday(e.target.value)} // เปลี่ยน setDob เป็น setBirthday
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  required
                />
              </div>

            </div> 

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
              </button>
            </div>
          </form>

          <div className="text-center text-sm mt-4">
            <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
              มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}