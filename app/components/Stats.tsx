'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

interface StatProps {
  number: number
  label: string
  suffix?: string
  prefix?: string
}

function StatCounter({ number, label, suffix = '', prefix = '' }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [startCounter, setStartCounter] = useState(false)
  
  useEffect(() => {
    if (isInView) {
      setStartCounter(true)
    }
  }, [isInView])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center bg-blue-50/40 backdrop-blur-sm rounded-lg p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold text-blue-600"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {startCounter && (
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            suffix={suffix}
            prefix={prefix}
            separator=","
          />
        )}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg text-blue-800 font-medium"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    { number: 150, label: 'Projects Completed', suffix: '+' },
    { number: 95, label: 'Happy Clients', suffix: '%' },
    { number: 10, label: 'Years Experience', suffix: '+' },
    { number: 24, label: 'Support Hours', suffix: '/7' },
  ]
  
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Light shade gradients */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-blue-200/50"></div>
        <div className="absolute top-3/4 right-16 w-4 h-4 rounded-full bg-indigo-300/40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-blue-100/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-xl p-8 md:p-12 border border-blue-100/50 shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700"
        >
          Our Achievements
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}