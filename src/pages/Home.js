import React, { useState } from "react";
import Map from "../components/Map";
const Home = () => {
  const [markers, setMarkers] = useState([
    { lat: 13.844691, lng: 100.567988 },
    { lat: 15.844691, lng: 105.567988 },
  ]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const onMapClick = (e) => setMarkers([e.latLng, ...markers]);

  return (
    <div>
      <Map
        googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyBKVx_03i5sma7hq1Mzrgi21E7Yi03VoDs"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapClick={isAddingMarker ? onMapClick : (e) => {}}
        markers={markers}
      />
      <button
        value={isAddingMarker}
        onClick={() => setIsAddingMarker(!isAddingMarker)}
      >
        {isAddingMarker ? 'Stop adding' : 'Add Marker'}
      </button>
			<button>
				Delete Marker
			</button>
    </div>
  );
};

export default Home;
