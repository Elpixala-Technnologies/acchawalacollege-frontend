import React from 'react'
import { examsListingPage } from "@/data/examsData"
import BannerSection from '@/components/examsListingPageSections/heroSection/HeroSection'
export default function examsPage() {
  return (
    <section className='w-full'>
      <BannerSection data={examsListingPage?.homeBanner} />
    </section>
  )
}
