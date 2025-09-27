const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded products data
const products = [
  {id: 1, name: "Vintage Clock", price: 39.99, imageUrl: "https://picsum.photos/id/100/300/200"},
  {id: 2, name: "Antique Lamp", price: 49.99, imageUrl: "https://picsum.photos/id/250/300/200"},
  {id: 3, name: "Old Book", price: 15.5, imageUrl: "https://picsum.photos/id/200/300/200"},
  {id: 4, name: "Leather Bag", price: 129.5, imageUrl: "https://picsum.photos/id/15/300/200"},
  {id: 5, name: "Pocket Watch", price: 95.8, imageUrl: "https://picsum.photos/id/84/300/200"},
  {id: 6, name: "Brass Compass", price: 67.99, imageUrl: "https://picsum.photos/id/150/300/200"},
  {id: 7, name: "Vintage Camera", price: 180.00, imageUrl: "https://picsum.photos/id/250/300/200"}
];

// API Routes
app.get('/api/products', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({success: false, message: 'Server Error'});
  }
});

app.post('/api/checkout', (req, res) => {
  try {
    const cartItems = req.body;
    
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({success: false, message: 'Invalid cart data'});
    }

    // Log order details
    console.log('🛒 New Order Received:');
    console.log('Items:', cartItems);
    console.log('Timestamp:', new Date().toISOString());
    
    res.status(200).json({
      success: true, 
      message: "Order placed successfully!",
      orderId: `ORD-${Date.now()}`
    });
  } catch (error) {
    res.status(500).json({success: false, message: 'Checkout failed'});
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({success: true, message: 'Server is running'});
});

module.exports = app;
