'use client';
import Image from 'next/image';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import ClientSliderSection from './components/ClientSliderSection'
import Stats from './components/Stats'
import CTASection from './pages/cta';
import WhatWeDo from './pages/what-we-do';
import Services from './pages/services';
import OurProducts from './pages/our-products';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Client data
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Banner />
      <AboutUs />
      <ClientSliderSection />
      <OurProducts />
      <Services />
      <WhatWeDo />
      <WhyChooseUs />
      <CTASection />
      <Stats/> 
    </div>
  );
}