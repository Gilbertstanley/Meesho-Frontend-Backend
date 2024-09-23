/* import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = ({ backendUrl }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/forgot-password`, { email });
      if (response.data.success) {
        toast.success('Password reset link sent to your email!', { theme: 'dark', autoClose: 1500 });
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.', { theme: 'dark', autoClose: 1500 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <h2 className='text-2xl mb-4'>Forgot Your Password?</h2>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Enter your email'
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;
 */

/////////////////////////////////////////////////////


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = ({ backendUrl }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/forgot-password`, { email });
      if (response.data.success) {
        toast.success('Password reset link sent to your email !', { theme: 'dark', autoClose: 1500 });
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      // Enhanced error logging
      console.log('Axios Error:', error.response ? error.response.data : error.message);
      toast.error('An error occurred. Please try again.', { theme: 'dark', autoClose: 1500 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <h2 className='text-2xl mb-4'>Forgot Your Password?</h2>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Enter your email'
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;