import Lottie from 'lottie-react';
import React from 'react';
import notFound from "../assets/page-not-found.json"

const NonExist = () => {
    return (
        <div>
            <Lottie className='h-lvh' animationData={notFound} loop={true} />
        </div>
    );
};

export default NonExist;