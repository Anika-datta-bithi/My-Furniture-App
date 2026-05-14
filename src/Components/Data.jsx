import React, { useState, useEffect } from 'react';
import { FaEye, FaRegHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching from the public folder
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-[#FAF4F0]">
      <div className="container mx-auto relative">
        
        {/* Navigation Arrows (Visual match for image_d10e9f.png) */}
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md text-gray-400 hover:text-black">
          <FaChevronLeft />
        </button>
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md text-gray-400 hover:text-black">
          <FaChevronRight />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="bg-[#F2F2F2] relative aspect-[4/5] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />

                {/* Side Actions (Eye & Heart) */}
                <div className="absolute right-0 top-10 flex flex-col gap-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <button className="bg-white p-3 hover:bg-[#D98C45] hover:text-white transition-colors">
                    <FaEye size={18} />
                  </button>
                  <button className="bg-[#FF5A5F] p-3 text-white hover:bg-red-600 transition-colors">
                    <FaRegHeart size={18} />
                  </button>
                </div>

                {/* Add to Cart Button (Bottom Slide Up) */}
                <button className="absolute bottom-0 left-0 w-full bg-[#D98C45] text-white py-3 font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Add to cart
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <p className="text-gray-400 text-sm">{item.category}</p>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-[#D98C45] font-bold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;