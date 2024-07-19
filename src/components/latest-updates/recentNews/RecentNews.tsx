import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import Card from './card1'
import Card2 from './card2'
import ImagesWithTextList from './ImageWithText'
function RecentNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2'>
          <div className='text-4xl font-bold border-b-2 border-black w-fit px-4 pb-4'> 
            <span className='text-[#2095F2]'>Recent</span> 
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
        <div className='flex w-full pt-6 px-2'>
          <div className='w-1/3'>
            <Card/>
          </div>
          <div className='w-2/3'>
            <div className='h-1/3 w-full'> 
              <ImagesWithTextList/>  
            </div>
            <div className='h-2/3 w-full flex'>
                <div className=''>
                  <Card2/>
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </Wrapper>
  )
}

export default RecentNews