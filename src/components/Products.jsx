import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Products = () => {
    const loadeddata = useLoaderData()

    // console.log(loadeddata);

    return (
        <div className='lg:max-w-7xl md:max-w-3xl max-w-xs  mx-auto'>
            <h1 className='text-5xl my-27 text-center font-extrabold'>PRODUCTS</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  '>
                {
                    loadeddata.map(product => <Card key={product._id} product = {product}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;