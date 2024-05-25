"use client"
import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
          <form>
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
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 cursor-pointer mt-6" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </div>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full bg-darker_gray text-white py-2 px-4 rounded-md hover:bg-lighter_gray hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-8"
            >
              Log In
            </button>

          </form>
        </div>
      </div>
    );

}
