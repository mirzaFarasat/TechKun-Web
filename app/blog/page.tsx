"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Category icons mapping
const categoryIcons: Record<string, string> = {
  "Technology": "💻",
  "Development": "🛠️",
  "Design": "🎨",
  "React": "⚛️",
  "Performance": "⚡",
  "TypeScript": "📝"
};

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    author: "Sarah Johnson",
    authorAvatar: "/images/avatars/avatar-1.jpg",
    date: "March 15, 2023",
    description: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    preview: "AI is transforming how developers approach web applications. From intelligent code completion to automated testing, these tools are making development faster and more efficient while opening new possibilities for user experiences.",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    author: "Michael Chen",
    authorAvatar: "/images/avatars/avatar-2.jpg",
    date: "February 28, 2023",
    description: "A comprehensive guide to architecting and implementing microservices using Node.js and Docker.",
    preview: "Microservices architecture offers flexibility and scalability for modern applications. This guide explores how Node.js and Docker can be leveraged to build robust, maintainable services that grow with your business needs.",
    category: "Development",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Mastering CSS Grid for Modern Layouts",
    author: "Emily Rodriguez",
    authorAvatar: "/images/avatars/avatar-3.jpg",
    date: "February 12, 2023",
    description: "Learn how to create complex, responsive layouts with CSS Grid that work across all modern browsers.",
    preview: "CSS Grid has revolutionized web layout design. With its two-dimensional system, you can create complex, responsive layouts with cleaner markup and fewer media queries than ever before.",
    category: "Design",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Complete Guide to React Hooks",
    author: "David Kim",
    authorAvatar: "/images/avatars/avatar-4.jpg",
    date: "January 25, 2023",
    description: "Everything you need to know about React Hooks and how they can simplify your component logic.",
    preview: "React Hooks have transformed how we manage state and side effects in functional components. This guide walks through essential hooks like useState and useEffect, along with custom hook patterns to simplify your codebase.",
    category: "React",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Optimizing Web Performance for Core Web Vitals",
    author: "Lisa Patel",
    authorAvatar: "/images/avatars/avatar-5.jpg",
    date: "January 10, 2023",
    description: "Strategies and techniques to improve your website's Core Web Vitals scores and boost SEO rankings.",
    preview: "Core Web Vitals have become crucial for SEO and user experience. Learn practical techniques to optimize loading performance, interactivity, and visual stability to achieve better rankings and happier users.",
    category: "Performance",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Introduction to TypeScript for JavaScript Developers",
    author: "James Wilson",
    authorAvatar: "/images/avatars/avatar-6.jpg",
    date: "December 18, 2022",
    description: "A beginner-friendly guide to TypeScript and how it can help you write more robust JavaScript code.",
    preview: "TypeScript adds static typing to JavaScript, helping catch errors earlier in development. This introduction shows how type annotations, interfaces, and generics can make your code more maintainable and robust.",
    category: "TypeScript",
    readTime: "6 min read"
  }
];

export default function Blog() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Latest Articles
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay updated with the newest design and development stories, case studies, 
              and insights shared by the TechKun team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className={`bg-gradient-to-b from-white to-gray-50 rounded-xl overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col ${hoveredId === post.id ? 'shadow-xl ring-1 ring-indigo-100 transform scale-105' : 'hover:shadow-md'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0} // For keyboard navigation
                role="article"
                aria-labelledby={`article-title-${post.id}`}
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className={`px-4 py-1.5 text-sm font-medium rounded-full inline-flex items-center ${getCategoryColor(post.category)}`}>
                      <span className="mr-1.5">{categoryIcons[post.category] || '📄'}</span>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 
                    id={`article-title-${post.id}`}
                    className="text-[20px] font-bold text-gray-900 mt-4 mb-3 line-clamp-2 transition-colors duration-200"
                  >
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center mb-5">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="text-[14px] font-medium text-gray-800">{post.author}</p>
                      <p className="text-[14px] text-gray-600">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-[15px] mb-5 line-clamp-3 flex-grow">
                    {post.preview}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className={`inline-flex items-center text-[15px] font-bold transition-colors duration-200 mt-auto text-blue-600 hover:text-blue-800 underline`}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <svg 
                      className={`ml-2 w-5 h-5 transition-transform duration-200 ${hoveredId === post.id ? 'translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-6 md:p-8 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-[15px] text-gray-700 text-center sm:text-left">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline ml-2 font-medium">
              Learn more
            </a>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => console.log('Rejected cookies')}
              className="px-5 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reject
            </button>
            <button
              onClick={() => console.log('Accepted cookies')}
              className="px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category color
function getCategoryColor(category: string) {
  switch(category) {
    case "Technology":
      return "bg-blue-100 text-blue-800 border border-blue-200";
    case "Development":
      return "bg-indigo-100 text-indigo-800 border border-indigo-200";
    case "Design":
      return "bg-purple-100 text-purple-800 border border-purple-200";
    case "React":
      return "bg-cyan-100 text-cyan-800 border border-cyan-200";
    case "Performance":
      return "bg-amber-100 text-amber-800 border border-amber-200";
    case "TypeScript":
      return "bg-blue-100 text-blue-800 border border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border border-gray-200";
  }
}