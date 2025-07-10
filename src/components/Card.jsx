import React from 'react';
import { Link } from 'react-router';

const Card = ({ product }) => {
    const { image, name, price, _id } = product

    return (
        <div>
            <div className="card bg-base-100 w-80 md:w-90 shadow-sm">
                <figure>
                    <img className='w-full h-70 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`details/${_id}`}>
                            <button className="btn btn-primary bg-[#4e0e20] border-0">Details</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;