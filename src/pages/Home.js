import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { getLocations } from "../services/meaw";
const Home = () => {
  const [locations, setLocations] = useState([])
  const [isAddingMarker, setIsAddingMarker] = useState(false)
  const [inputLocation, setInputLocation] = useState()
  const onMapClick = (e) => {};

  useEffect(() => {
    getLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiPF56qJj8x96fmWpwR-GtFSPuTzDNufA"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `40rem` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapClick={isAddingMarker ? onMapClick : (e) => {}}
        markers={locations.map((location) => location.latLng)}
      />
      <div className="map-buttons">
        {isAddingMarker ? (
          <input value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} placeholder="Enter location name"></input>
        ) : (
          <button
            value={isAddingMarker}
            onClick={() => setIsAddingMarker(!isAddingMarker)}
          >Add Marker</button>
        )}
        <button>Delete Marker</button>
      </div>
    </div>
  );
};

export default Home;
