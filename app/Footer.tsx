import Link from "next/link";
import linkedIn from "@/public/Images/Footer-icons/icons8-linkedin 2.svg"
import Xtwitter from "@/public/Images/Footer-icons/icons8-x.svg"
import Image from "next/image";
import techkunLogo from '@/app/icon.ico'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-6 text-center">
      <div className="flex justify-center items-center space-x-2">
  <Link href="/" className="w-12">
    <Image src={techkunLogo} alt="techkun-logo" className="w-full" />
  </Link>
  <h1 className="text-3xl font-semibold">TechKun</h1>
</div>
<p className="mt-6 text-md">© 2025 TechKun. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://www.linkedin.com/company/techkunex/" target="_blank" rel="noopener noreferrer">
          <Image src={linkedIn} alt="LinkedIn Image" className="w-6 h-6 hover:text-blue-200 transition"/>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <Image src={Xtwitter} alt="LinkedIn Image" className="w-6 h-6 hover:text-blue-200 transition"/>
        </a>
      </div>
    </footer>
  );
}

