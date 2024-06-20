import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineHeart, AiOutlineAlert, AiOutlineScissor, AiOutlineCustomerService, AiOutlineInfoCircle, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'; // Using Ant Design Icons
import './styles.css'; // Make sure the path is correct based on your file structure

const Sidebar = () => {
  return (
    <div className="fixed h-full w-48 bg-blue-200 shadow-md flex flex-col justify-between custom-sidebar-font"> {/* Fixed sidebar */}
      <div>
        <div className="p-5 flex items-center justify-center"> {/* Centering the logo */}
          <h1 className="text-3xl font-bold palatino-font">
            <span className="text-blue-500">Early</span>
            <span className="text-black">Scan</span>
          </h1>
        </div>
        <ul className="mt-5 space-y-3 flex-grow"> {/* Added space-y-4 for spacing between items */}
          <li className="p-2 hover:bg-white pl-8"> {/* Added pl-8 for horizontal spacing */}
            <Link to="/dashboard" className="flex items-center space-x-4"> {/* Increased space-x to 4 for more horizontal spacing */}
              <AiOutlineHome className="text-blue-500 text-2xl" />
              <span className="text-black">Dashboard</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/patient" className="flex items-center space-x-4">
              <AiOutlineUser className="text-blue-500 text-2xl" />
              <span className="text-black">Patient</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/doctors" className="flex items-center space-x-4">
              <AiOutlineHeart className="text-blue-500 text-2xl" />
              <span className="text-black">Doctors</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/emergency" className="flex items-center space-x-4">
              <AiOutlineAlert className="text-blue-500 text-2xl" />
              <span className="text-black">Emergency</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/operation" className="flex items-center space-x-4">
              <AiOutlineScissor className="text-blue-500 text-2xl" />
              <span className="text-black">Operation</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/support" className="flex items-center space-x-4">
              <AiOutlineCustomerService className="text-blue-500 text-2xl" />
              <span className="text-black">Support</span> {/* Adjusted font color */}
            </Link>
          </li>
          <li className="p-2 hover:bg-white pl-8">
            <Link to="/model-info" className="flex items-center space-x-4">
              <AiOutlineInfoCircle className="text-blue-500 text-2xl" />
              <span className="text-black">Model Info</span> {/* Adjusted font color */}
            </Link>
          </li>
        </ul>
      </div>
      <ul className="mb-5 space-y-2"> {/* Added space-y-4 for spacing between items */}
        <li className="p-2 hover:bg-white pl-8">
          <Link to="/settings" className="flex items-center space-x-4">
            <AiOutlineSetting className="text-blue-500 text-2xl" />
            <span className="text-black">Settings</span> {/* Adjusted font color */}
          </Link>
        </li>
        <li className="p-2 hover:bg-white pl-8">
          <Link to="/logout" className="flex items-center space-x-4">
            <AiOutlineLogout className="text-blue-500 text-2xl" />
            <span className="text-black">Logout</span> {/* Adjusted font color */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
