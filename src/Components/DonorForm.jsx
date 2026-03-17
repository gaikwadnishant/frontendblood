import React, { useState } from "react";
import axios from "axios";
import { getErrorMessage } from "../api/http";

const baseURL = import.meta.env.VITE_API_URL || "https://backendblood-937n.onrender.com";

export const DonorForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    bloodgroup: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await axios.post(`https://backendblood-937n.onrender.com/user/add`, {
        // send in backend's expected shape
        UserName: formData.name,
        UserMail: formData.email,
        UserDOB: formData.dob,
        UserBloodGroup: formData.bloodgroup,
      });

      alert("Donor Registered Successfully!");
      setFormData({ name: "", email: "", dob: "", bloodgroup: "" });
    } catch (err) {
      setError(getErrorMessage(err, "Failed to register donor"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-red-50">

      <div className="w-full max-w-lg bg-white p-20 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Donor Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg">
              {error}
            </div>
          ) : null}

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.name}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
              value={formData.dob}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block mb-1 font-medium">Blood Group</label>
            <select
              name="bloodgroup"
              required
              onChange={handleChange}
              value={formData.bloodgroup}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Registering..." : "Register Donor"}
          </button>

        </form>
      </div>
    </div>
  );
};
