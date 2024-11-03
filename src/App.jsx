import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import SchemeDetails from "./pages/SchemeDetails";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Router>
      <nav className="bg-black bg-opacity-80 w-full z-10 p-4 shadow-md fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            <Link
              to="/"
              className="hover:text-green-400 transition duration-500 hover:end-24"
            >
              GSAS
            </Link>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-300 text-lg font-medium hover:text-green-500 transition duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/schemes"
                className="text-gray-300 text-lg font-medium  hover:text-green-500 transition duration-500"
              >
                Schemes
              </Link>
            </li>
            {isAuthenticated && (
              <div className="flex gap-2 ">
                <h2 className="text-gray-300 text-lg font-medium">
                  Welcome, {user.name}
                </h2>
                {/* <img
                  className="rounded-full h-8 w-8"
                  src={user.picture}
                  alt={user.name}
                /> */}
              </div>
            )}
            ,
            {isAuthenticated ? (
              <button
                className="text-gray-300 text-lg transition duration-500 font-medium hover:text-red-500 hover:underline "
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className="text-gray-300 text-lg font-medium hover:text-green-500 hover:underline transition duration-500"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/scheme-details/:schemeId" element={<SchemeDetails />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GSAS. All rights reserved.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
