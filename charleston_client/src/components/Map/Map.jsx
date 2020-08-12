import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";

const Map = () => {
  const geolocateStyle = {
    float: "left",
    margin: "50px",
    padding: "10px",
  };

  const TOKEN =
    "pk.eyJ1Ijoid3QwOCIsImEiOiJja2Rya245YncwY3A1MzNudTBoMmViNGN5In0.A6tKzG9bu81bRgCrQ63HaA";

  const [viewport, setViewPort] = useState({
    width: "80%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

//   when viewport changes, update viewport variable
  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  );
};

export default Map;
