# Simple Shopping Cart

A minimal full-stack e-commerce application built with React, Node.js, and Express. This project demonstrates a clean, modern shopping cart implementation with product browsing, cart management, and checkout functionality.

## Brief Description

This shopping cart application provides a streamlined e-commerce experience with:

- **Frontend**: React with Vite, Tailwind CSS, and Context API for state management
- **Backend**: Express.js API with hardcoded product data (no database required)
- **Features**: Product grid, cart management, localStorage persistence, quantity controls, and checkout simulation

The application follows a minimalist design philosophy with clean components, professional styling, and smooth user interactions.

## Project Structure
```bash
├── backend/
│ ├── app.js # Express app configuration
│ ├── index.js # Server entry point
│ └── package.json # Backend dependencies
├── frontend/
│ ├── src/
│ │ ├── components/ # React components
│ │ │ ├── ProductCard.jsx
│ │ │ └── CartModal.jsx
│ │ ├── context/ # Context providers
│ │ │ └── CartContext.jsx
│ │ ├── App.jsx # Main application
│ │ └── main.jsx # Entry point
│ ├── tailwind.config.js # Tailwind configuration
│ └── package.json # Frontend dependencies
└── README.md
```
## Setup and Local Installation

### Prerequisites
- Node.js (v20)
- npm 

### Backend Setup

1. Navigate to the backend directory
2. Install dependencies: npm install 
3. Start the development server: nodemon index.js

### Frontend Setup
1.  Navigate to the frontend directory
2.  Install dependencies: npm install 
3. Install and configure Tailwind CSS: npm install -D tailwindcss postcss autoprefixer  && npx tailwindcss init -p  && update it
4. Start the development server:npm run dev 
 

