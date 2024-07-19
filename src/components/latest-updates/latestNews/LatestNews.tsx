import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Card from './Card'

function LatestNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2'>
          <div className='text-4xl font-bold border-b-2 border-black w-fit px-6 pb-4'> 
            <span className='text-[#2095F2]'>Latest</span> 
            {" "}
            <span className='text-[#012148]'>News</span>
          </div>
          <div className='w-fit h-fit'>
            <Link href="#" className='flex items-center space-x-3'>
              <span className='text-[#020014B2]/70 text-sm'>Load More</span>
              <IoChevronForward className='h-4 w-4'/>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className='grid grid-cols-3 w-full'>
          <div className='col-span-3'>
            <Card/>
          </div>
        
        </div>
      </div>
    </Wrapper>
  )
}

export default LatestNews