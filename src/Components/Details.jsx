import React from 'react';
import { Link } from 'react-router';

const Details = () => {
  const categories = [
    {
      id: 1,
      name: "Furnitures",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Chair",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Table",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Sofa",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      name: "Cupboard",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto text-center mb-16">
        {/* Header Section from image_d1161b.png */}
        <span className="text-[#D98C45] text-sm font-semibold tracking-widest uppercase mb-4 block">
          Categories
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Top Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
          The sales department isn't the whole company, but the whole company 
          better be the sales department.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <Link 
            to={`/category/${category.name.toLowerCase()}`} 
            key={category.id} 
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Image Container with light gray background matching image_d1161b.png */}
            <div className="bg-[#F2F2F2] w-full aspect-square flex items-center justify-center p-6 mb-4 overflow-hidden transition-all group-hover:shadow-md">
              <img 
                src={category.image} 
                alt={category.name} 
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Category Name */}
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D98C45] transition-colors">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Details;