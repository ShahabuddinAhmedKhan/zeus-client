
import Lottie from 'lottie-react';
import loadingg from "../assets/Animation - 1752077661181.json";


const Loading = () => {
    
    return (
        <div>
            <Lottie animationData={loadingg} loop={true} />
        </div>
    );
};

export default Loading;