const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Products data with images
const products = [
  // Electronics
  {id: 1, name: "MacBook Pro", price: 160000, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop"},
  {id: 2, name: "iPhone 15", price: 65000, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop"},
  {id: 3, name: "AirPods Pro 3", price: 25000, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=200&fit=crop"},
  {id: 4, name: "iPad Air", price: 85000, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop"},
  {id: 5, name: "Apple Watch Ultra 3", price: 100000, category: "Electronics", imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop"},
  
  // Fashion
  {id: 6, name: "Denim Jacket", price: 2000, category: "Fashion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdZodA2bksG46zAG1IkOswd_jRbdnS3BajA&s"},
  {id: 7, name: "Sneakers", price: 1500, category: "Fashion", imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop"},
  {id: 8, name: "Sunglasses", price: 1000, category: "Fashion", imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop"},
  {id: 9, name: "Backpack", price: 2000, category: "Fashion", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop"},
  {id: 10, name: "Watch", price: 3500, category: "Fashion", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop"},
  
  // Home & Garden
  {id: 11, name: "Coffee Maker", price: 5000, category: "Home & Garden", imageUrl: "https://www.shutterstock.com/image-photo/modern-coffee-machine-glass-cup-600nw-2215468061.jpg"},
  {id: 12, name: "Table Lamp", price: 1000, category: "Home & Garden", imageUrl: "https://www.thelightkart.com/wp-content/uploads/2024/04/TL5022-D1-931x1024.jpg"},
  {id: 13, name: "Throw Pillow", price: 500, category: "Home & Garden", imageUrl: "https://media.gettyimages.com/id/1479174581/photo/stylish-colorful-pink-and-grey-cushions-on-couch-in-living-room-home-decor-details.webp?s=612x612&w=gi&k=20&c=irduwdp7C-PtXd93GjbI0xfDLS5f5GJnR7ot7B78DDo="},
  {id: 14, name: "Plant Pot", price: 800, category: "Home & Garden", imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=200&fit=crop"},
  {id: 15, name: "Wall Art", price: 4000, category: "Home & Garden", imageUrl: "https://images.bestofbharat.com/2023/09/TA-CLD-MNT-02-103-768x924.jpg"},
];

// API Routes
app.get('/api/products', (req,res) => {
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

    console.log('🛒 New Order Received:');
    console.log('Items:', cartItems);
    console.log('Timestamp:', new Date().toISOString());
    
    res.status(200).json({
      success: true, 
      message: "Order placed successfully!",
      orderId: `HIRE-ME${Date.now()}`
    });
  } catch (error) {
    res.status(500).json({success: false, message: 'Checkout failed'});
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({success: true, message: 'Server is running'});
});

module.exports = app;
