'use client'; // Marking the component as a client component

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Header } from "@/components/layout/Header"; // Import Header
import { Footer } from "@/components/layout/Footer"; // Import Footer

export default function Products() {
  console.log("Rendering Products component");

  // State to manage the view type (grid or list)
  const [isGridView, setIsGridView] = useState(true);
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle between grid and list view
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  // Array of product objects with unique content
  const products = [
    {
      title: "Mailer Boxes",
      alt_title: "Packaging Mailer Boxes",
      image: "path/to/image1.jpg",
      description: "Corrugated mailer boxes are perfect for eCommerce packaging and shipping, giving your customers an exciting unboxing experience from the get-go.",
      subDescription: "MOQ 100 UNITS."
    },
    {
      title: "Folding Cartons",
      alt_title: "Packaging Folding Cartons",
      image: "path/to/image2.jpg",
      description: "Custom printed folding carton boxes, also known as product boxes, are perfect for individual product packaging and lightweight items.",
      subDescription: "Sub description for Product 2."
    },
    {
      title: "Ridged Boxes",
      alt_title: "Packaging Ridged Boxes",
      image: "path/to/image3.jpg",
      description: "Custom printed rigid boxes, also known as gift boxes, are perfect for high end or luxury products to create a premium unboxing experience.",
      subDescription: "Sub description for Product 3."
    },
    {
      title: "Drawer Boxes",
      alt_title: "Packaging Drawer Boxes",
      image: "path/to/image4.jpg",
      description: "Showcase your products in an elegant way with rigid drawer boxes. Use a ribbon pull tab or a custom thumb notch for a seamless sliding drawer experience.",
      subDescription: "Sub description for Product 4."
    },
    {
      title: "Magnetic Rigid Boxes",
      alt_title: "Packaging Magnetic Rigid Boxes",
      image: "path/to/image5.jpg",
      description: "The ultimate package for luxury. Use custom magnetic closure boxes to elevate the value of your products and provide a premium brand experience",
      subDescription: "Sub description for Product 5."
    },
    {
      title: "Custom Box Inserts",
      alt_title: "Packaging Custom Box Inserts",
      image: "path/to/image6.jpg",
      description: "Present products beautifully in custom box inserts that are moulded to the shape of your products for a secure and snug fit.",
      subDescription: "Sub description for Product 6."
    },
    {
      title: "Custom Foam Inserts",
      alt_title: "Packaging Custom Foam Inserts",
      image: "path/to/image7.jpg",
      description: "Showcase your products elegantly and protect fragile or delicate products with custom foam inserts.",
      subDescription: "Sub description for Product 7."
    },
    {
      title: "Custom Box Dividers",
      alt_title: "Packaging Custom Box Dividers",
      image: "path/to/image8.jpg",
      description: "Use box dividers or partitions to easily organize and pack products inside your box. Create multiple compartments to separate different sized products from one another.",
      subDescription: "Sub description for Product 8."
    },
    {
      title: "Display Boxes",
      alt_title: "Packaging Display Boxes",
      image: "path/to/image9.jpg",
      description: "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
      subDescription: "Sub description for Product 9."
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Add Header here */}
      <main className="container mx-auto p-4 flex-1">
        {/* Main title of the products page */}
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="mb-4">Explore our range of products.</p>
        <Link href="/" className="text-blue-600 hover:underline">Go back to Home</Link>
        
        {/* Subtitle for the product search section */}
        <h2 className="text-2xl font-semibold mt-8">Find the right products</h2>
        
        {/* Search bar and view toggle button */}
        <div className="flex items-center mt-4">
          <input 
            type="text" 
            placeholder="Search packaging" 
            className="border rounded-l-md p-2 flex-grow"
            value={searchQuery} // Bind the input value to the searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state on input change
          />
          <button className="bg-blue-500 text-white rounded-r-md p-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={toggleView} 
            className="ml-2 bg-gray-200 text-gray-700 p-2 rounded"
          >
            {isGridView ? 'List View' : 'Grid View'}
          </button>
        </div>
        
        {/* Product cards section */}
        <div className={`grid ${isGridView ? 'grid-cols-3' : 'grid-cols-1'} gap-4 mt-6`}>
          {filteredProducts.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 mx-2 bg-white shadow-md">
              {/* Product title */}
              <h3 className="font-bold">{product.title}</h3>
              {/* Product image */}
              <img src={product.image} alt={product.alt_title} className="w-full h-32 object-cover mb-2" />
              {/* Product description */}
              <p>{product.description}</p>
              <p className="text-gray-500">{product.subDescription}</p>
              {/* Button to view product details */}
              <button className="bg-blue-500 text-white mt-2 p-2 rounded">View Product</button>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}
