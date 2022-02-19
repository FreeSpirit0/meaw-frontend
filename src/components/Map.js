import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React from "react";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 13.844691, lng: 100.567988 }} onClick={props.onMapClick}>
      {props.markers.map(
        marker => {
        return <Marker key={marker.place} position={marker.latLng} onClick={(e) => props.navigate('/detail/' + marker.place)
      } />
      }
      )}
    </GoogleMap>
  ))
);

export default Map;
