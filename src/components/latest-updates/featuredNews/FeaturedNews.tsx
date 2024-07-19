import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import Card4 from './card4'
import Card5 from './card5'
function RecentNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2'>
          <div className='text-4xl font-bold border-b-2 border-black w-fit pb-4'> 
            <span className='text-[#2095F2]'>Featured</span> 
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
        <div className='w-full flex border border-[#0000001A] px-4 py-8 rounded-3xl'>
          {/*  first 1/3rd section */}
          <div className='w-1/3'>
            <div className='flex flex-col'>
               <Card1/>
               <Card2/>
            </div>
          </div>

           {/* second 2/3rd section   */}
          <div className='w-2/3 flex'>

            {/* 3/4th part  */}
            <div className='w-3/4 flex flex-col '>

              <Card3/>
              <Card4/>
            
            </div>

            {/* rest 1/4th part  */}
            <div className='w-1/4 flex flex-col'>
              <div>
                <Card5/>

              </div>
            </div>
          
          
          </div>

        
        </div>
      </div>
    </Wrapper>
  )
}

export default RecentNews