import React from 'react';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
    const location = useLocation()
    const { category,
        customization,
        delivery,
        description,
        image,
        name,
        price,
        rating,
        stock,
        _id } = location.state;

    const handleUpdateEquipment = (e) => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value
        const name = form.name.value
        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const delivery = form.delivery.value
        const stock = form.stock.value

        const equipmentInfo = {
            image,
            name,
            category,
            description,
            price,
            rating,
            customization,
            delivery,
            stock,
            _id




        }
        // console.log(equipmentInfo);
        fetch("https://zeus-server.vercel.app/myEquipment", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(equipmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            }

            )

    }
    return (
        <div className='bg-linear-to-r from-[#a0304f] to-[#3d0112] rounded-2xl text-white mt-10'>
            <div>
                <h1 className='text-4xl font-bold pt-10 text-center'>Update Equipment</h1>
            </div>
            <form onSubmit={handleUpdateEquipment} className='max-w-2xl mx-auto mt-20'>
                {/* 1st row */}
                <div className='flex gap-5 justify-center'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  w-full text-white">Image Url</legend>
                        <input name='image' type="text"
                            defaultValue={image}
                            className="input border-2 text-black" placeholder="Image Url" />

                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend w-full text-white">Item Name</legend>
                        <input name='name' type="text"
                            defaultValue={name} className="input text-black" placeholder="Item Name" />

                    </fieldset>
                </div>
                {/*2nd row */}
                <div className='flex gap-5 justify-center'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  w-full text-white">Category Name</legend>
                        <input name='category' type="text"
                            defaultValue={category} className="input border-2 text-black" placeholder="Category Name" />

                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend w-full text-white">Description</legend>
                        <input name='description' type="text"
                            defaultValue={description} className="input text-black" placeholder="Description" />

                    </fieldset>
                </div>
                {/*3rd row */}
                <div className='flex gap-5 justify-center'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  w-full text-white">Price</legend>
                        <input name='price' type="text"
                            defaultValue={price} className="input border-2 text-black" placeholder="Price" />

                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend w-full text-white">Rating</legend>
                        <input name='rating' type="text"
                            defaultValue={rating} className="input text-black" placeholder="Rating" />

                    </fieldset>
                </div>
                <div className=' w-full'>
                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-white">Customization <span className='font-extralight'>(Bat with extra grip, hit paper etc)</span></legend>
                        <input name='customization' type="text"
                            defaultValue={customization} className="input w-full text-black" placeholder="Customization (Bat with extra grip, hit paper etc)" />

                    </fieldset>
                </div>
                {/*4th row */}
                <div className='flex gap-5 justify-center'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  w-full text-white">Delivery Time</legend>
                        <input name='delivery' type="text"
                            defaultValue={delivery} className="input border-2 text-black" placeholder="Delivery Time" />

                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  text-white">Stock Status <span className='font-extralight'>(Available product quantity)</span></legend>
                        <input name='stock' type="text"
                            defaultValue={stock} className="input text-black" placeholder="Stock Status(Available product quantity)" />

                    </fieldset>
                </div>


                <div className='py-5'>
                    <input type="submit" value="Update Equipment" className='btn btn-neutral w-full' />
                </div>
            </form>


        </div>
    );
};

export default UpdateEquipment;