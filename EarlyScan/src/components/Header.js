import React from 'react';
import { FaSearch, FaBell, FaUserPlus } from 'react-icons/fa'; // Import Font Awesome icons
import userProfileImage from '../New_Profile.jpg';

const Header = () => {
  return (
<div className="bg-white shadow-md px-6 py-3 flex justify-between items-center" style={{ marginBottom: '-12px' }}>
    {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white rounded-full shadow-lg">
          <FaSearch className="text-gray-500 mx-3 " />
          <input
            type="text"
            placeholder="Search Patients"
            className="p-2 text-sm bg-transparent focus:outline-none"
            style={{ width: '200px' }} // Set width as needed
          />
        </div>
      </div>

      {/* Add Patient Button and Notification Icon */}
      <div className="flex items-center space-x-4">
      <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      <FaUserPlus className="mr-2" />
          Add New Patient
        </button>
        <div className="relative">
          <button className="p-2 rounded-full bg-white shadow-sm">
            <FaBell className="text-gray-600 hover:text-gray-800" />
          </button>
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        <img
          src={userProfileImage}
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
