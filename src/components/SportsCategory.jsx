import React from 'react';
import { Link } from 'react-router';

const SportsCategory = () => {
    const sports = "Sports"
    const gym = "Gym"
    
    return (
        <div className='lg:max-w-7xl md:max-w-3xl mx-auto my-20'>
            <h1 className='text-5xl font-extrabold my-20 text-center'>Categories</h1>

            <div className='flex justify-center gap-15'>
                {/* sports */}
                <Link to={`/category/${sports}`} className="card bg-base-100 w-96 shadow-sm hover:bg-red-950 hover:text-white">
                    <div className="card-body">
                        <h2 className="card-title justify-center ">Sports</h2>
                    </div>
                    <figure>
                        <img
                            src="https://i.postimg.cc/7hzv0ypp/sports.jpg"
                            alt="Shoes" />
                    </figure>
                </Link>
                {/* sports */}
                <Link to={`/category/${gym}`} className="card bg-base-100 w-96 shadow-sm hover:bg-red-950 hover:text-white">
                    <div className="card-body">
                        <h2 className="card-title justify-center ">Gym</h2>

                    </div>
                    <figure>
                        <img
                            src="https://i.postimg.cc/15x1PfFP/gym.jpg"
                            alt="Shoes" />
                    </figure>
                </Link>
            </div>


        </div>
    );
};

export default SportsCategory;