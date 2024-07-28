import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { addAmbulanceFacility } from "../redux/actions/ambulanceActions";
import { useDispatch } from "react-redux";

const AddAmbulance = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        vehicle: {
            name: "",
            number: ""
        },
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [mainKey, subKey] = name.split('.');

        if (subKey) {
            setFormData((prevData) => {
                const updatedData = {
                    ...prevData,
                    [mainKey]: {
                        ...prevData[mainKey],
                        [subKey]: value
                    }
                };
                return updatedData;
            });
        } else {
            setFormData((prevData) => {
                const updatedData = {
                    ...prevData,
                    [name]: value
                };
                return updatedData;
            });
        }
    };

    const handleArrayChange = (e, mainKey, subKey, index) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const updatedArray = [...prevData[mainKey][subKey]];
            updatedArray[index] = value;
            return {
                ...prevData,
                [mainKey]: {
                    ...prevData[mainKey],
                    [subKey]: updatedArray
                }
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addAmbulanceFacility(formData));
    };

    return (
        <div>
            <Navbar />

            <div className="flex flex-col justify-center items-center my-5">
                <h1 className="text-3xl font-bold">ADD AMBULANCE</h1>
                <form onSubmit={handleSubmit} className="p-4 w-3/4 m-5">
                    

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Vehicle Name
                        <input
                            name="vehicle.name"
                            value={formData.vehicle.name}
                            onChange={handleChange}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Vehicle Number
                        <input
                            name="vehicle.number"
                            value={formData.vehicle.number}
                            onChange={handleChange}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        City
                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>


                    <button
                        type="submit"
                        className="my-5 bg-blue-400 text-center px-6 py-2 rounded text-white font-bold text-lg"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAmbulance;
