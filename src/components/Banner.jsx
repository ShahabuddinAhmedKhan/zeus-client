import React from 'react';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full md:h-[70vh] lg:h-[83vh] ">
                    <img
                        src={banner1}
                        className="w-full object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full md:h-[70vh] lg:h-[83vh]">
                    <img
                        className="w-full object-cover "
                        src={banner2}
                    />
                </div>
                <div id="item3" className="carousel-item w-full
                md:h-[70vh] lg:h-[83vh]">
                    <img
                        src={banner3}
                        className="w-full object-cover" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs bg-gradient-to-r from-indigo-500 from-10% to-red-800 to-90% text-white">1</a>
                <a href="#item2" className="btn btn-xs bg-gradient-to-r from-indigo-500 from-10% to-red-800 to-90% text-white">2</a>
                <a href="#item3" className="btn btn-xs bg-gradient-to-r from-indigo-500 from-10% to-red-800 to-90% text-white">3</a>
                
            </div>
        </div>
    );
};

export default Banner;