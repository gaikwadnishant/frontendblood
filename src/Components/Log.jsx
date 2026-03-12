import React, { useState } from "react";
import { DonorForm } from "./DonorForm";

export const Log = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful (Demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      
      {/* Login Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Website Name */}
        <h1 className="text-4xl font-extrabold text-center text-red-600 tracking-wide mb-1">
          BLONATE
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Donate Blood • Save Lives
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            onClick={<DonorForm/>}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};