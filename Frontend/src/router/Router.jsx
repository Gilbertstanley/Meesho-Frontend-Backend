import React from 'react'
/* import Navbar from './components/Navbar' */
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
/* import WomenWestern from '../pages/WomenWestern' */
import Men from '../pages/Men'
import Kids from '../pages/Kids'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
 import Footer from '../components/Footer' 
import Login from '../pages/Login'
import PlaceOrder from '../pages/PlaceOrder'
import Orders from '../pages/Orders'
 import SearchBar from '../components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeKitchen from '../pages/HomeKitchen'
import BeautyHealth from '../pages/BeautyHealth'
import JewelleryAccessories from '../pages/JewelleryAccessories'
import BagsFootwear from '../pages/BagsFootwear'
import Electronics from '../pages/Electronics'
  /* import Navbar from '../components/Navbar'  */ 
/* import Sb from '../components/Sb' */
import Womenc from '../pages/Womenc'
 import Navb from '../components/Navb'
import Verify from '../pages/Verify'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'


const Router = () => {
  return (
    <>
   

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
    {/*  <Navbar />   */}
 <Navb/> 
 
      <SearchBar />  
       {/*  <Sb/>  */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/womenwestern' element={<WomenWestern />} /> */}
        <Route path='/womenc' element={<Womenc/>} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids/>} />


        <Route path='/homeandkitchen' element={<HomeKitchen/>} />
        <Route path='/beautyandhealth' element={<BeautyHealth />} />
        <Route path='/jewelleryandaccessories' element={<JewelleryAccessories />} />
        <Route path='/bagsandfootwear' element={<BagsFootwear/>} />
        <Route path='/electronics' element={<Electronics/>} /> 


        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword backendUrl={import.meta.env.VITE_BACKEND_URL}/>} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
      <Footer />
    </div>

    
    </>
  )
}

export default Router
