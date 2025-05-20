// 'use client'
// import { useState } from "react";

// export default function CompanyNews() {
//   const [hoveredId, setHoveredId] = useState(null);
  
//   // Updated news articles with more realistic, lower-profile publications
//   const newsArticles = [
//     {
//       id: 1,
//       publication: "Enterprise AI Journal",
//       title: "TechKun Expands Integration Platform with New Multi-Cloud Capabilities",
//       snippet: "The enhanced platform now supports seamless integration across AWS, Azure, and Google Cloud environments, addressing a key pain point for enterprise customers managing hybrid infrastructures.",
//       date: "February 8, 2025",
//       url: "#"
//     },
//     {
//       id: 2,
//       publication: "Software Development Times",
//       title: "TechKun Partners with DataFlow Systems to Enhance Enterprise Data Pipelines",
//       snippet: "This strategic partnership combines TechKun's AI-driven integration technology with DataFlow's data management expertise to streamline enterprise workflows and reduce implementation time by up to 40%.",
//       date: "November 14, 2024",
//       url: "#"
//     },
//     {
//       id: 3,
//       publication: "B2B Tech Insider",
//       title: "TechKun Secures $5M in Series A Extension to Scale Customer Success Operations",
//       snippet: "Following strong customer growth in the manufacturing and healthcare sectors, the additional funding will primarily support expanded implementation services and the development of industry-specific solution templates.",
//       date: "August 23, 2024",
//       url: "#"
//     }
//   ];

//   return (
//     <div className="bg-white py-16">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company News</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {newsArticles.map((article) => (
//             <div
//               key={article.id}
//               className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
//               onMouseEnter={() => setHoveredId(article.id as unknown as null)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="bg-gray-50 py-1 px-3 rounded-full">
//                     <span className="text-gray-600 text-xs font-medium">{article.publication}</span>
//                   </div>
//                   <span className="text-sm text-gray-500">{article.date}</span>
//                 </div>
                
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">
//                   {article.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm mb-4">
//                   {article.snippet}
//                 </p>
                
//                 <a 
//                   href={article.url}
//                   className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${hoveredId === article.id ? 'text-blue-600' : 'text-gray-900'}`}
//                 >
//                   Read Article
//                   <svg 
//                     className={`ml-2 w-4 h-4 transition-transform duration-200 ${hoveredId === article.id ? 'translate-x-1' : ''}`} 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Industry Recognition Section */}
//         <div className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Recent Recognition</h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-lg p-5 shadow-sm">
//               <div className="flex items-center mb-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                   <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <span className="font-medium text-gray-900">Enterprise Integration Excellence Award</span>
//               </div>
//               <p className="text-sm text-gray-600 pl-13">Recognized by the Cloud Integration Alliance for innovative approaches to enterprise system integration, April 2025</p>
//             </div>
            
//             <div className="bg-white rounded-lg p-5 shadow-sm">
//               <div className="flex items-center mb-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                   <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <span className="font-medium text-gray-900">Fast-Growing B2B Solutions</span>
//               </div>
//               <p className="text-sm text-gray-600 pl-13">Named to SaaS Quarterly's list of fastest-growing enterprise software providers in the integration space, January 2025</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Media Contact */}
//         <div className="mt-16 text-center">
//           <p className="text-gray-600 mb-2">For media inquiries, please contact:</p>
//           <a href="mailto:press@techkun.com" className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
//             press@techkun.com
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }