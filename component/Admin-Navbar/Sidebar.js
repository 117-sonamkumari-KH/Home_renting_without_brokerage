import React, { useEffect } from 'react';
import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/img/apple-touch-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUser } from '../../store/action/user.action';

const Sidebar = () => {

    const loginUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/login");
    }



    return (
        <>


            {
                loginUser.role[0].role === 'ROLE_SELLER' &&

                <aside id="sidebar" className="sidebar" >

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <Link to="/seller/" className="nav-link ">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="addHome" className="nav-link collapsed">
                                <i class="fa-solid fa-house"></i>
                                <span>Add Home</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewHome" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>View Home</span>
                            </Link></li>


                        <li className="nav-item">
                            <Link to="booking" className="nav-link collapsed" >
                                <i className="bi bi-app"></i>
                                <span>Booking</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewProfile" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>Profile</span>
                            </Link></li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" onClick={() => logout()}>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </a></li>
                    </ul>
                </aside>

            }


            {
                loginUser.role[0].role === 'ROLE_ADMIN' &&

                <aside id="sidebar" className="sidebar" >

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <Link to="/admin/" className="nav-link ">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="aviewHome" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>View Home</span>
                            </Link></li>


                        <li className="nav-item">
                            <Link to="abooking" className="nav-link collapsed" >
                                <i className="bi bi-app"></i>
                                <span>Booking</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewUser" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>User</span>
                            </Link></li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" onClick={() => logout()}>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </a></li>
                    </ul>
                </aside>

            }



        </>
    )
}

export { Sidebar };
