import React from 'react'
import DiscoverTopCoursesCardProps from '@/components/cards/DiscoverTopCoursesCard'
import { FaFilter } from 'react-icons/fa6'
import { MdFilterList } from 'react-icons/md'
import Wrapper from '@/components/Wrapper'

export default function DiscoverTopColleges({ data }: any) {
    return (
        <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-bold">
                        <span className='text-blue-950'>Discover</span>
                        <span className='text-gray-950 ml-2'>Top</span>
                        <span className='text-blue-500 ml-2'>Colleges</span>
                    </h1>
                    <button className="bg-white text-black font-semibold py-2 px-4 border border-gray-400 rounded  flex items-center">
                        <MdFilterList className="mr-2" />
                        Filter
                    </button>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between">
                    {data.map((college: any, index: number) => (
                        <DiscoverTopCoursesCardProps key={index} {...college} />
                    ))}
                </div>
        </div>
    )
}
