import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { addFacility } from "../redux/actions/hospitalActions";
import { useDispatch } from "react-redux";

const AddAmbulance = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        vehicle: {
            vehicalName: "",
            vehicalNumber: ""
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

                if (mainKey === "address" && subKey === "city") {
                    updatedData.city = value;
                }

                if (mainKey === "name") {
                    updatedData.contact.name = value;
                }

                return updatedData;
            });
        } else {
            setFormData((prevData) => {
                const updatedData = {
                    ...prevData,
                    [name]: value
                };

                if (name === "name") {
                    updatedData.contact.name = value;
                }

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
        dispatch(addFacility(formData));
    };

    return (
        <div>
            <Navbar />

            <div className="flex flex-col justify-center items-center my-5">
                <h1 className="text-3xl font-bold">ADD AMBULANCE</h1>
                <form onSubmit={handleSubmit} className="p-4 w-3/4 m-5">
                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Hospital Name
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Address
                        <input
                            name="address.address"
                            value={formData.address.address}
                            onChange={handleChange}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <div className="flex gap-5">
                        <label className="w-1/3 flex flex-col gap-3 mb-4 text-lg font-semibold">
                            City
                            <input
                                name="address.city"
                                value={formData.address.city}
                                onChange={handleChange}
                                required
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded font-normal"
                            />
                        </label>

                        <label className="w-1/3 flex flex-col gap-3 mb-4 text-lg font-semibold">
                            State
                            <input
                                name="address.state"
                                value={formData.address.state}
                                onChange={handleChange}
                                required
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded font-normal"
                            />
                        </label>

                        <label className="w-1/3 flex flex-col gap-3 mb-4 text-lg font-semibold">
                            Pincode
                            <input
                                name="address.pincode"
                                value={formData.address.pincode}
                                onChange={handleChange}
                                required
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded font-normal"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Email
                        <input
                            name="contact.email.0"
                            value={formData.contact.email[0]}
                            onChange={(e) => handleArrayChange(e, 'contact', 'email', 0)}
                            required
                            type="email"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Contact Number 1
                        <input
                            name="contact.phone.0"
                            value={formData.contact.phone[0]}
                            onChange={(e) => handleArrayChange(e, 'contact', 'phone', 0)}
                            required
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <label className="flex flex-col gap-3 mb-4 text-lg font-semibold">
                        Contact Number 2
                        <input
                            name="contact.phone.1"
                            value={formData.contact.phone[1]}
                            onChange={(e) => handleArrayChange(e, 'contact', 'phone', 1)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded font-normal"
                        />
                    </label>

                    <button
                        type="submit"
                        className="my-5 bg-gray-400 text-center px-6 py-2 rounded text-white font-bold text-lg"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAmbulance;
