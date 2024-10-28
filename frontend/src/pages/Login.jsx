import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import { Circles } from 'react-loader-spinner'; // Importing a spinner component
import Newsletter from '../components/Newsletter';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Loading state


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when the button is clicked

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.status === 200) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Registration successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
           
          });
          navigate('/login')
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.status === 200) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error('Invalid password. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error('An error occurred. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }

    // Stop loading after 4 seconds
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="div">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Side - Image Section */}
        <div className="md:w-1/2 mb-0 flex justify-center">
          <img
            style={{ width: '400px' }}
            src="https://clipart-library.com/images/ATbKL6kkc.gif" // Your image link
            alt="Login Visual"
            className="w-70" // Adjust the class as per your design needs
          />
        </div>

        {/* Right Side - Form Section */}
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-0 gap-4 text-black'> {/* Removed top margin */}
          <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>
          {currentState === 'Login' ? '' : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              className='w-full px-3 py-2 border border-gray-800'
              placeholder='Name'
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='E-mail'
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            className='w-full px-3 py-2 border border-gray-800'
            placeholder='Password'
            required
          />
          <div className='w-full flex justify-between text-sm mt-[-8px] '>
            <p className='cursor-pointer'>Forgot your Password?</p>
            {currentState === 'Login' ? (
              <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            ) : (
              <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
            )}
          </div>
          <button
            type='submit'
            className='bg-black rounded text-white font-light px-8 py-2 mt-4 flex items-center justify-center' // Changed button color to black
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <Circles color="#fff" height={20} width={20} /> // Spinner component
            ) : (
              currentState === 'Login' ? 'Log In' : 'Sign Up'
            )}
          </button>
        </form>
      </div>
      <div className='my-20'>
        <Newsletter />
      </div>
    </div>
  );
};

export default Login;
