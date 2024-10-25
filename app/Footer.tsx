// Simple Footer Component in Next.js with Tailwind CSS
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} TechKun. All rights reserved.
        </p>
        {/* <div className="flex justify-center space-x-4 text-gray-300">
          <Link href="/about">
            <a className="hover:text-white">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-white">Services</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-white">Contact</a>
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
