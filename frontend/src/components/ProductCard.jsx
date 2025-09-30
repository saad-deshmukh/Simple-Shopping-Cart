import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-3">
          ₹{product.price.toFixed(2)}
        </p>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
