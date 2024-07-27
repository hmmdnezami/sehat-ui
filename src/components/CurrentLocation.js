import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrentLocation = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);

            const API_KEY = '7f9c803feed24104b963e8e1ee687284';
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

            try {
              const response = await axios.get(url);
              const results = response.data.results;
              console.log(results);
              if (results.length > 0) {
                const address = results[0].formatted;
                setAddress(address);
              } else {
                setError('No results found');
              }
            } catch (error) {
              setError('Error fetching address: ' + error.message);
            }
          },
          (err) => {
            setError(err.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <h1>Your Location</h1>
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Address: {address}</p>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CurrentLocation;
