import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AviewHome from '../../pages/admin/AViewHome';
import ABooking from '../../pages/admin/Booking';
import AHome from '../../pages/admin/Home';
import ViewUser from '../../pages/admin/ViewUser';
import AddHome from '../../pages/seller/AddHome';
import Booking from '../../pages/seller/Booking';
import EditHome from '../../pages/seller/EditHome';
import EditProfile from '../../pages/seller/EditProfile';
import Home from '../../pages/seller/Home';
import ViewHome from '../../pages/seller/ViewHome';
import ViewProfile from '../../pages/seller/ViewProfile';
const NavPage = () => {

    return (

        <div>
            <Routes>

                {/* seller route */}

                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='addHome' element={<AddHome />}></Route>
                <Route path='viewHome' element={<ViewHome />}></Route>
                <Route path='editHome/:id' element={<EditHome />}></Route>
                <Route path='booking' element={<Booking />}></Route>
                <Route path='viewProfile' element={<ViewProfile />}></Route>
                <Route path='editProfile' element={<EditProfile />}></Route>
                {/* admin route */}

                <Route path='/ahome' element={<AHome />}></Route>
                <Route path='aviewHome' element={<AviewHome />}></Route>
                <Route path='abooking' element={<ABooking />}></Route>
                <Route path='viewUser' element={<ViewUser />}></Route>


            </Routes>

        </div>

    )
}

export { NavPage };
