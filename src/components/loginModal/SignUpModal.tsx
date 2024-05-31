// components/Modal.js
"use client";
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import { loginBg, loginLogo, logo } from '@/asset';
import { LoginData } from '@/data/LoginData';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden">
            <div className="bg-white flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-4xl mx-4 lg:mx-0 max-h-full overflow-y-auto">
                <div className="bg-custom text-white p-8 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none w-full lg:w-1/3">
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
                        {Object.values(LoginData?.signUp?.checkBox).map((item, index) => (
                            <li key={index} className="flex items-center">
                                <span className="inline-block mr-2 bg-green-500 text-white rounded-full p-1">
                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span className="text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-8 w-full lg:w-2/3 relative">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
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
                            <label className="text-gray-700">{LoginData?.signUp?.mainContainerTitle?.t2}</label>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">{LoginData?.signUp?.button?.text}</button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        By proceeding ahead you expressly agree to the Acchawalacollege <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
                    </p>
                    <p className="mt-2 text-center text-gray-600">
                        Already have an account? <a href="/" className="text-blue-500">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
