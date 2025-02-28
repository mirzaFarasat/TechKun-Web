import React, { useEffect, useState } from 'react'
import TechKunLogoSvg from './TechKunLogoSvg'

function AboutUs() {
    const [logoSize, setLogoSize] = useState<number>(() => window.innerWidth * (360 / 1024));
    useEffect(() => {
        window.addEventListener("resize", (ev) => {
            const resizedWidth = (ev.target as any).innerWidth;
            setLogoSize(resizedWidth >= 1024? 360: resizedWidth * (360 / 1024));
        });
    }, []);

    return (
        <div className='case-responsive-container'>
            <div className=''>
                <TechKunLogoSvg size={logoSize} length={1175} />
            </div>
        </div>
    )
};

export default AboutUs;
