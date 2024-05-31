import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Section6({ data }: any) {
    return (
        <section className="my-5 w-full text-white">
            <Wrapper className="">
                <div className="bg-white rounded-lg p-8 mx-auto">
                    <div className="flex w-max font-bold flex-row gap-2 pt-2 [flex:1]">
                        <span className="text-4xl text-blue-950">{data?.title?.t1}</span>
                        <span className="text-4xl text-black">{data?.title?.t2}</span>
                        <span className="text-4xl text-blue-500">{data?.title?.t3}</span>
                    </div>
                    <p className="text-gray-600 mb-6 pt-2">{data?.text}</p>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 w-full lg:pr-8 mb-6 lg:mb-0">
                            <Image
                                src={data?.img}
                                alt="assistanceFrom"
                                width={529}
                                height={651}
                                className="rounded-lg w-full"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <ul className="space-y-4 gap-8">
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t1}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t2}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t3}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t4}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t5}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block bg-blue-600 text-white rounded-xl p-2 mr-4">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 pt-2">{data?.checkBoxData?.t6}</span>
                                </li>
                            </ul>
                            <button className="mt-8 bg-blue-950 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700">{data?.button?.text}</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
