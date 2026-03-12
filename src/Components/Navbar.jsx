import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Log } from "./Log";
import { Sign } from "./Sign";
import { About } from "./About";
import { DonorForm } from "./DonorForm";
import { DonorList } from "./DonorList";

export const Navbar = () => {
  return (
    <BrowserRouter>

      {/* Full Width Navbar */}
      <nav className="w-full  bg-white shadow-md">
        <div className="w-full px-10 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-red-600 tracking-wide">
            BLONATE
          </h1>

          {/* Right Menu */}
          <div className="space-x-8 text-gray-700 font-medium">
            <Link to="/register" className="hover:text-red-600 transition">
              Donor Registration
            </Link>

            <Link to="/list" className="hover:text-red-600 transition">
              All Donors
            </Link>

            <Link to="/about" className="hover:text-red-600 transition">
              About Us
            </Link>
          </div>

        </div>
      </nav>

      {/* Full Screen Pages */}
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/register" element={<DonorForm />} />
        <Route path="/list" element={<DonorList />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
};