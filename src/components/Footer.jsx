import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md rounded-lg overflow-hidden w-full">
   
      
      {/* Main Footer Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-base">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Returns & Refunds policy</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600"></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-base">COMPANY INFO</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">About Sheaker</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Sustainability at Sheaker</a></li>
            
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-base"> HELP</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Support center</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Sitemap</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-orange-600">Cookies Policy</a></li>
              
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-base">Payment Methods</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              <div className="w-10 h-6 bg-gray-100 rounded"></div>
              <div className="w-10 h-6 bg-gray-100 rounded"></div>
              <div className="w-10 h-6 bg-gray-100 rounded"></div>
              <div className="w-10 h-6 bg-gray-100 rounded"></div>
              <div className="w-10 h-6 bg-gray-100 rounded"></div>
            </div>
            
            {/* Socials */}
            <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-base">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className=" bg-orange-600 text-white  border-gray-100 p-5 text-center  text-xs">
        <p> &copy; {new Date().getFullYear()} sheaker. All rights reserved.</p>
        <p className="mt-2">United States | English (US) </p>
      </div>
    </footer>
  );
};

export default Footer;