
import Link from 'next/link';
import { FaUser, FaTools, FaLaptopCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 flex justify-center shadow-md fixed top-0 left-0 right-0 z-10">
      <ul className="flex space-x-6 text-lg font-semibold">
        <li><Link href="/"><span className="hover:scale-110 transition-transform flex items-center">🏠 Home</span></Link></li>
        <li><Link href="/about"><span className="hover:scale-110 transition-transform flex items-center"><FaUser className="mr-2" /> About</span></Link></li>
        <li><Link href="/skills"><span className="hover:scale-110 transition-transform flex items-center"><FaTools className="mr-2" /> Skills</span></Link></li>
        <li><Link href="/services"><span className="hover:scale-110 transition-transform flex items-center"><FaLaptopCode className="mr-2" /> Services</span></Link></li>
        <li><Link href="/portofolio"><span className="hover:scale-110 transition-transform flex items-center"><FaBriefcase className="mr-2" /> Portfolio</span></Link></li>
        <li><Link href="/contact"><span className="hover:scale-110 transition-transform flex items-center"><FaEnvelope className="mr-2" /> Contact</span></Link></li>
      </ul>
    </nav>
  );
}
