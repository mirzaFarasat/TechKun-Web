import Link from "next/link";
import linkedIn from "@/public/Images/Footer-icons/icons8-linkedin 2.svg"
import Xtwitter from "@/public/Images/Footer-icons/icons8-x.svg"
import Image from "next/image";
import techkunLogo from '@/app/icon.ico'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-6 px-8">
      <div className="flex justify-between items-start">
        {/* Left Section: Logo & Company Info */}
        <div>
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src={techkunLogo} alt="TechKun Logo" className="w-12" />
            </Link>
            <h1 className="text-3xl font-semibold">TechKun</h1>
          </div>
          {/* Email Section */}
          <div className="mt-3">
            <h2 className="text-md font-semibold text-gray-300">Email us</h2>
            <p className="text-sm text-gray-200">info@tech-kun.com</p>
          </div>
        </div>

        {/* Right Section: Navigation Links & Social Media */}
        <div className="text-right">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-md font-medium">
            <Link href="/about" className="hover:text-blue-300">About</Link>
            <Link href="/services" className="hover:text-blue-300">Services</Link>
            <Link href="/contact" className="hover:text-blue-300">Contact</Link>
          </nav>

          {/* Social Media Links */}
          <div className="mt-4">
            <h2 className="text-md font-semibold text-gray-300">Follow us</h2>
            <div className="flex space-x-4 mt-1 justify-end">
              <a href="https://www.linkedin.com/company/techkunex/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedIn} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Image src={Xtwitter} alt="X Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="mt-6 text-sm text-center">© 2025 TechKun. All rights reserved.</p>
    </footer>
  );
}

