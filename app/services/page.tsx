import React from 'react';
import Banner from './banner'
import ServicesBody from './ServicesBody';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientSliderSection from "../components/ClientSliderSection";

const Services = () => {
    return (
        <div>
            <Banner />
            <ClientSliderSection />
            <ServicesBody />
            <WhyChooseUs />
        </div>
    );
};

export default Services;