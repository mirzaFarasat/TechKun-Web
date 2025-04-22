"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Users, 
  Scale, 
  HeartHandshake, 
  Shield, 
  Rocket, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    id: 1, // Added unique id
    title: "Expert Team",
    description: "Our team of seasoned developers and designers bring decades of combined experience to every project.",
    Icon: Users
  },
  {
    id: 2,
    title: "Scalable Solutions",
    description: "Build systems that grow with your business, from startup phase to enterprise-level operations.",
    Icon: Scale
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    description: "We prioritize your needs and feedback throughout the entire development journey.",
    Icon: HeartHandshake
  },
  {
    id: 4,
    title: "Enterprise Security",
    description: "Industry-leading security protocols and practices to keep your data and users protected.",
    Icon: Shield
  },
  {
    id: 5,
    title: "Rapid Deployment",
    description: "Streamlined processes that get your solutions to market faster without sacrificing quality.",
    Icon: Rocket
  },
  {
    id: 6,
    title: "Innovative Technology",
    description: "Stay ahead with cutting-edge tech stacks and forward-thinking implementation strategies.",
    Icon: Sparkles
  }
];

const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
      className={className}
      style={{ willChange: 'opacity' }} // Added for performance
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ feature, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className="feature-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{ willChange: 'transform, opacity' }} // Added for performance
    >
      <div className="p-8">
        <motion.div 
          className="h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            backgroundColor: "rgb(165, 180, 252)",
            transition: { duration: 0.3 }
          }}
          aria-label={feature.title} // Added accessibility
        >
          <feature.Icon size={24} strokeWidth={2} aria-hidden="true" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>
      <motion.div 
        className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        aria-hidden="true"
      />
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4"
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            aria-label="Why Choose Us section"
          >
            WHY CHOOSE US
          </motion.span>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4 tracking-tight"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Technology That Transforms Your Business
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            We don't just build software—we deliver strategic solutions that drive growth and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} index={feature.id} /> // Changed to use feature.id
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <motion.button 
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgb(79, 70, 229)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            aria-label="Schedule a Consultation"
          >
            Schedule a Consultation
          </motion.button>
        </AnimatedSection>

        <AnimatedSection className="mt-20 flex justify-center">
          <motion.div 
            className="w-1 h-16 bg-indigo-200 rounded-full relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            aria-hidden="true"
          >
            <motion.div 
              className="absolute top-0 w-full bg-indigo-600 rounded-full"
              initial={{ height: "0%", top: "0%" }}
              animate={{ 
                height: "30%", 
                top: ["0%", "70%", "0%"] 
              }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 2.5,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;