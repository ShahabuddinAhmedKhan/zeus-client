import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user,  signout } = useContext(AuthContext)
    // console.log(user);
    
    const handleSignOut = () => {
        signout()
            .then(() => {

                Swal.fire({
                    title: "Successfully Logged Out!",
                    icon: "success",
                    draggable: true
                });


            })

    }
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><button onClick={handleSignOut}>Logout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;