import React from 'react';
import { Link } from 'react-router';
// Using Font Awesome and Ionicons from react-icons
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaSearch, 
  FaShoppingCart,
  FaTwitter 
} from 'react-icons/fa';
import { IoMdBriefcase } from 'react-icons/io';

const Navbar = () => {
  // Navigation items array for cleaner mapping
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full flex flex-col">
      {/* Top Bar - Brown Theme from image_d45016.png */}
      <div className="bg-[#5D2E17] text-white py-2 px-6 md:px-16 flex justify-between items-center text-[13px]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={12} />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={12} />
            <span>contact@yourwebsite.com</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:opacity-80" />
          <FaInstagram className="cursor-pointer hover:opacity-80" />
          <FaLinkedinIn className="cursor-pointer hover:opacity-80" />
          <FaTwitter className="cursor-pointer hover:opacity-80" />
          <div className="pl-2 border-l border-white/30 ml-2">
            <FaSearch className="cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white py-5 px-6 md:px-16 flex justify-between items-center border-b border-gray-100">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="text-[#D98C45]">
             {/* Sofa Icon representing the logo in image_d45016.png */}
            <svg width="42" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,13V7a2,2,0,0,0-2-2H6A2,2,0,0,0,4,7v6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H3v1a1,1,0,0,0,2,0V18H19v1a1,1,0,0,0,2,0V18h1a1,1,0,0,0,1-1V16A3,3,0,0,0,20,13Z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-black">Furniture</span>
        </div>

        {/* Navigation Links using react-router Link */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`text-[15px] font-medium transition-colors ${
                link.name === 'Home' ? 'text-[#D98C45]' : 'text-gray-600 hover:text-[#D98C45]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Cart/Price Section */}
        <div className="flex items-center gap-3 text-gray-800">
          <span className="font-semibold text-lg">$0.00</span>
          <div className="relative p-1">
            <FaShoppingCart size={22} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;