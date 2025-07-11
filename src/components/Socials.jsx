import React from 'react';
import face from "../assets/facebook.json"
import twit from "../assets/twitter.json"
import Lottie from 'lottie-react';

const Socials = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl p-5 font-bold'>This is not even a real website, why would you click on socials, <span className='text-5xl text-red-500'>GO BACK -_-</span></h1>
            </div>
            <div className='grid grid-cols-2'>
            <Lottie animationData={face} loop={true} />
            <Lottie animationData={twit} loop={true} />
        </div>
        </div>
        
    );
};

export default Socials;