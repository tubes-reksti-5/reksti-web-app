"use client";
import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; // Correct import for Next.js app

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter(); // Ensure correct hook is used

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await response.json();
      //console.log(data.user.is_admin);
      if (!response.ok) {
        setError(data.message || 'Something went wrong');
      } else if (data.user.is_admin) {
        router.push('/pages/room_page');
      } else {
        throw new Error("Anda Bukan Admin");
      }
    } catch (error) {
      console.error('An unexpected error happened:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error happened');
      }
    }        
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lighter_gray">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center pt-0 mt-0">
          <Image
            src="/assets/thumb_logo.png"
            alt="OfficeNexus Logo"
            width={80}
            height={80}
            className="object-contain align-center"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-1 text-center text-office_gray">Welcome</h2>
        <h2 className="text-2xl font-bold mb-6 text-center text-office_gray">Back</h2>
        {/* Log in form */}
        <form onSubmit={handleSubmit}>
          {/* Email Div */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-office_gray">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Div */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-office_gray">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="mt-1 block w-full p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 cursor-pointer mt-6" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Log In Button */}
          <button type="submit" className="w-full bg-darker_gray text-white py-2 px-4 rounded-md hover:bg-lighter_gray hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-8">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
