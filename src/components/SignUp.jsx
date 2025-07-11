import React, { useContext, useState } from 'react';
import {  Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { auth } from './firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { signUp } = useContext(AuthContext)
    const [samePass, setSamePass] = useState(true)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        const passwordAgain = form.passwordAgain.value;

        if (password === passwordAgain) {
            setSamePass(true)
        }
        else {
            setSamePass(false)
        }

        const signUpInfo = { name, email, url }

        signUp(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: url
                })
                
                
                
                
                
                if (result?.user) {
                    navigate("/")

                    fetch("https://zeus-server.vercel.app/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(signUpInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Account Created Successfully",
                                    icon: "success",
                                    draggable: true
                                });

                            }
                        }
                        )

                }

            })





    }
    return (
        <div>
            <div className='flex flex-col'>
                <div className="hero bg-base-200 ">
                    <div className="hero-content flex-col w-3/6">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold mb-10">Few Steps Away From <span className='text-[#571414]'>Zeusing</span></h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input
                                            name='name'
                                            type="text" className="input" placeholder="Name" />
                                        <label
                                            className="label">Photo URL</label>
                                        <input
                                            name='url'
                                            type="text" className="input" placeholder="Photo URL" />
                                        <label className="label">Email</label>
                                        <input
                                            name='email'
                                            type="email" className="input" placeholder="Email" />
                                        <label className="label">Password</label>
                                        <input
                                            name='password'
                                            type="password" className="input" placeholder="Password" />
                                        <label className="label">Type Password Again</label>
                                        <input
                                            name='passwordAgain'
                                            type="password" className="input" placeholder="Type Password Again " />
                                        <p className='text-red-500'>
                                            {
                                                samePass ? "" : "Password does not match"
                                            }
                                        </p>
                                        <div><Link to={"/resetPassword"} className="link link-hover">Forgot password?</Link></div>
                                        <button className="btn bg-[#571414] border-0 shadow-none text-white hover:bg-[#491011]">Sign Up</button>
                                    </fieldset>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="h-30 bg-base-200 ">

                </div>
            </div>
        </div>
    );
};

export default SignUp;