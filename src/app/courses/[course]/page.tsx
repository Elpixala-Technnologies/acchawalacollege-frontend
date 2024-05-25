import CourseDetail from '@/components/courseDetailPageSections/courseDetail/CourseDetail'
import HeroSection from '@/components/courseDetailPageSections/heroSection/HeroSection'
import { courseDetailsPage } from '@/data/courseData'
import React from 'react'

export default function CourseDetailPage() {
  return (
    <section className='w-full bg-white'>
      <HeroSection data={courseDetailsPage?.bTech?.homeBanner} />
      <CourseDetail data={courseDetailsPage?.bTech?.courseDetails} faqs={courseDetailsPage?.bTech?.faqs} />
    </section>
  )
}
