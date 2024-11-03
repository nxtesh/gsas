import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { subschemes } from "../data"; // Importing from data.js
import AdsComponent from "./AdsComponent";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaFileAlt,
  FaClipboardList,
  FaRegPaperPlane,
  FaTimes,
} from "react-icons/fa"; // Import icons

const SchemeDetails = () => {
  const { schemeId } = useParams(); // Get the scheme id from the URL
  const scheme = subschemes.find((s) => s.id === schemeId); // Find the scheme by schemeId
  const [showModal, setShowModal] = useState(false); // State for showing/hiding modal
  const [answers, setAnswers] = useState([]); // State for storing user answers
  const [result, setResult] = useState(null); // State for eligibility result

  if (!scheme) {
    return (
      <div className="container mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-red-600">
          Scheme not found
        </h2>
      </div>
    );
  }

  const handleOpenModal = () => {
    setShowModal(true);
    setAnswers(Array(scheme.eligibilityQuestions.length).fill(null)); // Initialize answers to null
    setResult(null); // Reset result
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAnswer = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const checkEligibility = () => {
    const isEligible = answers.every((answer) => answer === "yes");
    setResult(
      isEligible
        ? "You are eligible for this scheme :)"
        : "You are not eligible for this scheme ;("
    );
  };

  return (
    <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-4xl font-bold text-center text-white">
          {scheme.name}
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Details Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-green-700" />
            Details
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {scheme.details}
          </p>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <FaCheckCircle className="mr-2 text-green-700" />
            Benefits
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {scheme.benefits.map((benefit, index) => (
              <li key={index} className="text-base">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <FaClipboardList className="mr-2 text-green-700" />
            Eligibility
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {scheme.eligibility.map((eligibility, index) => (
              <li key={index} className="text-base">
                {eligibility}
              </li>
            ))}
          </ul>
        </section>

        {/* Documents Required Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <FaFileAlt className="mr-2 text-green-700" />
            Documents Required
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {scheme.documentsRequired.map((doc, index) => (
              <li key={index} className="text-base">
                {doc}
              </li>
            ))}
          </ul>
        </section>

        {/* Application Process Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <FaRegPaperPlane className="mr-2 text-green-700" />
            Application Process
          </h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            {scheme.applicationProcess.map((step, index) => (
              <li key={index} className="text-base">
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Check Eligibility Button */}
      <div className="mt-12 text-center">
        <button
          onClick={handleOpenModal}
          className="bg-green-600 mb-12 text-white px-8 py-3 rounded-full hover:bg-green-900 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Check Eligibility
        </button>
      </div>

      <div className="flex items-center justify-center">
        <AdsComponent />
      </div>

      {/* Video Section */}
      {scheme.youtubeLink && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4 flex items-center">
            More about {scheme.name} ...
          </h2>
          {/* Video Embedding */}
          <iframe
            width="560"
            height="315"
            src={scheme.youtubeLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Modal for Eligibility Check */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white hover:text-red-900"
            >
              <FaTimes size={12} />
            </button>

            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
              Check Eligibility
            </h3>

            {scheme.eligibilityQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg text-gray-700">{question}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleAnswer(index, "yes")}
                    className={`px-6 py-2 rounded-full mr-4 ${
                      answers[index] === "yes"
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(index, "no")}
                    className={`px-6 py-2 rounded-full ${
                      answers[index] === "no"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}

            {/* Show Result if all questions are answered */}
            {answers.every((answer) => answer !== null) && (
              <div className="mt-6">
                <button
                  onClick={checkEligibility}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 w-full"
                >
                  Submit
                </button>
                {result && (
                  <p
                    className={`text-center mt-4 text-xl font-semibold ${
                      result === "You are not eligible for this scheme ;("
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {result}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemeDetails;
