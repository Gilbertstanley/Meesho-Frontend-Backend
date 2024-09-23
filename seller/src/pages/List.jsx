
/////////////// last

 /* import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message, { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  const increaseStock = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/increase-stock', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success('Stock increased!', { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm '>
          <b>Stock</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
          {/* <b className='text-center'>Stock</b>  *
        </div>

     
        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            <p className='text-center'>{item.stock}</p> 

            
            <button
              onClick={() => increaseStock(item._id)}
              className='bg-blue-500 text-white py-1 px-0 rounded text-small'
            >
              Increase Stock
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List; */



///////////// 

/* import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message, { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  const increaseStock = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/increase-stock', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success('Stock increased!', { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  const decreaseStock = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/decrease-stock', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success('Stock decreased!', { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm '>
          <b>Stock</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            <p className='text-center'>{item.stock}</p>

            <button
              onClick={() => increaseStock(item._id)}
              className='bg-blue-500 text-white py-1 px-0 rounded text-small ml-2'
            >
              Increase Stock
            </button>

            <button
              onClick={() => decreaseStock(item._id)}
              className='bg-red-500 text-white py-1 px-0 rounded text-small ml-2'
            >
              Decrease Stock
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List; */


//////


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message, { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  const increaseStock = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/increase-stock', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success('Stock increased!', { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  const decreaseStock = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/decrease-stock', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success('Stock decreased!', { theme: 'dark', autoClose: 1500 });
        await fetchList();
      } else {
        toast.error(response.data.message, { theme: 'dark', autoClose: 1500 });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { theme: 'dark', autoClose: 1500 });
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm '>
          <b>Stock</b>
          <b>Name</b>
          <b  className='text-center'>Category</b>
          <b className='text-center'>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p className='text-center'>{item.category}</p>
            <p className='text-center'>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            <p className='text-center'>{item.stock}</p>

            {/* Button container to stack the buttons vertically */}
            <div className='flex flex-col items-center'>
              <button
                onClick={() => increaseStock(item._id)}
                className='bg-blue-500 text-white py-1 px-2 w-full rounded text-small'
              >
                Increase Stock
              </button>
              <button
                onClick={() => decreaseStock(item._id)}
                className='bg-red-500 text-white py-1 px-2 w-full rounded text-small mt-2'
              >
                Decrease Stock
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;







