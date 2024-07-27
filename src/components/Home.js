import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalsByCity } from "../redux/actions/userActions";
import { GeoAlt, Search, Telephone } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import CurrentLocation from "./CurrentLocation";


const Home = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const token = localStorage.getItem("authToken");
  // console.log(token);


  // if(!token || token === undefined){
  //   alert("Login first");
  //   navigate('/');
  // }

  // console.log(city);

  const { hospitals } = useSelector((state) => state.getHospitalsByCity);
  console.log(hospitals);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getHospitalsByCity(city));
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="mx-14 my-5">
        <label className="relative ">
          <input
            className=" p-4 pl-10 w-3/4 border border-black rounded"
            required
            type="text"
            name="city"
            value={city}
            placeholder="Enter City Name"
            onChange={handleChange}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-500" />
          </span>
        </label>
        <button
          type="submit"
          className=" mx-5 bg-black p-4 rounded text-white font-bold"
        >
          Search Hospitals
        </button>
      </form>

      <div className="flex gap-10 flex-wrap m-5 mx-14">
        {hospitals?.map((hospital, index) => (
          <Link
            to={`/healthcare/${hospital.id}`}
            key={index}
            className="border h-[250px] w-[258px] p-2 shadow-md"
          >
            <img src={hospital} alt="" className=" h-32 w-full" />
            <div className="flex flex-col gap-2 my-2">
              <span className="font-semibold text-center">
                {hospital?.name}
              </span>
              <span className="flex items-center gap-3 text-sm">
                <GeoAlt size={15} />
                {hospital?.city}
              </span>

              <span className="flex items-center gap-3 text-sm">
                <Telephone size={15} />
                {hospital?.contact?.phone?.map((data, index) => data)}
              </span>
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
};

export default Home;
