'use client';
import Image from 'next/image';
import Link from 'next/link';
import { RxExternalLink } from 'react-icons/rx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imLogo from '@/public/Images/logos/im-logo.webp';
import productivitiLogo from '@/public/Images/logos/productiviti-logo.png';
import hiretalenttLogo from '@/public/Images/logos/hiretalentt-logo.png';
import productivitiImage from '@/public/Images/productiviti-images/productiviti.webp';
import hiretalenttImage from '@/public/Images/hiretalentt-images/hiretalentt.png';

export default function OurProducts() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="case-responsive-container py-16 bg-white" data-aos="fade-up">
      <h2 className="mb-1 section-heading text-primary-700 text-center">
        Our Products
      </h2>
      <p className="mb-16 section-subtext text-gray-700 text-center">
        Discover Innovation. Experience Excellence.
      </p>
      <div className="flex flex-col gap-y-36">
        <div
          className="flex flex-col md:flex-row items-center gap-16"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="md:w-5/12 item-subtitle text-gray-600">
            <p className="mb-4">
              In collaboration with{' '}
              <Link href={'https://www.infomover.io'}>
                <Image
                  src={imLogo}
                  alt="infomover-logo"
                  className="w-24 inline"
                />
              </Link>
            </p>
            <h3 className="mb-4 item-title text-blue-600">
              <Link href={'https://www.productiviti.io'}>
                Productiviti <RxExternalLink size={22} className="mb-1 inline" />
              </Link>
            </h3>
            <p className="mb-4">
              Productiviti is an employee-monitoring software that provides
              real-time insights into employee productivity, activity logging,
              and productivity analytics.
            </p>
            <ul className="mb-10 list-disc pl-5 flex flex-col space-y-2">
              <li>
                <strong>Dynamic Real-Time Tracking:</strong> Monitor remote teams
                with automated timekeeping and activity logging, ensuring
                compliance and proactive issue identification.
              </li>
              <li>
                <strong>In-Depth Data Analytics:</strong> Utilize advanced
                analytics to derive actionable insights into employee performance,
                optimizing workflows and resource allocation.
              </li>
              <li>
                <strong>Centralized Workforce Management:</strong> Manage diverse
                enterprise workforces from a unified platform with role-based
                access controls for secure oversight.
              </li>
              <li>
                <strong>Automated Attendance and Resource Tracking:</strong>{' '}
                Streamline attendance management and asset tracking, providing a
                holistic view of employee availability and resource utilization.
              </li>
              <li>
                <strong>Customizable Reporting and Compliance Framework:</strong>{' '}
                Access interactive reporting tools with customizable dashboards to
                ensure adherence to industry standards and enhance transparency.
              </li>
            </ul>
            <Link href={'https://www.productiviti.io'}>
              <Image
                src={productivitiLogo}
                alt="productiviti-logo"
                className="w-36"
              />
            </Link>
          </div>
          <div className="md:w-7/12 flex justify-center">
            <Image
              src={productivitiImage}
              alt="Productiviti"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row-reverse items-center gap-16"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="md:w-5/12 md:pr-12 item-subtitle text-gray-600">
            <p className="mb-4">
              In collaboration with{' '}
              <Link href={'https://www.infomover.io'}>
                <Image
                  src={imLogo}
                  alt="infomover-logo"
                  className="w-24 inline"
                />
              </Link>
            </p>
            <h3 className="item-title text-blue-600 mb-4">
              <Link href={'https://www.hiretalentt.com'}>
                HireTalentt <RxExternalLink size={22} className="mb-1 inline" />
              </Link>
            </h3>
            <p className="mb-4">
              Discover HireTalentt, the cutting-edge platform designed to
              transform your hiring experience. Our mission is to connect
              businesses with exceptional talent efficiently and effectively.
            </p>
            <ul className="mb-10 list-disc pl-5 flex flex-col space-y-2">
              <li>
                <strong>Extensive Talent Pool:</strong> Access a diverse and
                continuously updated database of qualified candidates across
                various industries to find the perfect fit for your team.
              </li>
              <li>
                <strong>Advanced Search Filters:</strong> Utilize sophisticated
                filters to pinpoint candidates based on specific criteria,
                streamlining your selection process for optimal results.
              </li>
              <li>
                <strong>Integrated Applicant Tracking System (ATS):</strong>{' '}
                Manage applications and track candidate progress seamlessly,
                enhancing collaboration among hiring teams.
              </li>
              <li>
                <strong>AI-Powered Candidate Matching:</strong> Leverage
                artificial intelligence to match candidates to job openings,
                improving the quality and relevance of your hires.
              </li>
              <li>
                <strong>Comprehensive Analytics Dashboard:</strong> Gain valuable
                insights into your recruitment efforts with data-driven analytics,
                allowing for informed decision-making and strategy optimization.
              </li>
            </ul>
            <Link href={'https://www.hiretalentt.com'}>
              <Image
                src={hiretalenttLogo}
                alt="hiretalentt-logo"
                className="w-36"
              />
            </Link>
          </div>
          <div className="md:w-7/12 flex justify-center">
            <Image
              src={hiretalenttImage}
              alt="HireTalentt"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}