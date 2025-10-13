'use client'

import _Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import WhyChooseUs from './components/WhyChooseUs'
import ClientSliderSection from './components/ClientSliderSection'
// import EngagementModelSection from "./EngagementModelSection";
import Stats from './components/Stats'
import CTASection from './pages/cta'
import WhatWeDo from './pages/what-we-do'
import Services from './pages/services'
import OurProducts from './pages/our-products'
import EngagementSection from './components/EngagementSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div>
      <Banner />
      <AboutUs />
      <ClientSliderSection />
      <EngagementSection />
      <OurProducts />
      <Services />
      <WhatWeDo />
      <WhyChooseUs />
      <CTASection />
      <Stats/> 
    </div>
  )
}

