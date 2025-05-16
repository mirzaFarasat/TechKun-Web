"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Dummy press mention data
const pressArticles = [
  {
    id: 1,
    publication: "TechCrunch",
    logo: "/Images/logos/techcrunch.png",
    title: "TechKun Raises $10M to Revolutionize AI Integration Services",
    snippet: "The funding will help the company expand its AI solutions across various industries and strengthen its position in the global market.",
    date: "March 15, 2023",
    url: "https://techcrunch.com"
  },
  {
    id: 2,
    publication: "Forbes",
    logo: "/Images/logos/forbes.png",
    title: "How TechKun is Transforming Enterprise Software Development",
    snippet: "TechKun's innovative approach to software development is helping enterprises accelerate their digital transformation journey.",
    date: "January 28, 2023",
    url: "https://forbes.com"
  },
  {
    id: 3,
    publication: "Business Insider",
    logo: "/Images/logos/business-insider.png",
    title: "TechKun Named Among Top 50 Tech Companies to Watch in 2023",
    snippet: "The annual list recognizes companies that are pushing boundaries and setting new standards in their respective industries.",
    date: "December 12, 2022",
    url: "https://businessinsider.com"
  },
  {
    id: 4,
    publication: "Wired",
    logo: "/Images/logos/wired.png",
    title: "The Future of Cloud Computing: Insights from TechKun's CTO",
    snippet: "In an exclusive interview, TechKun's CTO shares his vision for the future of cloud computing and how it will shape business operations.",
    date: "November 5, 2022",
    url: "https://wired.com"
  }
];

// Dummy awards data
const awards = [
  {
    id: 1,
    name: "Best Tech Workplace 2023",
    organization: "Tech Excellence Awards",
    logo: "/Images/logos/tech-excellence.png",
    year: "2023"
  },
  {
    id: 2,
    name: "Innovation in AI Solutions",
    organization: "Global Tech Summit",
    logo: "/Images/logos/global-tech-summit.png",
    year: "2022"
  },
  {
    id: 3,
    name: "Top Cloud Service Provider",
    organization: "Cloud Computing Awards",
    logo: "/Images/logos/cloud-awards.png",
    year: "2022"
  }
];

export default function Press() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            In the News
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how TechKun is making headlines and transforming the technology landscape.
          </motion.p>
        </div>
      </section>

      {/* Press Mentions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Press</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pressArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-8 w-32 bg-gray-100 rounded flex items-center justify-center">
                      {/* Placeholder for publication logo */}
                      <span className="text-gray-500 text-xs font-medium">{article.publication}</span>
                    </div>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {article.snippet}
                  </p>
                  
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${hoveredId === article.id ? 'text-blue-600' : 'text-gray-900'}`}
                  >
                    Read Article
                    <svg 
                      className={`ml-2 w-4 h-4 transition-transform duration-200 ${hoveredId === article.id ? 'translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-16 w-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {/* Placeholder for award logo */}
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{award.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{award.organization}</p>
                <p className="text-blue-600 text-sm font-medium">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Download Our Media Kit</h2>
                <p className="text-gray-600 mb-6 md:mb-0 max-w-xl">
                  Access our brand assets, company information, and press materials in one convenient package.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
                Download Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Contact</h2>
          <p className="text-gray-600 mb-6">
            For press inquiries, please contact our media relations team.
          </p>
          <a href="mailto:press@techkun.com" className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
            press@techkun.com
          </a>
        </div>
      </section>
    </div>
  );
}