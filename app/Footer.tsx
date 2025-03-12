import Link from "next/link";
import linkedIn from "@/public/Images/Footer-icons/icons8-linkedin 2.svg"
import Xtwitter from "@/public/Images/Footer-icons/icons8-x.svg"
import Image from "next/image";
import techkunLogo from '@/app/icon.ico'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-8 px-10">
      <div className="flex justify-between items-start">
        {/* Left Section: Logo & Company Info */}
        <div>
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src={techkunLogo} alt="TechKun Logo" className="w-12" />
            </Link>
            <h1 className="text-3xl font-medium">TechKun</h1>
          </div>
          {/* Email Section */}
          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-100">Email Us:</h2>
            <p className="text-md text-gray-100">info@tech-kun.com</p>
          </div>
        </div>

        {/* Right Section: Navigation Links & Social Media */}
        <div className="text-right">
          {/* Navigation Links */}
          <nav className="flex space-x-14 text-lg font-medium ">
            <Link href="/services" className="hover:text-blue-300">Services</Link>
            <Link href="/about" className="hover:text-blue-300">About Us</Link>
            <Link href="/contact" className="hover:text-blue-300">Contact Us</Link>
          </nav>

          {/* Social Media Links */}
          <div className="mt-8">
            <h2 className="text-xl font-medium text-gray-100 ">Follow Us:</h2>
            <div className="flex space-x-4 mt-1 justify-end ">
              <a href="https://www.linkedin.com/company/techkunex/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedIn} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Image src={Xtwitter} alt="X Twitter" className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="mt-8 text-md text-center">© 2025 TechKun. All rights reserved.</p>
    </footer>
  );
}

