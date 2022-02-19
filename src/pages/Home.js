import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { addLocation, getLocations } from "../services/meaw";
const Home = () => {
  const [locations, setLocations] = useState([]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const [inputLocation, setInputLocation] = useState();
  const [inputLat, setInputLat] = useState();
  const [inputLng, setInputLng] = useState();
  const onMapClick = (e) => { setInputLat(e.latLng.lat); setInputLng(e.latLng.lng)};
  const handleSubmit = async (e) => {
    e.preventDefault()
    await addLocation({ place: inputLocation, latLng: { lat: inputLat, lng: inputLng}}, window.localStorage.getItem("token"))
    console.log("Success")
  }
  useEffect(() => {
    getLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `40rem` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapClick={isAddingMarker ? onMapClick : (e) => {}}
        markers={locations.map((location) => location.latLng)}
      />
      <div className="map-buttons">
        {isAddingMarker ? (
          ""
        ) : (
          <button
            value={isAddingMarker}
            onClick={() => setIsAddingMarker(!isAddingMarker)}
          >
            Add Marker
          </button>
        )}
        <button>Delete Marker</button>
        {isAddingMarker ? (
          <form onSubmit={handleSubmit}>
            <label>
              Location Name:{" "}
              <input
                type="text"
                value={inputLocation}
                onChange={e => setInputLocation(e.target.value)}
              ></input>
            </label>
            <label>
              Latitude:{" "}
              <input
                type="text"
                value={inputLat}
              ></input>
            </label>
            <label>
              Longtitude:{" "}
              <input
                type="text"
                value={inputLng}
              ></input>
            </label>
            <button type="submit">Add marker</button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
