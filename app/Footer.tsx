// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// export default function Footer() {
//   return (
//     <footer className="bg-primary-700 text-white p-10">
//       <div className="container m-auto text-center">
//         <p className="text-lg mb-4">
//           © {new Date().getFullYear()} TechKun. All rights reserved.
//         </p>
//         <div>
//         <a href='https://linkedin.com/TechKun'></a>
//         <a href='https://x.com/TechKun'></a>
//       </div>
//         <p className="text-sm"><a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a></p>
//       </div>
      
//     </footer>
//   );
// }


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
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
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-blue-200 transition" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 hover:text-blue-200 transition" />
        </a>
      </div>
    </footer>
  );
}

