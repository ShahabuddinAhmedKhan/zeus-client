import React, { useContext } from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import Profile from './Profile';
const Navbar = () => {
    const { user} = useContext(AuthContext)
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/allEquipment"}>All Sports Equipment</Link></li>
                            <li><Link to={"/addEquipment"}>Add Equipment</Link></li>
                            <li><Link to={`/myEquipment/${user?.email}`}>My Equipment List</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={"/"}>
                        <img className=' w-20' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    {user ? <Profile></Profile> : <Link to={"login"}>
                        <button className="btn btn-ghost">
                            Login

                        </button>

                    </Link>}


                </div>
            </div>

        </div>
    );
};

export default Navbar;