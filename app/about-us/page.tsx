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
      <div className="bg-gray-100 min-h-screen">
              <Head>
                <title>Meet Our Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
              </Head>

              <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h1>
                <p className="text-xl font-semibold mb-2 text-gray-700">We’ve got an entire team dedicated to supporting you and your business</p>
                <p className="text-gray-600 mb-12">Get help 24/7, with our award-winning support network of payments experts.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/MM8xJhFmxaged6H_NOuAqiV2kyAgyonyvPWgbe2Q9Jw.jpg"
                      alt="Placeholder image for Emmy Rosum"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Emmy Rosum</h2>
                    <p className="text-gray-600">Customer Success Agent</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/zEPTNL1RBndwKhRwKZjoCYpy3bNF2fvI4g_Mz993Z3s.jpg"
                      alt="Placeholder image for Sophie Chamberlain"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Sophie Chamberlain</h2>
                    <p className="text-gray-600">Specialized Support</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/UgE3tWh5VXbUd2icmcJYKP49IAwXZYPLypNxKqdTFLo.jpg"
                      alt="Placeholder image for Lana Steiner"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Lana Steiner</h2>
                    <p className="text-gray-600">VP of Customer Success</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/Cdm0kCy7gZOM7tX8ALsV70vMVjMeuRmmLcje7Snk1dc.jpg"
                      alt="Placeholder image for Orlando Diggs"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Orlando Diggs</h2>
                    <p className="text-gray-600">Customer Success Lead</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/NOaSSVhL3dNo6SsifprjY7HnFwp9ld205K925sgMsI0.jpg"
                      alt="Placeholder image for Sasha Kindred"
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Sasha Kindred</h2>
                    <p className="text-gray-600">Customer Success Lead</p>
                  </div>
                </div>
              </main>
            </div>
    </div>
  )
}
