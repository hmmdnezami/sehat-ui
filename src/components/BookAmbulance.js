import React from "react";
import Navbar from "./Navbar";
import ambulance from "../assets/ambulanceImg.webp";
import { GeoAlt, Telephone } from "react-bootstrap-icons";

const BookAmbulance = () => {

    const handleClick = () => {
        
    }

  return (
    <div>
      <Navbar />
      <div className=" flex gap-5 mx-10 my-5">
        <div className=" w-1/2">
          <img src={ambulance} alt="" className="w-[600px]" />
          <div className="flex flex-col gap-5 my-20">
            <button onClick={handleClick} className=" bg-blue-800 text-white p-4 rounded font-bold w-[600px] ">
              Book Now
            </button>
            <button className=" border border-blue-800 text-blue-800 p-4 rounded font-bold w-[600px] ">
              Back
            </button>
          </div>
        </div>

        <div className="w-1/2 text-center ">
          <span className="text-4xl font-semibold ">Fortis Hospital</span>
          <div className="flex gap-10 text-xl ">
            <span className="flex items-center gap-3 text-3xl">
              <GeoAlt size={20} />
              ABC Street, Bengaluru
            </span>

            <span className="flex items-center gap-3 text-3xl">
              <Telephone size={20} />
              987654098
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAmbulance;
