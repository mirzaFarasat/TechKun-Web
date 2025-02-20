import React from 'react';
import Image from 'next/image';
import missionImage from '@/public/Images/mission-image/Mission-image.webp';

export default function AboutUs(){

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
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div>
        <title>Why Choose Us?</title>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Why choose us?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/dN6hfTYc-McnHkucJ_hD8d3bR5Cq1DLZz9dHsFniFm4.jpg"
                alt="Icon of a delivery truck"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-600"> Post-Launch Support</h2>
            <p className="text-gray-600">Our partnership doesn’t end at deployment. We offer ongoing support, maintenance, and upgrades</p>
          </div>
          <div className="bg-blue-500 shadow-lg rounded-lg p-6 w-80">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/3SQ5mGV9gswmkg00u7SFnYEZOHVdltN-Rau4CW8y2JQ.jpg"
                alt="Icon of an umbrella"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">INNOVATIVE SOLUTIONS</h2>
            <p className="text-white">We don’t just build software—we craft cutting-edge solutions that drive business success.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/pqKdB5HWcdUsoqgpsDW_MEBsztJuW9U5jWRkznLSV60.jpg"
                alt="Icon of a star badge"
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-blue-600">Security & Scalability</h2>
            <p className="text-gray-600">We build software with security, scalability, and performance in mind, ensuring your business is future-proof</p>
          </div>
        </div>
      </div>
    </div>
  )
}
