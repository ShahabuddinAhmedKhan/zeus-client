import React from 'react';
import { Fade,Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';

const Details = () => {
    const loaderEquipmentData = useLoaderData()
    // console.log(loaderEquipmentData);
    const { image, category, customization, delivery, description, name, price, rating, stock } = loaderEquipmentData




    return (
        <div className='my-10 md:max-w-3xl lg:max-w-7xl max-w-xs  mx-auto'>
            <div className="card justify-start lg:card-side bg-base-100 shadow-sm  gap-12 ">
                <figure className='lg:w-500 '>
                    <img className='w-full lg:h-150  rounded-2xl object-cover'
                        src={image}
                        alt="Album" />
                </figure>
                <div className=" space-y-3 w-full">
                    <Zoom><h2 className="card-title text-3xl">{name}</h2></Zoom>
                    <Fade>
                        <p><span className='font-bold'>Description:</span> {description}</p>

                        <p><span className='font-bold'>Category: </span>{category}</p>
                    </Fade>

                    <Fade>
                        <div className='grid grid-cols-2  gap-24 lg:gap-2'>
                            <div className='space-y-3'>
                                <h1><span className='font-bold'>Customization: </span>{customization}</h1>
                                <h1><span className='font-bold'>Delivery: </span>{delivery}</h1>
                                <h1><span className='font-bold'>Stock: </span>{stock}</h1>

                            </div>
                            <div className='space-y-3'>
                                <h1><span className='font-bold'>Price: </span>{price}</h1>
                                <h1><span className='font-bold'>Rating: </span>{rating}</h1>

                            </div>
                        </div>
                    </Fade>
                </div>
            </div>


        </div>
    );
};

export default Details;