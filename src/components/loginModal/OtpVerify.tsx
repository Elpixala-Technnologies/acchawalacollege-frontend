"use client";
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import { loginLogo } from '@/asset';
import { LoginData } from '@/data/LoginData';

export default function OtpVerify() {
    const [isOpen, setIsOpen] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleChange = (index: number, value: string) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    return (
        <>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsOpen(true)}
            >
                Register
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white flex flex-col sm:flex-row rounded-lg shadow-lg w-full max-w-4xl">
                        <div className="bg-custom text-white p-8 rounded-l-lg w-full sm:w-1/3">
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
                        <div className="p-10 md:w-2/3 relative overflow-y-auto max-h-full">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                            <div className="max-w-md w-full space-y-4 p-10">
                                <h2 className="mt-1 text-3xl leading-9 font-bold text-gray-950">
                                    {LoginData?.otpData?.t1}
                                </h2>
                                <p className="mb-6 text-lg leading-5 text-gray-600">
                                    {LoginData?.otpData?.t2}
                                </p>
                                <form className="mt-4 space-y-4">
                                    <div className="mb-4">
                                        {/* Your form fields */}
                                    </div>
                                    <div>
                                        <span className="text-black">Enter OTP</span>
                                    </div>
                                    <div className="flex justify-between space-x-2">
                                        {otp.map((_, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                value={otp[index]}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                                className="w-10 h-10 text-center border underline border-gray-300 rounded"
                                                max="1"
                                            />
                                        ))}
                                    </div>
                                    <div className="underline">
                                        <a href="#" className="text-blue-600">Resend OTP</a>
                                    </div>
                                    <div className="flex items-center">
                                        {/* Checkbox and label */}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                                        >
                                            {LoginData?.otpData?.button2?.text}
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center p-5 text-xs leading-5 text-gray-500">
                                    By proceeding ahead you expressly agree to the Achhawala College{' '}
                                    <a href="#" className="underline">
                                        Terms & Conditions
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="underline">
                                        Privacy Policy
                                    </a>
                                </div>
                                <div className="mt-6 text-center text-sm leading-5">
                                    <p>
                                        Don't have an account yet?{' '}
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                        >
                                            Sign up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
