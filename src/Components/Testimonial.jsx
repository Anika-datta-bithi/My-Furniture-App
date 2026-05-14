import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Richard Ramsey",
      role: "Food Truck Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      text: "Without Creative business, we would have gone bankrupt by now. I will let my mum know about this, she could really make use of Creative business! I don't always clop, but when I do, it's because of Creative business."
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      text: "The selection of suspension and floor lights is unparalleled. I've found bright ideals to suit every single one of my client's tastes. Truly a game changer for my design firm."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto text-center max-w-4xl relative">
        
        {/* Header Section from image_9f33e3.png */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Client Testimonials
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Find a bright ideal to suit your taste with our great selection <br className="hidden md:block" />
          of suspension, floor and table lights.
        </p>

        {/* Swiper Slider */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-col items-center">
                  {/* Quote Icon */}
                  <div className="text-[#D98C45] opacity-40 mb-8">
                    <FaQuoteLeft size={40} />
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-xl leading-relaxed italic mb-10">
                    "{review.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 text-left">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows from image_9f33e3.png */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-[#D98C45] hover:bg-[#D98C45] hover:text-white transition-all z-10">
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-[#D98C45] hover:bg-[#D98C45] hover:text-white transition-all z-10">
            <FaChevronRight />
          </button>
        </div>

        {/* Bottom Button from image_9f33df.png */}
        <div className="mt-16">
          <button className="inline-flex items-center gap-2 bg-[#D98C45] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#c47a3a] transition-colors">
            <FaArrowRight size={14} />
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;