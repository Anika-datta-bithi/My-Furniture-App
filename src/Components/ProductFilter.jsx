import React, { useState, useEffect } from 'react';
import { FaEye, FaRegHeart } from 'react-icons/fa';

const ProductFilter = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    // 1. Target the exact name: Product.json
    fetch('/Product.json')
      .then((res) => {
        if (!res.ok) throw new Error("Could not find Product.json in public folder");
        return res.json();
      })
      .then((data) => {
        console.log("Data loaded successfully:", data); // Check your console for this!
        setAllProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  };

  const categories = ['All', 'Chair', 'Table', 'Sofa', 'Cupboard'];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        
        {/* Filter Bar */}
        <div className="flex justify-center items-center mb-12 border border-gray-100 inline-flex mx-auto overflow-hidden rounded-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-8 py-3 text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-[#D98C45] text-white' 
                : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="bg-[#F2F2F2] relative aspect-square flex items-center justify-center p-8 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-all duration-500"
                  />
                  
                  {/* Hover Icons */}
                  <div className="absolute right-0 top-6 flex flex-col translate-x-full group-hover:translate-x-0 transition-all duration-300">
                    <div className="bg-white p-3 cursor-pointer hover:bg-[#D98C45] hover:text-white border-b border-gray-100">
                      <FaEye size={16} />
                    </div>
                    <div className="bg-[#FF7A7A] p-3 text-white cursor-pointer hover:bg-red-600">
                      <FaRegHeart size={16} />
                    </div>
                  </div>

                  <button className="absolute bottom-0 left-0 w-full bg-[#D98C45] text-white py-3 font-semibold translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="mt-4 text-left">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-[#D98C45] font-bold mt-1">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-400">
              No products found. Please check your JSON file path.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;