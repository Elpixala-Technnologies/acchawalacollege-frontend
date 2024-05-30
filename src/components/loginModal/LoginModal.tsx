"use client";
import { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import { loginBg, loginLogo, logo } from '@/asset';
import { LoginData } from '@/data/LoginData';

export default function LoginModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="bg-blue-500 text-white items-center px-4 py-2 rounded"
                onClick={() => setIsOpen(true)}
            >
                Register
            </button>

            {isOpen && (
                <div className="fixed w-886 h-653 top-111 left-277 inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white flex rounded-lg shadow-lg w-full max-w-4xl">
                        <div className="bg-custom text-white p-8 rounded-l-lg w-1/3">
                            <div className="logo flex justify-center">
                                <div className="p-4">
                                    <Image src={loginLogo} width={80} height={80} alt="logo" className="text-center" />
                                </div>
                            </div>
                            <div className="text-center mb-8">
                                <h2 className="text-xl font-black">{LoginData?.signUp?.title.t1}</h2>
                                <p className="text-xs">{LoginData?.signUp?.title.t2}</p>
                            </div>
                            <ul className="space-y-2 mb-6 text-base">
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t1}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t2}e</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t3}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t4}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t5}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-white">{LoginData?.signUp?.checkBox?.t6}</span>
                                </li>
                            </ul>
                        </div>
                        {/* <Image src={loginBg} objectFit="object-cover" alt="" /> */}
                        <div className="p-8 w-2/3 relative">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4 text-blue-950">{LoginData?.signUp?.mainContainerTitle?.t1}</h2>
                            <form>
                                <div className="mb-4">
                                    <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-white">
                                            <ReactCountryFlag countryCode="IN" svg style={{ width: '1em', height: '1em' }} className="mr-2" />
                                            +91
                                        </span>
                                        <input type="text" className="w-full px-3 py-2 border rounded-r" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="w-full px-3 py-2 border rounded" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <select className="w-full px-3 py-2 border rounded">
                                        <option>Please select Preferred Stream</option>
                                    </select>
                                </div>
                                <div className="mb-4">

                                    <select className="w-full px-3 py-2 border rounded">
                                        <option>Please select Preferred Level</option>
                                    </select>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input type="checkbox" className="mr-2 rounded-full" />
                                    <label className="text-gray-700"></label>{LoginData?.signUp?.mainContainerTitle?.t2}
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">{LoginData?.signUp?.button?.text}</button>
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


