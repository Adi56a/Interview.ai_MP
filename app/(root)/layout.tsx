import React, { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black min-h-screen">
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Example Logo (Replace with image or SVG logo) */}
            <div className="text-2xl font-bold">Inverview.ai</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Services</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>
      <main className="mt-6 px-6">{children}</main>
    </div>
  );
};

export default RootLayout;
