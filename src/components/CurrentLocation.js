import React, { Component } from "react";
import axios from "axios";

export default class CurrentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      address: "",
      city: "",
    };
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          await this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          const { latitude, longitude } = this.state;
          const API_KEY = "7f9c803feed24104b963e8e1ee687284";
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

          try {
            const response = await axios.get(url);
            const results = response.data.results;
            if (results.length > 0) {
              const address = results[0].formatted;
              const city =
                results[0].components.city || results[0].components.town;
              this.setState({ address, city });
              console.log(address);
              console.log(city);
            } else {
              console.error("No results found");
            }
          } catch (error) {
            console.error("Error fetching address:", error);
          }

          console.log("Position retrieved:", position);
        },
        (error) => {
          console.error("Error is :", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return <div>Location</div>;
  }
}
// https://opencagedata.com/api#

// dontbcc3a7a74e644816a6c6ec45eba108d6
