// frontend/app/register/page.js

'use client'; // จำเป็นสำหรับ React Hooks เช่น useState

import { useState } from 'react';
import Link from 'next/link'; // สำหรับลิงก์กลับไปหน้า Login

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [prefix, setPrefix] = useState(''); // คำนำหน้าชื่อ
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState(''); // เพศ
  const [dob, setDob] = useState(''); // วันเกิด
  const [agreeTerms, setAgreeTerms] = useState(false); // ยอมรับเงื่อนไข
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // ตรวจสอบเงื่อนไขเบื้องต้น (เช่น ต้องยอมรับเงื่อนไข)
    if (!agreeTerms) {
      setError('กรุณายอมรับเงื่อนไขการให้บริการ');
      return;
    }

    setLoading(true);

    // TODO: ตรงนี้คือส่วนที่คุณจะต้องเชื่อมต่อกับระบบ Backend สำหรับการสมัครสมาชิกจริง ๆ
    // ตัวอย่างเช่น:
    // const response = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     prefix,
    //     firstName,
    //     lastName,
    //     address,
    //     gender,
    //     dob,
    //   }),
    // });
    // const data = await response.json();

    // ตัวอย่างการจำลองการสมัครสมาชิก (แทนที่ด้วย Logic จริง)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      console.log('ข้อมูลการสมัครสมาชิก:', {
        username,
        password, // ในความเป็นจริงควรส่งแบบเข้ารหัส หรือแฮช
        prefix,
        firstName,
        lastName,
        address,
        gender,
        dob,
        agreeTerms,
      });
      alert('สมัครสมาชิกสำเร็จ!');
      // router.push('/login'); // อาจจะ redirect ไปหน้า Login หลังจากสมัครสำเร็จ
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการสมัครสมาชิก');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>สมัครสมาชิก - My Website</title>
      <meta name="description" content="หน้าสมัครสมาชิกสำหรับ My Website" />

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-lg shadow-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              สมัครสมาชิก
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* ชื่อผู้ใช้ */}
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
              {/* รหัสผ่าน */}
              <div>
                <label htmlFor="password" className="sr-only">
                  รหัสผ่าน
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* คำนำหน้าชื่อ */}
            <div className="mt-4">
              <label htmlFor="prefix" className="block text-sm font-medium text-gray-300">
                คำนำหน้าชื่อ
              </label>
              <select
                id="prefix"
                name="prefix"
                required
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-gray-700 text-white"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
              >
                <option value="">เลือก</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>

            {/* ชื่อ */}
            <div className="mt-4">
              <label htmlFor="firstName" className="sr-only">
                ชื่อ
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="ชื่อ"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* นามสกุล */}
            <div className="mt-4">
              <label htmlFor="lastName" className="sr-only">
                นามสกุล
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="นามสกุล"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* ที่อยู่ */}
            <div className="mt-4">
              <label htmlFor="address" className="sr-only">
                ที่อยู่
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="ที่อยู่"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            {/* เพศ */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300">
                เพศ
              </label>
              <div className="mt-1 space-x-4 flex">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="gender"
                    value="ชาย"
                    checked={gender === 'ชาย'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="ml-2 text-gray-300">ชาย</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="gender"
                    value="หญิง"
                    checked={gender === 'หญิง'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="ml-2 text-gray-300">หญิง</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="gender"
                    value="อื่นๆ"
                    checked={gender === 'อื่นๆ'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="ml-2 text-gray-300">อื่นๆ</span>
                </label>
              </div>
            </div>

            {/* วันเกิด */}
            <div className="mt-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-300">
                วันเกิด
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            {/* Checkbox ยอมรับเงื่อนไข */}
            <div className="flex items-center mt-4">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-300">
                ฉันยอมรับ <a href="#" className="font-medium text-blue-400 hover:text-blue-300">เงื่อนไขการให้บริการ</a>
              </label>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            {/* ปุ่ม Register */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
              </button>
            </div>
          </form>
          <div className="text-center text-sm">
            <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
              มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}