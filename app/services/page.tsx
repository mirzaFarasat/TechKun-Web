import React from 'react'
import Banner from './banner'

const Services = () => {
  return (
    <div>
      <Banner />
      {/* <div className='flex row'>
        <div className='col-span-2  w-full h-40 flex-col justify-items-center bg-blue-300 text-gray-600 text-xl '>
          <h2>At Techkun, we specialize in crafting innovative and scalable software solutions tailored to meet the unique needs of businesses across industries.</h2>
          <h2>Our comprehensive suite of services spans the entire software development lifecycle, ensuring efficiency, quality, and long-term success.</h2>
          <h2> Discover our core offerings below.</h2>
        </div>
      </div> */}
      <div className='case-responsive-container bg-primary-50'>
        <div className='flex flex-col items-center mt-28 gap-2 text-center'>
          <div className='mb-2 flex flex-row'>
            <h1 className=' text-5xl font-bold pr-2 text-gray-700'>Custom Software</h1>
            <h1 className=' text-5xl font-bold text-blue-700'>Development</h1>
          </div>
          <h2 className=' text-base font-medium text-gray-700'>Whether you're looking to develop a new product or enhance existing systems<br />our custom software development services ensure that your solution is fully aligned with your goals</h2>
        </div>
        <div className=' grid grid-cols-2 place-content-center mt-16'>
          <div className='flex flex-col font-semibold gap-2'>
            <div className='flex flex-col gap-5 mt-5'>
              <div className='flex flex-col text-3xl gap-2'>
                <h1 >Full stack Development</h1>
                <h1>using modern frameworks </h1>
                <h1 >and languages like React,</h1>
                <h1>Node.js, Python, and more....</h1>
                {/* <p className='font-normal text-sm'>Frontend and backend development using modern frameworks and languages like React, Node.js, Python, and more.</p> */}
              </div>
              {/* <div>
              <h2 className='text-lg pb-1'>• API Development & Integration:</h2>
              <p className='font-normal text-sm' >Building secure and scalable APIs to connect different systems and services.</p>
            </div>
            <div>
              <h2 className='text-lg pb-1'>• Cross-Platform Development:</h2>
              <p className='font-normal text-sm'>Ensuring that your application functions seamlessly across multiple platforms (web, mobile, desktop).</p>
            </div>
            <div>
              <h2 className='text-lg pb-1'>• Performance Optimization:</h2>
              <p className='font-normal text-sm'>Fine-tuning software to ensure high performance and responsiveness.</p>
            </div> */}
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services