import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
function RecentNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2 border-[#00000033] border-b '>
          <div className='text-4xl font-bold  w-fit  pb-2'> 
            <span className='text-[#2095F2]'>Sneak</span> 
            {" "}
            <span className='text-[#012148]'>Peek</span>
          </div>
          <div className='w-fit h-fit'>
            <Link href="#" className='flex items-center space-x-3'>
              <span className='text-[#020014B2]/70 text-sm'>Load More</span>
              <IoChevronForward className='h-4 w-4'/>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div>
        
        </div>
      </div>
    </Wrapper>
  )
}

export default RecentNews