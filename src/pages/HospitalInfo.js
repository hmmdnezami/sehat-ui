import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHospitalInfo } from "../redux/actions/hospitalActions";

import { createBooking } from "../redux/actions/bookingActions";
import Navbar from "../components/Navbar";
import { Telephone } from "react-bootstrap-icons";
import hospitalImg from "../assets/hospitalImage.jpg";
import MapGL, { Marker } from 'react-map-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

const MapboxMap = ({ userLocation, destination }) => {
  const mapContainerRef = useRef(null);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    zoom: 14,
  });

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [userLocation.longitude, userLocation.latitude], // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
      });

      map.addControl(directions, 'top-left');

      if (userLocation && destination) {
        directions.setOrigin([userLocation.longitude, userLocation.latitude]);
        directions.setDestination([destination.longitude, destination.latitude]);
      }

      return () => map.remove();
    }
  }, [userLocation, destination]);

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }}>
      <MapGL
        {...viewport}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapboxApiAccessToken={mapboxgl.accessToken}
      >
        {userLocation && (
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            <div>You</div>
          </Marker>
        )}
        {destination && (
          <Marker latitude={destination.latitude} longitude={destination.longitude}>
            <div>Destination</div>
          </Marker>
        )}
      </MapGL>
    </div>
  );
};

const HospitalInfo = () => {
  const { healthCardId } = useParams();

  // User and destination coordinates
  const userCoordinates = {
    latitude: 12.9744417, // User location latitude
    longitude: 77.7023635, // User location longitude
  };

  const destinationCoordinates = {
    latitude: 12.9858, // Destination latitude
    longitude: 77.7356, // Destination longitude
  };

  const [userLocation, setUserLocation] = useState(userCoordinates);
  const [destination, setDestination] = useState(destinationCoordinates);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { hospitalInfo } = useSelector((state) => state.getHospitalInfo);

  useEffect(() => {
    dispatch(getHospitalInfo(healthCardId));
  }, [dispatch, healthCardId]);

  const handleBooking = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(healthCardId); 
    dispatch(createBooking(healthCardId));
    // dispatch(addFacility(formData));
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-5 m-10">
        <div className="w-1/2">
          <img src={hospitalImg} alt="" />
          <h1 className="text-6xl text-blue-500 font-bold mt-5">
            {hospitalInfo?.name}
          </h1>
          <p className="mt-4 text-lg">
            {hospitalInfo?.address?.address}, {hospitalInfo?.address?.city},
          </p>
          <span>{hospitalInfo?.address?.pincode}</span>

          <div className="flex items-center gap-3 my-4">
            {hospitalInfo?.contact?.phone?.map((data, index) => (
              <span className="flex gap-3 items-center" key={index}>
                <Telephone size={20} />
                <span className="text-lg">{data}</span>
              </span>
            ))}
          </div>

          <button
            className="bg-blue-500 text-white w-3/4 px-4 py-2 text-lg rounded-md my-5 font-bold"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
        <div className="w-1/2" style={{ width: '100%', height: '70vh' }}>
          <MapboxMap userLocation={userLocation} destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
