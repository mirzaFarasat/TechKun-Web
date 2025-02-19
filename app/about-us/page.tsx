import React from 'react';
import Image from 'next/image';
import missionImage from '@/public/Images/mission-image/Mission-image.webp';

export default function ourMission(){

  return(
    <div className="bg-primary-50 ">
            <h1 className='text-center text-primary-700 uppercase font-bold text-5xl'>Innovating for the Future</h1>
      <div className='py-16 px-5 md:px-12 lg:px-24'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
      {/* Left side text content */}
      <div className='md:w-1/2 text-center md:text-left'>
        <h2 className='text-primary-600'><b>EMPOWERING BUSINESS</b></h2>
        <h1 className=' md:text-5xl font-bold text-black-900 leading-tight mb-4'>Innovating Technology for a Smarter Future</h1>
        <p className='text-gray-500'>
          At TechKun, our mission is to revolutionize businesses through innovative technology solutions that drive agility, scalability, and growth. We believe in delivering simple yet powerful digital transformations, ensuring our clients thrive in an evolving digital landscape.
        </p>
      </div>
      {/* Right side image */}
      <div className="md:w-1/2 flex justify-center">
      <Image
        src={missionImage}
        alt="TechKun Mission"
        className=" shadow-lg rounded-lg"
        />
          </div>
        </div>
        </div>
        </div>
  )
}
