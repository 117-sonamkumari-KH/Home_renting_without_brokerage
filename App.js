
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './component/Admin-Navbar/MainPage';
import Navbar from './component/Navbar';
import { AuthGuard } from './guard/auth.guard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnAuthorized from './pages/UnAuthorized';
import "react-toastify/dist/ReactToastify.css";
import { Index } from './pages/Index';
import Home from './pages/Home';
import ViewHome from './pages/ViewHome';
import CalulateRent from './pages/buyer/CalulateRent';
import 'antd/dist/antd.css';
import BookingSuccess from './pages/buyer/BookingSuccess';
import Booking from './pages/buyer/Booking';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/buyer/Profile';
import ForgotPassword from './pages/ForgotPassword';
import { Footer } from './component/Footer';
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/bookingSucc' element={<BookingSuccess />}></Route>
        <Route path='/ViewHome/:id' element={<ViewHome />}></Route>
        <Route path='/calculate/:id' element={<CalulateRent />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/401' element={<UnAuthorized />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>

        <Route path='/admin/*' element={
          <AuthGuard roles={['ROLE_ADMIN']}>
            <MainPage />
          </AuthGuard>
        }></Route>

        <Route path='/seller/*' element={
          <AuthGuard roles={['ROLE_SELLER']}>
            <MainPage />
          </AuthGuard>
        }></Route>



      </Routes>
      <Footer/>

    </BrowserRouter>

  );
}

export default App;
