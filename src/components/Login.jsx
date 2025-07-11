import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase/firebase.init';

const Login = () => {
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()

    const { login } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const providerGoogle = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        login(email, password)
        .then((result) => {
            // console.log(result);

            location.state ? navigate(location.state)
             : navigate("/")


            const lastSignInTime = result?.user?.metadata?.lastSignInTime
            const body = { lastSignInTime, email }
            fetch("https://zeus-server.vercel.app/users", {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                    },
                body: JSON.stringify(body)
                })
                
        }

        )
        .catch((err) => {
            setError(err.message)


        })


    }

    const handleSignInGoogle = () => {
        signInWithPopup(auth, providerGoogle)
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
            location.state ? navigate(location.state) : navigate("/")

        })



    }
    // console.log(error);

    return (
        <div>
            <div className='flex flex-col'>
                <div className="hero bg-base-200 ">
                    <div className="hero-content flex-col w-140">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold mb-10">To Start <span className='text-[#571414]'>Zeusing</span></h1>

                        </div>
                        <div className="card bg-base-100 w-full   shadow-2xl">
                            <div className="card-body flex flex-row">
                                <div className='flex-grow'>
                                    <form onSubmit={handleSubmit}>
                                        <fieldset className="fieldset">
                                            <label className="label">Email</label>
                                            <input
                                                name='email'
                                                type="email" className="input" placeholder="Email" />
                                            <label className="label">Password</label>
                                            <input
                                                name='password'
                                                type="password" className="input" placeholder="Password" />
                                            {
                                                error ? error : <div>
                                                    <Link to={"/resetPassword"}>Forgot Password?</Link>

                                                </div>
                                            }

                                            <button className="btn bg-[#571414] border-0 shadow-none text-white hover:bg-[#491011]">Login</button>


                                        </fieldset>
                                    </form>
                                    <h3 className='font-semibold '>New to Zeus? <Link className='text-[#571414]' to={"/register"}>Sign Up Now</Link> </h3>
                                </div>
                                <div className="divider divider-horizontal">OR</div>
                                <div className='flex flex-col pt-15 w-50 items-center'>
                                    <h1 className='text-2xl font-semibold mb-2 text-gray-500'>Login With Social</h1>
                                    <button onClick={handleSignInGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                        Login with Google
                                    </button>
                                </div>
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

export default Login;