import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllEquipment = () => {
    const loaderData = useLoaderData()
    // console.log(loaderData);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Vendor</th>
                            <th>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loaderData.map((equipment, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{equipment.name}</td>
                                <td>{equipment.category}</td>
                                <td>{equipment.price}</td>
                                <td>{equipment.displayName}</td>
                                <td><Link to={`/details/${equipment._id}`}><button className="btn btn-outline btn-accent ">View Details</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;