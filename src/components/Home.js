import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalsByCity } from "../redux/actions/userActions";
import hospital from "../assets/hospital.webp";
import { GeoAlt, Search, Telephone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const {hospitals} = useSelector((state)=> state.getHospitalsByCity)
  // const { hospitals } = hospitalData;
  console.log(hospitals);

  const dummyAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          Search Ambulances
        </button>
      </form>

      <Link to="/bookAmbulance" className="flex gap-10 flex-wrap m-5 mx-14">
        {dummyAry.map((data, index) => (
          <div key={index} className="border h-[250px] w-[258px] p-2 shadow-md">
            <img src={hospital} alt="" className=" h-32 w-full" />
            <div className="flex flex-col gap-2 my-2">
              <span className="font-semibold text-center">
                {data?.name}
              </span>
              <span className="flex items-center gap-3 text-sm">
                <GeoAlt size={15} />
                {data?.city}
              </span>

              <span className="flex items-center gap-3 text-sm">
                <Telephone size={15} />
                {data?.contact?.phone.map((phone, index) => (
                  {phone}
                ))}
                
              </span>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Home;

// city
// : 
// "patna2"
// contact
// : 
// {cid: 2, name: null, email: Array(1), phone: Array(1), healthcareFacility: null}
// createdAt
// : 
// "2024-06-24T19:39:29.704+00:00"
// id
// : 
// 2
// location
// : 
// {id: 2, latitude: '34', longitude: '45'}
// name
// : 
// "hospital6"
// updateAt
// : 
// "2024-06-24T19:39:29.704+00:00"