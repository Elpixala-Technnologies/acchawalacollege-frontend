import CollegeListSection from '@/components/collegesPageSections/collegeListSection/CollegeListSection'
import HeroSection from '@/components/collegesPageSections/heroSection/HeroSection'
import React from 'react'

export default function colleges() {
  return (
    <main className="w-full mx-auto bg-white">
        <HeroSection />
        <CollegeListSection />
    </main>
  )
}
