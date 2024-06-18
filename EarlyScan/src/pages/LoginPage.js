import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Ensure Helmet is installed
import { FaFacebookF, FaApple, FaGoogle, FaLock, FaUser  } from 'react-icons/fa';
import './LoginPage.css'; // Import the CSS file
import MammographyAmico from '../Mammography-amico.svg'; // Import SVG

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate or implement actual login validation here
    const isValidLogin = true;  // Suppose this is set based on your authentication logic
  
    if (isValidLogin) {
      const profession = localStorage.getItem('selectedProfession');  // Retrieve the stored profession
  
      // Redirect based on the profession
      if (profession === 'doctor') {
        navigate('/doctor-dashboard');  // Navigate to Doctor Dashboard
      } else {
        navigate('/home');  // Navigate to the generic Home page
      }
    } else {
      // Handle failed login scenario (optional, not shown here)
      console.error('Login failed');
    }
  };  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 font-sans login-page">
      <Helmet>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-2xl text-left font-bold">
              <span className="text-blue-500">Early</span>Scan
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">USER LOGIN</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaApple className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your username  </p>
              {/* Sign in section */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input type="text" name="username" placeholder="Username" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-sm text-gray-500 font-bold">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-sm text-gray-500 font-bold">Forgot Password?</a>
                </div>
                <button onClick={handleLogin} className="mt-1 px-9 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 font-bold">
                  Login
                </button>
              </div>
            </div>  
          </div>
          <div className="w-2/5 bg-blue-500 text-white p-5 rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {/* SVG used here */}
            <div className="svg-wrapper">
                <img src={MammographyAmico} alt="Mammography Illustration" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
