import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import { IconLayer } from "@deck.gl/layers";
import "./Map.css";

const token = process.env.REACT_APP_mapbox_api;

class Map extends Component {
  state = {
    viewport: {
      latitude: 33,
      longitude: -79.925856,
      zoom: 8,
    },
    searchResultLayer: null,
  };

  //   creates a reference to this class
  mapRef = React.createRef();

  //   when viewport changes, update viewport state
  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  //   upon location search, update searchResultLayer state by creating new GeoJsonLayer.
  // This in turn updates viewport
  handleOnResult = (event) => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      }),
    });
  };

  render() {
    // a little confused how this is working
    const { viewport, searchResultLayer } = this.state;

    // sets style of icon
    const iconMapping = {
      marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
    };

    const layer = new IconLayer({
      id: "icon-layer",
      data: this.props.marketData,
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string
      iconAtlas:
        "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
      iconMapping: iconMapping,
      getIcon: (d) => "marker",

      sizeScale: 15,
      getPosition: (d) => d.coordinates,
      getSize: (d) => 3,
      getColor: (d) => [Math.sqrt(d.exits), 140, 0],
    });

    return (
      <div className="map">
        <MapGL
          //   referencing Map class
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          width="100%"
          height="90%"
          // when viewport changes, update viewport
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          {/* Geocoder is a search component that returns the coordinates of a given location from Mapbox API  */}
          <Geocoder
            mapRef={this.mapRef}
            // when a location is inputted, update searchResultLayer
            onResult={this.handleOnResult}
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            position="top-left"
          />

          <DeckGL
            viewState={viewport}
            layers={[layer]}
            getTooltip={({ object }) =>
              object && `${object.name}\n${object.address}`
            }
          />
        </MapGL>
      </div>
    );
  }
}

export default Map;
