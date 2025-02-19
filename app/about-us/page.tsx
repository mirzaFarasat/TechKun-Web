import * as React from 'react'
import Head from 'next/head';

const AboutUs = () => {
  return (
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
    )
}

export default AboutUs