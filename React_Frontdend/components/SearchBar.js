import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <form className="grid grid-cols-4 gap-4 items-end" onSubmit={onSearch}>
        {/* Hospital input field */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Patients</label> {/* Increased bottom margin */}
        <input
            type="text"
            placeholder="Search Patient..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Doctor input field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Doctors</label>
          <input
            type="text"
            placeholder="Search Doctor..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Specialization input field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
          <input
            type="text"
            placeholder="Search specialization..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Date input field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
