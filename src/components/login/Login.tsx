// components/Modal.js
"use client";
import { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import { loginLogo, logo } from '@/asset';

export default function Login() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(true)}
            >
                Register
            </button>

            {isOpen && (
                <div className="fixed w-886 h-653 top-111 left-277 inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white flex rounded-lg shadow-lg w-full max-w-4xl">
                        <div className="bg-blue-900 text-white p-8 rounded-l-lg w-1/3">
                            <div className="logo flex justify-center">
                                <div className="p-4">
                                    <Image src={loginLogo} width={80} height={80} alt="logo" className="text-center" />
                                </div>
                            </div>
                            <div className="text-center mb-8">
                                <h2 className="text-xl font-black">Acchawala College</h2>
                                <p className="text-xs">India's Best Education Consultancy</p>
                            </div>
                            <ul className="space-y-2 mb-6 text-base">
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">Personal Counsellor</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">Admission Assistance</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">Lowest Package Seats</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">Expert Guidance</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">MCI/NTA Updates</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">Fees Negotiation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 w-2/3 relative">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4 text-blue-950">Confused with the Admission process to your dream college? Register with us</h2>
                            <form>
                                <div className="mb-4">
                                    {/* <label className="block text-gray-700">Name</label> */}
                                    <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    {/* <label className="block text-gray-700">Mobile</label> */}
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-white">
                                            <ReactCountryFlag countryCode="IN" svg style={{ width: '1em', height: '1em' }} className="mr-2" />
                                            +91
                                        </span>
                                        <input type="text" className="w-full px-3 py-2 border rounded-r" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    {/* <label className="block text-gray-700">Email</label> */}
                                    <input type="email" className="w-full px-3 py-2 border rounded" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    {/* <label className="block text-gray-700">Preferred Stream</label> */}
                                    <select className="w-full px-3 py-2 border rounded">
                                        <option>Please select Preferred Stream</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    {/* <label className="block text-gray-700">Preferred Level</label> */}
                                    <select className="w-full px-3 py-2 border rounded">
                                        <option>Please select Preferred Level</option>
                                    </select>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input type="checkbox" className="mr-2" />
                                    <label className="text-gray-700">Enable updated & important information on Whatsapp</label>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
                            </form>
                            <p className="mt-4 text-center text-gray-600">
                                By proceeding ahead you expressly agree to the Acchawalacollege <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
                            </p>
                            <p className="mt-2 text-center text-gray-600">
                                Already have an account? <a href="#" className="text-blue-500">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


