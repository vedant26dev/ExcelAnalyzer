import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Navbar import removed as per plan

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to check credentials)
    // On success, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Navbar removed */}

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-300"> {/* Styled container */}
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Login</h2> {/* Styled heading */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label> {/* Styled label */}
              <input
                type="email"
                id="email"
                // Styled input field
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label> {/* Styled label */}
              <input
                type="password"
                id="password"
                 // Styled input field
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
               // Styled button with vibrant green background and rounded corners
              className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold text-lg transition duration-300 ease-in-out shadow-md"
            >
              Login
            </button>
          </form>
          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <Link to="/forgot-password" className="text-blue-800 hover:underline text-sm">Forgot Password?</Link>
          </div>
          {/* Link to Register Page */}
          <div className="mt-4 text-center">
            <span className="text-gray-600 text-sm">Don't have an account? </span>
            <Link to="/register" className="text-blue-800 hover:underline text-sm font-semibold">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
