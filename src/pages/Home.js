import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { addLocation, deleteLocation, getLocations } from "../services/meaw";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { HiMenu } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const [inputLocation, setInputLocation] = useState();
  const [inputLat, setInputLat] = useState();
  const [inputLng, setInputLng] = useState();
  const onMapClick = (e) => {
    setInputLat(e.latLng.lat);
    setInputLng(e.latLng.lng);
  };
  const handleSubmit = async (e) => {
    await addLocation(
      { place: inputLocation, latLng: { lat: inputLat, lng: inputLng } },
      window.localStorage.getItem("token")
    );
    console.log("Success");
  };
  const [viewingSideBar, setViewingSideBar] = useState(false);
  const columns = [
    { field: "place", headerName: "Place name", width: 100, flex: 1 },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FaTrash />}
          onClick={(e) =>
            {
              deleteLocation(params.row, window.localStorage.getItem("token"))
            }
          }
          label="Delete"
        />,
      ],
    },
  ];

  useEffect(() => {
    getLocations().then((data) => {
      setLocations(data);
    });
  }, []);

  return (
    <div>
      <div className="map-container">
        <motion.div
          animate={viewingSideBar ? { width: 400 } : { width: 0 }}
          style={
            viewingSideBar
              ? { height: "40rem", width: "25%" }
              : { height: "40rem", width: "0%" }
          }
        >
          <DataGrid
            rows={locations}
            getRowId={(row) => row.place}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={(e) => navigate('/detail/' + e.id)}
          />
        </motion.div>
        <div
          style={{
            height: "40rem",
            width: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HiMenu
            id="menu"
            style={{ fontSize: "3rem" }}
            onClick={(e) => setViewingSideBar(!viewingSideBar)}
          ></HiMenu>
        </div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiPF56qJj8x96fmWpwR-GtFSPuTzDNufA"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={
                viewingSideBar
                  ? { height: `40rem`, width: `70%` }
                  : { height: `40rem`, width: `95%` }
              }
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMapClick={isAddingMarker ? onMapClick : (e) => {}}
          markers={locations}
          navigate={navigate}
        />
      </div>
      <div className="map-buttons">
        {isAddingMarker ? (
          ""
        ) : (
          <button
            className="btn-add-marker"
            value={isAddingMarker}
            onClick={() => setIsAddingMarker(!isAddingMarker)}
          >
            Add Marker
          </button>
        )}
        {isAddingMarker ? (
          <form className="new-location" onSubmit={handleSubmit}>
            <label>
              Location Name:{" "}
              <input
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
              ></input>
            </label>
            <label>
              Latitude: <input type="text" value={inputLat}></input>
            </label>
            <label>
              Longtitude: <input type="text" value={inputLng}></input>
            </label>
            <button type="submit">Add marker</button>
            <button onClick={(e) => setIsAddingMarker(false)}>Cancel</button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
