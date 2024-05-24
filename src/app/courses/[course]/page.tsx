import HeroSection from '@/components/courseDetailPageSections/heroSection/HeroSection'
import { courseDetailsPage } from '@/data/courseData'
import React from 'react'

export default function CourseDetail() {
  return (
    <section className='w-full bg-white'>
      <HeroSection data={courseDetailsPage?.bTech?.homeBanner} />
    </section>
  )
}
