import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

import PersonalCard from '../PersonalCard';

const MyEquipment = () => {
    const loaded = useLoaderData()
    const [loadedData, setLoadedData] = useState(loaded)

    return (
        <div className='lg:max-w-7xl md:max-w-3xl max-w-xs mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    loadedData.map(data => <PersonalCard key={data._id} product={data} loadedData ={loadedData} setLoadedData ={setLoadedData}  ></PersonalCard>)
                }


            </div>
        </div>
    );
};

export default MyEquipment;