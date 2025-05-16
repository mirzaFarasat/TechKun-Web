"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    author: "Sarah Johnson",
    authorAvatar: "/images/avatars/avatar-1.jpg",
    date: "March 15, 2023",
    description: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    category: "Technology",
    readTime: "5 min read",
    image: "/images/blog/ai-web-dev.jpg"
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    author: "Michael Chen",
    authorAvatar: "/images/avatars/avatar-2.jpg",
    date: "February 28, 2023",
    description: "A comprehensive guide to architecting and implementing microservices using Node.js and Docker.",
    category: "Development",
    readTime: "8 min read",
    image: "/images/blog/microservices.jpg"
  },
  {
    id: 3,
    title: "Mastering CSS Grid for Modern Layouts",
    author: "Emily Rodriguez",
    authorAvatar: "/images/avatars/avatar-3.jpg",
    date: "February 12, 2023",
    description: "Learn how to create complex, responsive layouts with CSS Grid that work across all modern browsers.",
    category: "Design",
    readTime: "6 min read",
    image: "/images/blog/css-grid.jpg"
  },
  {
    id: 4,
    title: "The Complete Guide to React Hooks",
    author: "David Kim",
    authorAvatar: "/images/avatars/avatar-4.jpg",
    date: "January 25, 2023",
    description: "Everything you need to know about React Hooks and how they can simplify your component logic.",
    category: "React",
    readTime: "7 min read",
    image: "/images/blog/react-hooks.jpg"
  },
  {
    id: 5,
    title: "Optimizing Web Performance for Core Web Vitals",
    author: "Lisa Patel",
    authorAvatar: "/images/avatars/avatar-5.jpg",
    date: "January 10, 2023",
    description: "Strategies and techniques to improve your website's Core Web Vitals scores and boost SEO rankings.",
    category: "Performance",
    readTime: "9 min read",
    image: "/images/blog/web-vitals.jpg"
  },
  {
    id: 6,
    title: "Introduction to TypeScript for JavaScript Developers",
    author: "James Wilson",
    authorAvatar: "/images/avatars/avatar-6.jpg",
    date: "December 18, 2022",
    description: "A beginner-friendly guide to TypeScript and how it can help you write more robust JavaScript code.",
    category: "TypeScript",
    readTime: "6 min read",
    image: "/images/blog/typescript.jpg"
  }
];

export default function Blog() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20 z-10"></div>
                  <div 
                    className={`relative h-full w-full transition-transform duration-700 ease-in-out ${
                      hoveredId === post.id ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                      {/* Placeholder for image - in production, use actual images */}
                      <span className="text-gray-400 text-sm">Image: {post.title}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${
                      hoveredId === post.id ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    Read More
                    <svg 
                      className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                        hoveredId === post.id ? 'translate-x-1' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}