import React, { useEffect, useState } from 'react'
import TechKunLogoSvg from './TechKunLogoSvg'

function AboutUs() {
    const [logoSize, setLogoSize] = useState<number>(1);
    useEffect(() => {
        setLogoSize((window.innerWidth >= 1024 ? 1024 : window.innerWidth) * (400 / 1024));
        window.addEventListener("resize", (ev) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const resizedWidth = (ev.target as any).innerWidth;
            setLogoSize(resizedWidth >= 1024? 400: resizedWidth * (400 / 1024));
        });
    }, []);

    return (
        <div className='bg-primary-50 py-4 md:py-12'>
            <div className='case-responsive-container'>
                <TechKunLogoSvg size={logoSize} length={1175} />
            </div>
        </div>
    )
};

export default AboutUs;
