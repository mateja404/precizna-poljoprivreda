import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./mapa.css"; // Assuming you have a CSS file for styling

const Mapa = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Location 1",
      lat: 44.7866,
      lng: 20.4489,
      info: "Info about Location 1",
    },
    {
      id: 2,
      name: "Location 2",
      lat: 45.2671,
      lng: 19.8335,
      info: "Info about Location 2",
    },
    // Add more locations as needed
  ];

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="mapa-container">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={{ lat: 44.7866, lng: 20.4489 }}
          zoom={8}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedLocation && (
        <div className="sidebar">
          <h2>{selectedLocation.name}</h2>
          <p>{selectedLocation.info}</p>
        </div>
      )}
    </div>
  );
};

export default Mapa;
