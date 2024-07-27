import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHospitalInfo } from "../redux/actions/hospitalActions";
import Navbar from "../components/Navbar";
import { Telephone } from "react-bootstrap-icons";
import hospitalImg from "../assets/hospitalImage.jpg";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import CurrentLocation from "../components/CurrentLocation";

const HospitalInfo = () => {
  const { healthCardId } = useParams();

  const containerStyle = {
    width: "auto",
    height: "70vh",
  };

  // Default center if user location is not available
  const center = {
    lat: 12.9744417,
    lng: 77.7023635,
  };

  // User and destination coordinates
  const userCoordinates = {
    lat: 12.9744417, // User location latitude
    lng: 77.7023635, // User location longitude
  };

  const destinationCoordinates = {
    lat: 12.9858, // Destination latitude
    lng: 77.7356, // Destination longitude
  };

  const [userLocation, setUserLocation] = useState(userCoordinates);
  const [destination, setDestination] = useState(destinationCoordinates);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Get user's current location
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setUserLocation({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       });
  //     },
  //     (error) => setError(error.message)
  //   );
  // }, []);

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirectionsResponse(response);
      } else {
        console.log("Error fetching directions: ", response.status);
      }
    }
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { hospitalInfo } = useSelector((state) => state.getHospitalInfo);

  console.log(hospitalInfo);

  useEffect(() => {
    dispatch(getHospitalInfo(healthCardId));
  }, [dispatch, healthCardId]);

  return (
    <div>
      <Navbar />
      <div className="flex gap-5 m-10">
        <div className="w-1/2 ">
          <img src={hospitalImg} alt="" />
          <h1 className="text-6xl text-blue-500 font-bold mt-5">
            {" "}
            {hospitalInfo?.name}
          </h1>
          <p className=" mt-4 text-lg">
            {hospitalInfo?.address.address}, {hospitalInfo?.address.city},
          </p>
          <span>{hospitalInfo?.address.pincode}</span>

          <div className="flex items-center gap-3 my-4">
            {hospitalInfo?.contact?.phone?.map((data, index) => (
              <span className="flex gap-3 items-center">
                <Telephone size={20} />
                <span className="text-lg">{data}</span>
              </span>
            ))}
          </div>

          <button className="bg-blue-500 text-white w-3/4 px-4 py-2 text-lg rounded-md my-5 font-bold">
            Book Now
          </button>
        </div>

        <div className="w-1/2">
          <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API key
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={userLocation}
              zoom={14}
            >
              {userLocation && <Marker position={userLocation} label="You" />}
              {destination && (
                <Marker position={destination} label="Destination" />
              )}
              {userLocation && destination && (
                <DirectionsService
                  options={{
                    origin: userLocation,
                    destination: destination,
                    travelMode: "DRIVING",
                  }}
                  callback={directionsCallback}
                />
              )}
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
