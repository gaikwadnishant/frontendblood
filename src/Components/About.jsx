import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 to-red-100">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 bg-red-600 text-white">
        <h1 className="text-5xl font-bold mb-4">About BLONATE</h1>
        <p className="text-lg max-w-3xl">
          BLONATE is a modern blood donation platform connecting donors with 
          patients in need. We believe every drop of blood can save a life.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 px-10 py-20">
        
        {/* Mission */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            Our mission is to build a strong and reliable network of blood donors 
            to ensure that no life is lost due to blood shortage. We promote 
            awareness and encourage voluntary blood donation.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg">
            Our vision is to become a trusted digital platform that connects 
            hospitals, patients, and donors seamlessly with transparency and care.
          </p>
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="bg-red-600 text-white text-center px-10 py-20">
        <h2 className="text-3xl font-semibold mb-6">Why Donate Blood?</h2>
        <p className="text-lg max-w-4xl mx-auto mb-4">
          Every blood donation can save up to three lives. Blood is essential for 
          surgeries, accident victims, cancer treatments, and emergency situations.
        </p>
        <p className="text-lg max-w-4xl mx-auto">
          By donating blood, you give someone a second chance at life.
        </p>
      </div>

    </div>
  );
};