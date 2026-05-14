import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const banners = [
    {
      id: 1,
      subtitle: "Furniture Featured Products",
      title: "Introducing the furniture collection",
      bgColor: "bg-[#EBEBEB]", // Light gray from image_d119f8.png
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600",
      link: "/shop"
    },
    {
      id: 2,
      subtitle: "10% OF ALL PRODUCTS",
      title: "Furniture featured Products",
      bgColor: "bg-[#DDE2E1]", // Light sage/teal from image_d119f8.png
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600",
      link: "/shop"
    }
  ];

  return (
    <section className="py-10 px-6 md:px-16 lg:px-24 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className={`${banner.bgColor} relative overflow-hidden flex items-center p-8 md:p-12 min-h-[350px] group`}
          >
            {/* Text Content */}
            <div className="w-1/2 z-10 space-y-4">
              <span className="text-[12px] uppercase tracking-wider text-gray-600 font-semibold">
                {banner.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {banner.title}
              </h2>
              <div className="pt-4">
                <Link 
                  to={banner.link} 
                  className="inline-flex items-center gap-2 bg-[#D98C45] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#c47a3a] transition-all"
                >
                  <FaArrowRight size={14} />
                  Shop Collection
                </Link>
              </div>
            </div>

            {/* Product Image */}
            <div className="w-1/2 flex justify-end items-center h-full">
              <img 
                src={banner.image} 
                alt="Featured Furniture" 
                className="max-h-[280px] object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;