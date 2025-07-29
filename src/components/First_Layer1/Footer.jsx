import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-gray-700 text-sm mt-10 bg-black">
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div>
          <h1 className="text-xl font-bold mb-2">
            <span className="text-red-500">Quick</span>Show
          </h1>
          <p className="text-gray-400 max-w-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s...
          </p>
          <div className="flex space-x-4 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-28" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-28" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-400">+1-212-456-7890</p>
          <p className="text-gray-400">contact@example.com</p>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-10">
        Copyright 2025 © GreatStack. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
