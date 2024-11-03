import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { subschemes } from "../data"; // Importing from data.js
import { FaSeedling, FaMoneyBillWave, FaBriefcase, FaGraduationCap, FaHeartbeat, FaHome, FaShieldAlt, FaLaptop, FaUsers, FaFutbol, FaPlane, FaTools, FaHandHoldingHeart, FaChild } from 'react-icons/fa';

const Schemes = () => {
  const categories = [
    { name: "Agriculture, Rural & Environment", icon: <FaSeedling /> },
    { name: "Banking, Financial Services and Insurance", icon: <FaMoneyBillWave /> },
    { name: "Business & Entrepreneurship", icon: <FaBriefcase /> },
    { name: "Education & Learning", icon: <FaGraduationCap /> },
    { name: "Health & Wellness", icon: <FaHeartbeat /> },
    { name: "Housing & Shelter", icon: <FaHome /> },
    { name: "Public Safety, Law & Justice", icon: <FaShieldAlt /> },
    { name: "Science, IT & Communications", icon: <FaLaptop /> },
    { name: "Skills & Employment", icon: <FaUsers /> },
    { name: "Social Welfare & Empowerment", icon: <FaHandHoldingHeart /> },
    { name: "Sports & Culture", icon: <FaFutbol /> },
    { name: "Transport & Infrastructure", icon: <FaPlane /> },
    { name: "Travel & Tourism", icon: <FaPlane /> },
    { name: "Utility & Sanitation", icon: <FaTools /> },
    { name: "Women and Child", icon: <FaChild /> },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const schemesRef = useRef(null); // Reference for the schemes section

  // Filter subschemes based on selected category
  const filteredSchemes = selectedCategory
    ? subschemes.filter((scheme) => scheme.category === selectedCategory)
    : subschemes;

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    // Scroll to the schemes section smoothly
    if (schemesRef.current) {
      schemesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Find Government <span className="text-green-600">Schemes</span>
      </h2>

      {/* Categories Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-white p-6 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1 ${
              selectedCategory === category.name ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="flex items-center justify-center flex-col"> {/* Center vertically */}
              <span className="text-4xl mb-2 text-green-600">{category.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800 text-center">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Reset category filter */}
      {selectedCategory && (
        <div className="mt-8 flex justify-center">
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            onClick={() => setSelectedCategory("")}
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* Schemes Section */}
      <div ref={schemesRef} className="mt-12 mb-9">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {selectedCategory || "All Available Schemes"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchemes.length > 0 ? (
            filteredSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-800">{scheme.name}</h3>
                <p className="text-gray-600 mt-2">{scheme.description}</p>
                <Link to={`/scheme-details/${scheme.id}`}>
                  <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-green-800 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg text-center">
              No schemes available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
