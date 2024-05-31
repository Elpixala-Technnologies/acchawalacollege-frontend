import React from 'react'
import { examsListingPage } from "@/data/examsData"
import BannerSection from '@/components/examsListingPageSections/heroSection/HeroSection'
import Otp from '@/components/loginModal/Otp'
import LoginModal from '@/components/loginModal/LoginModal'
export default function examsPage() {
  return (
    <section className='w-full'>
      <BannerSection data={examsListingPage?.homeBanner} />
    </section>
  )
}
