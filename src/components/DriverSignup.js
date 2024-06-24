import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { driverSignup } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import ambulance from "../assets/ambulance.webp"

const DriverSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await dispatch(driverSignup(formData));
      toast.success("Driver Registered Successfully");
    //   navigate('/');
    } catch (err) {
      toast.error("Registration failed: " + err.message);
    }
  };

  return (
    <div className="flex gap-5">
        <div className="w-1/2">
        <img src={ambulance} alt="" className=""/>

        </div>

      <form className="w-1/2 p-2 border border-black" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            required
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            required
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />

    </div>
  );
};

export default DriverSignUp;
