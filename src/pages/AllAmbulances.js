import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAmbulanceNearUser } from "../redux/actions/userActions";
import { GeoAlt, Link, Telephone } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

const AllAmbulances = () => {
  const dispatch = useDispatch();

  const {city} = useParams();
  const { ambulances } = useSelector((state) => state.getAmbulanceNearUser);
//   console.log(ambulances);

  useEffect(() => {
    dispatch(getAmbulanceNearUser(city));
  }, [city, dispatch]);

  return (
    <div>
      <Navbar />

      <div className="flex gap-10 flex-wrap m-5 mx-14">
        {ambulances?.map((hospital, index) => (
          <Link
            to="/bookAmbulance"
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

export default AllAmbulances;
