"use client";
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';
import { loginLogo } from '@/asset';
import { LoginData } from '@/data/LoginData';
import { FaCheck } from 'react-icons/fa6';

interface SignInModalProps {
    show: boolean;
    onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ show, onClose }) => {
    const [otpSent, setOtpSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleChange = (index: number, value: string) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleGetOtp = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the OTP to the user's phone number
        // For this example, we'll just update the state to show the OTP verification box
        setOtpSent(true);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    if (!show) return null;

    return (
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
                                    <FaCheck />
                                </span>
                                <span className="text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 sm:p-10 w-full sm:w-2/3 relative">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <div className="max-w-md w-full space-y-4 p-10">
                        {!otpSent ? (
                            <>
                                <h2 className="mt-1 text-3xl leading-9 font-bold text-gray-950">
                                    {LoginData?.otpData?.t1}
                                </h2>
                                <p className="mb-6 text-lg leading-5 text-gray-600">
                                    {LoginData?.otpData?.t2}
                                </p>
                                <form className="mt-8 space-y-6" onSubmit={handleGetOtp}>
                                    <div className="mb-4">
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-white">
                                                <ReactCountryFlag countryCode="IN" svg style={{ width: '1em', height: '1em' }} className="mr-2" />
                                                +91
                                            </span>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border rounded-r"
                                                placeholder="Enter your phone number"
                                                value={phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                                        >
                                            {LoginData?.otpData?.button1?.text}
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <>
                                <h2 className="mt-1 text-3xl leading-9 font-bold text-gray-950">
                                    {LoginData?.otpData?.t1}
                                </h2>
                                <p className="mb-6 text-lg leading-5 text-gray-600">
                                    {LoginData?.otpData?.t2}
                                </p>
                                <div className="mb-4">
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 border border-r-0 rounded-l bg-white">
                                            <ReactCountryFlag countryCode="IN" svg style={{ width: '1em', height: '1em' }} className="mr-2" />
                                            +91
                                        </span>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-r"
                                            placeholder="Enter your phone number"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-black">Enter OTP</span>
                                </div>
                                <form className="mt-8 space-y-6">
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
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value=""
                                                className="bg-blue-500 w-4 h-4"
                                            />
                                        </label>
                                        <span className="ml-3 text-sm font-medium text-gray-900">
                                            Keep me signed in until I sign out
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
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
                        <div className="mt-4 text-center text-sm leading-5">
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
    );
}

export default SignInModal;
