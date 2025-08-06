'use client';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // เพิ่ม state สำหรับที่อยู่
  const [sex, setSex] = useState(''); // เพิ่ม state สำหรับเพศ
  const [birthday, setBirthday] = useState(''); // เพิ่ม state สำหรับวันเกิด

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        // กำหนดค่าเริ่มต้นของ state จากข้อมูลที่ดึงมา
        if (data && data.length > 0) {
          const user = data[0];
          setFirstname(user.firstname);
          setFullname(user.fullname);
          setLastname(user.lastname);
          setUsername(user.username);
          setPassword(user.password);
          setAddress(user.address || '');
          setSex(user.sex || '');
          setBirthday(user.birthday ? new Date(user.birthday).toISOString().split('T')[0] : '');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUsers();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', { 
        method: 'PUT',
        headers: {
          Accept : 'application/json',
        },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password, address, sex, birthday }), // เพิ่มข้อมูลใหม่
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(function () {
          router.push('/register');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">แก้ไขข้อมูลสมัครสมาชิก {id}</h1>
      {items.map((item) => (
        <form key={item.id} onSubmit={handleUpdateSubmit} className="space-y-3">

          <select name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="w-full border p-2 rounded" required>
            <option value="">เลือกคำนำหน้าชื่อ</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          <input
            type="text"
            placeholder="ชื่อ"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="นามสกุล"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          {/* เพิ่มช่องสำหรับที่อยู่ */}
          <input
            type="text"
            placeholder="ที่อยู่"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          {/* เพิ่มช่องสำหรับเพศ */}
          <select name="sex" value={sex} onChange={(e) => setSex(e.target.value)} className="w-full border p-2 rounded" required>
            <option value="">เลือกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
          {/* เพิ่มช่องสำหรับวันเกิด */}
          <input
            type="date"
            placeholder="วันเกิด"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-warning text-white p-2 rounded hover:bg-blue-600"
          >
            ปรับปรุงข้อมูล
          </button>
        </form>
      ))}
    </div>
  )
}