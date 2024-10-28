import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify'; // Ensure that react-toastify is installed and imported
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { backendUrl } from "../App"; // Ensure this path is correct

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });

      // Check if request is successful
      if (response.status === 200) {
        setToken(response.data.token); // Set token using the provided setToken function
        toast.success("Login successful!"); // Success toast notification
      } else {
        toast.error(response.data.message); // Error message if status is not 200
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!"); // Better error handling
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onsubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded md w-full px-3 py-2 border border-black outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p> {/* Fixed label */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded md w-full px-3 py-2 border border-black outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-blue-800" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
