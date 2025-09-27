import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleCheckout = async () => {
    try {
      const cartData = cart.map(item => ({ id: item.id, qty: item.qty }));
      
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartData)
      });

      const result = await response.json();
      
      if (result.success) {
        alert(`✅ ${result.message}\nOrder ID: ${result.orderId}`);
        clearCart();
        onClose();
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (error) {
      alert('❌ Checkout failed. Please try again.');
      console.error('Checkout error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                  <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-orange-600 font-semibold">₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.qty - 1)}
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Total: ₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
