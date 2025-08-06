'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // นำเข้าไลบรารี SweetAlert2

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้
  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      const data = await res.json();
      setItems(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('ไม่สามารถดึงข้อมูลผู้ใช้ได้ กรุณาลองใหม่อีกครั้ง');
      setItems([]); // เคลียร์ข้อมูลเก่าหากเกิดข้อผิดพลาด
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers(); // ดึงข้อมูลครั้งแรกเมื่อ Component โหลด
    const interval = setInterval(getUsers, 5000); // ดึงข้อมูลทุก 5 วินาที
    return () => clearInterval(interval); // Clean up interval
  }, []);

  // ฟังก์ชันสำหรับจัดการการลบผู้ใช้
  const handleDelete = (id, username) => {
    Swal.fire({
      title: 'คุณแน่ใจหรือไม่?',
      text: `คุณต้องการลบผู้ใช้ "${username}" ใช่ไหม?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ใช่, ลบเลย!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Failed to delete user');
          }

          Swal.fire(
            'ลบแล้ว!',
            'ผู้ใช้ถูกลบเรียบร้อยแล้ว.',
            'success'
          );
          getUsers(); // ดึงข้อมูลใหม่เพื่ออัปเดตตาราง
        } catch (err) {
          console.error('Error deleting user:', err);
          Swal.fire(
            'เกิดข้อผิดพลาด!',
            `ไม่สามารถลบผู้ใช้ได้: ${err.message}`,
            'error'
          );
        }
      }
    });
  };

  return (
    <>
      <title>จัดการผู้ใช้ - Admin</title>
      <meta name="description" content="หน้าจัดการรายชื่อผู้ใช้สำหรับผู้ดูแลระบบ" />
      
      <div className="pt-20"></div>

      <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">รายชื่อผู้ใช้</h2>
            
            <Link href="/register" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
              + เพิ่มผู้ใช้ใหม่
            </Link>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              {loading && <p className="text-center text-blue-400">กำลังโหลดข้อมูล...</p>}
              {error && <p className="text-center text-red-400">{error}</p>}
              {!loading && !error && items.length === 0 && (
                <p className="text-center text-gray-400">ไม่พบข้อมูลผู้ใช้</p>
              )}
              {!loading && !error && items.length > 0 && (
                <table className="min-w-full divide-y divide-gray-700 bg-gray-800 text-white">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[5%]">#</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[10%]">คำนำหน้า</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[15%]">ชื่อ</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[15%]">นามสกุล</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[15%]">ชื่อผู้ใช้</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[20%]">ที่อยู่</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[5%]">เพศ</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[10%]">วันเกิด</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-[5%]">แก้ไข</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-[5%]">ลบ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-700 transition duration-150 ease-in-out odd:bg-gray-800 even:bg-gray-750">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-center">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.firstname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.fullname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.lastname}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.username}</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">{item.address || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.sex || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.birthday ? new Date(item.birthday).toLocaleDateString('th-TH') : '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-center">
                          <Link href={`/admin/users/edit/${item.id}`} className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                            Edit
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-center">
                          <button
                            onClick={() => handleDelete(item.id, item.username)}
                            className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                          >
                            ลบ
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}