import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaArrowUp 
} from 'react-icons/fa';

const Footer = () => {
  // Function to scroll back to the Navbar at the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#5D2E17] text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="text-white">
              <svg width="40" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,13V7a2,2,0,0,0-2-2H6A2,2,0,0,0,4,7v6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H3v1a1,1,0,0,0,2,0V18H19v1a1,1,0,0,0,2,0V18h1a1,1,0,0,0,1-1V16A3,3,0,0,0,20,13Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Furniture</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
            We are committed to responsibly. We know that living well begins with eating well so you will find no nasties are added here - just pure, simple, honest to goodness products.
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#D98C45] transition-colors" />
            <FaTwitter className="cursor-pointer hover:text-[#D98C45] transition-colors" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#D98C45] transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-[#D98C45] transition-colors" />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Shop</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Specials</li>
            <li className="hover:text-white cursor-pointer transition-colors">Wishlist</li>
            <li className="hover:text-white cursor-pointer transition-colors">On Sales</li>
            <li className="hover:text-white cursor-pointer transition-colors">Our Stores</li>
            <li className="hover:text-white cursor-pointer transition-colors">Trending</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Company</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">About</li>
            <li className="hover:text-white cursor-pointer transition-colors">Services</li>
            <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contacts</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Contact</h3>
          
          <div>
            <h4 className="font-bold text-sm uppercase mb-2">Address</h4>
            <p className="text-gray-300 text-sm">6395 Inlet Dr Mayville</p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase mb-2">Contact No.</h4>
            <p className="text-gray-300 text-sm">(716) 753-2183</p>
            <p className="text-gray-300 text-sm">(830) 281-4361</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
        <button 
          onClick={scrollToTop}
          className="bg-white text-[#5D2E17] p-3 shadow-lg hover:bg-gray-100 transition-all group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;