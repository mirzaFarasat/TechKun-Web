'use client';
import React, { useEffect, useState, useRef } from 'react'
import TechKunLogoSvg from './TechKunLogoSvg'

function AboutUs() {
    const [logoSize, setLogoSize] = useState<number>(1);
    const [scrollY, setScrollY] = useState<number>(0);
    const componentRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setLogoSize((window.innerWidth >= 1024 ? 1024 : window.innerWidth) * (400 / 1024));
        
        const handleResize = (ev: Event) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const resizedWidth = (ev.target as any).innerWidth;
            setLogoSize(resizedWidth >= 1024? 400: resizedWidth * (400 / 1024));
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
            
            // Check if element is in viewport
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight * 0.8;
                setIsVisible(isInView);
            }
        };
        
        // Add event listeners
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        
        // Initial check
        handleScroll();
        
        // Clean up
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate animation based on visibility
    const logoOpacity = isVisible ? 1 : 0;
    const logoTransform = isVisible ? 'translateY(0)' : 'translateY(50px)';

    return (
        <div 
            ref={componentRef}
            className='bg-primary-50 py-4 md:py-12'
        >
            <div 
                className='case-responsive-container'
                style={{
                    opacity: logoOpacity,
                    transform: logoTransform,
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}
            >
                <TechKunLogoSvg size={logoSize} length={1175} />
            </div>
        </div>
    )
};

export default AboutUs;