'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
      localStorage.setItem('token', data.token);
      Swal.fire({
        icon: 'success',
        title: '<h3>Login Successfuly!</h3>',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        window.location.href = "/admin/users";
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '<h3>Login Failed!</h3>',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        router.push('/login');
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">Sign In</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-400">Username</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-person-vcard text-gray-400"></i>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-person-vcard text-gray-400"></i>
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-sm text-gray-400 space-x-2">
          <Link href="/register" className="hover:text-white">Create Account</Link>
          <span>|</span>
          <Link href="/" className="hover:text-white">Forget Password</Link>
        </div>
      </div>
    </div>
  );
}