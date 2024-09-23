/* // ResetPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = ({ backendUrl }) => { // Accept backendUrl as a prop
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  console.log('Reset token:', token); // Debugging statement


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/reset-password`, {
        token,
        newPassword,
      });

      if (response.data.success) {
        toast.success('Password has been reset successfully', { theme: 'dark', autoClose: 1500 });
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('An error occurred. Please try again.', { theme: 'dark', autoClose: 1500 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <h2 className='text-2xl mb-4'>Reset Your Password</h2>
      <input
        type='password'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Enter your new password'
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
 */


////////////// 9:04

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const ResetPassword = ({ backendUrl }) => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Reset URL:', `${backendUrl}/api/user/reset-password`); // Debugging URL

    try {
      const response = await axios.post(`${backendUrl}/api/user/reset-password`, {
        token,
        newPassword,
      });

      if (response.data.success) {
        toast.success('Password has been reset successfully !', { theme: 'dark', autoClose: 1500 });
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('An error occurred. Please try again.', { theme: 'dark', autoClose: 1500 });
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <h2 className='text-2xl mb-4'>Reset Your Password !</h2>
      <input
        type='password'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Enter your new password'
        required
      />
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        Reset Password
      </button>
    </form>
    <OurPolicy/>
    <NewsletterBox/>
    </div>
  );
};

export default ResetPassword;
