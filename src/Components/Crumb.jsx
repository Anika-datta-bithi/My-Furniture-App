import React from 'react';
import { 
  FaShippingFast, 
  FaRegCreditCard, 
  FaUndoAlt, 
  FaHeadset 
} from 'react-icons/fa';

const Crumb = () => {
  const features = [
    {
      icon: <FaShippingFast size={32} className="text-[#D98C45]" />,
      title: "Free Shipping",
      description: "You will love at great low prices"
    },
    {
      icon: <FaRegCreditCard size={32} className="text-[#D98C45]" />,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards"
    },
    {
      icon: <FaUndoAlt size={32} className="text-[#D98C45]" />,
      title: "14 days Returns",
      description: "Within 30 days for an exchange"
    },
    {
      icon: <FaHeadset size={32} className="text-[#D98C45]" />,
      title: "Online Support",
      description: "24hours a days, 7 days a week"
    }
  ];

  return (
    <section className="bg-[#FAF4F0] py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-sm border border-gray-100">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center p-10 space-y-4 transition-colors hover:bg-gray-50
                ${index !== features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''}`}
            >
              <div className="mb-2">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crumb;