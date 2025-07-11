import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const PersonalCard = ({ product, loadedData, setLoadedData }) => {
    const { image, name, price, _id } = product
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`https://zeus-server.vercel.app/myEquipment/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    }
                    const remainingLoadedData = loadedData.filter(oneData => oneData._id != id);
                    setLoadedData(remainingLoadedData)
                }
                )

        });











    }

    return (
        <div>
            <div className="card bg-base-100 w-80 md:w-90 shadow-sm my-10">
                <figure>
                    <img className='w-full h-70 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-center ">
                        <Link state={product} to={`/updateEquipment`}>
                            <button className="btn btn-primary bg-[#c8b73a] hover:bg-[#8f9238] border-0">Update</button>

                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-[#ff6d96] hover:bg-[#4e0e20] border-0">Delete</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCard;