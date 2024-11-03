import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { RandomReveal } from "react-random-reveal";
import { subschemes } from "../data"; // Import your subschemes data

import AdsComponent from './AdsComponent';
// import About from "../pages/About"

import "./animations.css"; // Add your animation styles

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const navigate = useNavigate();

  // Handle the search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() !== "") {
      // Filter schemes based on search query
      const results = subschemes.filter((scheme) =>
        scheme.name.toLowerCase().includes(query)
      );
      setFilteredSchemes(results);
    } else {
      setFilteredSchemes([]);
    }
  };

  // Handle redirection when a scheme is clicked
  const handleSchemeClick = (id) => {
    navigate(`/scheme-details/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto pt-16 px-4 sm:px-6 md:px-8 fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 text-gray-900">
          <RandomReveal
            isPlaying={true}
            duration={0.7}
            revealDuration={15}
            revealEasing="linear"
            characters="Government Scheme Assistor"
          />
          <span className="text-green-600 animate-pulse">.</span>
        </h1>

        {/* Search Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full sm:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-4 pl-10 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Display search results */}
        {filteredSchemes.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full sm:w-2/3 lg:w-1/2 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Search Results
            </h2>
            <ul>
              {filteredSchemes.map((scheme) => (
                <li
                  key={scheme.id}
                  className="mb-2 flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-gray-50 transition duration-300"
                >
                  <div className="flex items-center">
                    <FaArrowRight className="mr-3 text-green-500" />
                    <button
                      onClick={() => handleSchemeClick(scheme.id)}
                      className="text-lg text-green-600 hover:text-green-800 transition duration-300 font-medium"
                    >
                      {scheme.name}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Discover Schemes Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-4 text-gray-700">
            Discover government schemes
          </h2>
          <Link
            to="/schemes"
            className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold inline-flex items-center hover:bg-green-700 transition duration-300"
          >
            Discover Schemes
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
<div  className="flex items-center justify-center" >
<AdsComponent/>
</div>
        

        {/* About Section */}
        <section className="py-10 rounded-lg mb-12 flex flex-col lg:flex-row gap-4 items-center">
          <div className="lg:w-1/2 slide-in-left text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About us
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              GSAS is a user-friendly platform that provides a one-stop solution
              for discovering government schemes based on your eligibility.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Stop navigating through multiple government websites! GSAS helps
              you find the right schemes tailored to your needs and guides you
              on how to apply.
            </p>
            {/* <Link
              to="/about"
              className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold inline-flex items-center hover:bg-green-700 transition duration-300"
            >
              View More
              <FaArrowRight className="ml-2" />
            </Link> */}
          </div>
          <div className="lg:w-1/2 slide-in-right">
            <img
              src="https://media.istockphoto.com/id/1330214199/photo/indian-farmer-busy-using-mobile-phone-while-sitting-in-between-the-crop-seedlings-inside.jpg?s=612x612&w=0&k=20&c=PmGOwjZlQdOhETmjVwBoT4thL3mJn3VfEm5q9doj4aU="
              alt="GSAS about image"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="p-6 md:p-10 bg-white shadow-lg rounded-lg mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Why Choose GSAS?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3 text-center">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBf4ynn8YkYh4XgrHgQsaORHDFPDUWvs_eohL9QPuAQ8_3je9y"// Replace with actual benefits image
                alt="Comprehensive Coverage"
                className="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600">
                Access information on a wide range of government schemes across
                various sectors.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_isObdNSiNAo1xSWquNB8iC02gawJMk3ZWA&s"// Replace with actual benefits image
                alt="User-Friendly Interface"
                className="h-32 w-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                Easy to navigate platform with a search option to quickly find
                relevant schemes.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <img
                src="https://static.thenounproject.com/png/3967406-200.png" // Replace with actual benefits image
                alt="Tailored Recommendations"
                className=" h-32 w-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Tailored Recommendations
              </h3>
              <p className="text-gray-600">
                Get personalized scheme suggestions based on your profile and
                eligibility.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-6 md:p-10 rounded-lg mb-12 bg-gray-50 slide-in-right">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            What People Say
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src="https://media.istockphoto.com/id/1392205181/photo/brazilian-man-working-and-using-technology-in-the-field.jpg?s=612x612&w=0&k=20&c=cK3EMhQ8WaaDA2B2_VHqy0t5ViFVOBPMjp-JuBm1nwg=" // Replace with actual testimonial image
              alt="Testimonial"
              className="w-3/4 md:w-1/4 rounded-lg shadow-lg"
            />
            <div className="w-full md:w-3/4">
              <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                "GSAS made it so easy for me to find and apply for the
                government schemes I was eligible for. I didn't have to waste
                time visiting multiple websites!"
              </blockquote>
              ~
              <cite className="text-gray-700 mt-4 block font-semibold">
                - Avinash Adani  , Small Business Owner
              </cite>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
