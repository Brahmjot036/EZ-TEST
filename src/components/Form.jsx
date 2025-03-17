import React, { useState } from "react";

const Form = ({ isDark }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // Handles both error & success messages
  const [isError, setIsError] = useState(false); // Track error state

  // Email Validation Function
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsError(false);

    if (!email) {
      setStatus("Email is required");
      setIsError(true);
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Invalid email format");
      setIsError(true);
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 422) {
        setStatus("Emails ending with @ez.works are not allowed");
        setIsError(true);
      } else if (response.status === 200) {
        setStatus("Submitted Successfully!");
        setIsError(false);
        setEmail("");
      } else {
        setStatus(data.message || "Something went wrong");
        setIsError(true);
      }
    } catch (error) {
      setStatus("Server error, please try again later.");
      setIsError(true);
    }
  };

  return (
    <form
      className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 rounded-lg w-full max-w-lg transition-all duration-300 
        ${isDark ? "bg-transparent border-white/20 backdrop-blur-lg text-white" : "bg-transparent text-gray-900"}
      `}
      onSubmit={handleSubmit}
    >
      {/* INPUT FIELD */}
      <input
        type="email"
        placeholder={status ? status : "Enter your email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`outline-none flex-1 p-3 text-xs sm:text-sm md:text-md lg:text-lg transition-all duration-300 rounded-md placeholder-opacity-80 border w-full
          ${isDark ? "text-white border-white/30 focus:border-orange-400" : "text-gray-900 border-gray-300 focus:border-orange-500"} 
          ${isError ? "placeholder-red-500 border-red-500 text-red-500" : status ? "placeholder-green-500 text-green-500 border-green-500" : ""}
        `}
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-6 py-2 rounded-lg text-white font-semibold shadow-lg hover:from-orange-400 hover:to-orange-500 transition-all text-sm sm:text-md md:text-lg"
      >
        Contact Me
      </button>
    </form>
  );
};

export default Form;
