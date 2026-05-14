import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-[#FAF4F0] min-h-[500px] flex items-center px-6 md:px-16 lg:px-24 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content Side */}
        <div className="w-full text-left md:w-1/2 space-y-6">
          <span className="text-[#D98C45] text-sm font-semibold tracking-widest uppercase">
            Only This Weekend Off Sale
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Outdoor-friendly <br /> design collection
          </h1>
          
          <p className="text-gray-600 text-lg md:max-w-md leading-relaxed">
            Furniture consists of large objects such as tables, chairs, or beds 
            that are used in a room for sitting or lying on or for putting 
            things on or in.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-[#D98C45] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#c47a3a] transition-colors"
            >
              <FaArrowRight size={14} />
              Shop Collection
            </Link>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* 
            You would replace 'your-image-path.png' with the actual path 
            to the furniture image shown in image_d195fd.png 
          */}
          <div className="relative w-full max-w-md">
            <img 
              src="path-to-your-furniture-image.png" 
              alt="Outdoor Furniture Collection" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;