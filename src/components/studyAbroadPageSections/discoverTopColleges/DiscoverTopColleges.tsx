import React from 'react'
import DiscoverTopCoursesCardProps from '@/components/cards/DiscoverTopCoursesCard'
import { FaFilter } from 'react-icons/fa6'
import { MdFilterList } from 'react-icons/md'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'

export default function DiscoverTopColleges({ data }: any) {
    return (
        // <div className="container mx-auto p-4">
        //     <Wrapper>
        //         <div className="flex justify-between items-center mb-4">
        //             <h1 className="text-4xl font-bold">
        //                 <span className='text-blue-950'>Discover</span>
        //                 <span className='text-gray-950 ml-2'>Top</span>
        //                 <span className='text-blue-500 ml-2'>Colleges</span>
        //             </h1>
        //             <button className="bg-white text-black font-semibold py-2 px-4 border border-gray-400 rounded  flex items-center">
        //                 <MdFilterList className="mr-2" />
        //                 Filter
        //             </button>
        //         </div>
        //     </Wrapper>
        //     <div className="flex flex-wrap justify-center">
        //         {data.map((college: any, index: number) => (
        //             <DiscoverTopCoursesCardProps key={index} {...college} />
        //         ))}
        //     </div>
        //     <div className="flex-center p-5">
        //         <Link href={"/"} className="w-max font-medium hover:text-blue-500">
        //             View All
        //         </Link>
        //     </div>
        // </div>
        <section className="mx-auto my-16 w-full max-w-[1440px] px-5">
            <Wrapper>
                <div className="mb-8 flex justify-between">
                    <h1 className="title1 md:ml-8">
                        <span className='text-blue-950'>Discover</span>{" "}
                        <span className='text-gray-950 ml-2'>Top</span>{" "}
                        <span className='text-blue-500 ml-2'>Colleges</span>
                    </h1>
                    {/* filter Button  */}
                    <button className="button3 h-max md:mr-8">
                        <MdFilterList className="mt-1" />
                        Filter
                        {/* <LuListFilter className="mt-1" /> Filter */}
                    </button>
                </div>
                {/* Card  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
                    {data.map((college: any, index: number) => (
                        <DiscoverTopCoursesCardProps key={index} {...college} />
                    ))}
                </div>

                <div className="flex-center p-5">
                    <Link href={"/courses"} className="w-max font-medium hover:text-blue-500">
                        View All
                    </Link>
                </div>
            </Wrapper>
        </section>
    )
}
