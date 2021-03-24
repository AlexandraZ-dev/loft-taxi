import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './Maps.css';
import {TaxiOrderFormWithAuth} from "./TaxiOrderForm/TaxiOrderForm";
import {connect} from "react-redux";
import {FillPaymentDetailsForm} from "./FillPaymentDetailsForm/FillPaymentDetailsForm";
import {Paper} from "@material-ui/core";
import {drawRoute} from "./DrawRoute/DrawRoute";

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FzaGEwNDA4IiwiYSI6ImNrbGpvYzB2ZDF1MWkybnByZWVzbDhnc20ifQ.P2w22iyIHtnK63NQcsyphg';

export const Maps = ({isProfile, coord}) => {
  const mapContainerRef = useRef(null);


  const [lng, setLng] = useState(30.2656504);
  const [lat, setLat] = useState(59.8029126);
  const [zoom, setZoom] = useState(14);


  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.touchPitch.enable(true);

    map.dragPan.enable({
      linearity: 0.3,
      // easing: bezier(0, 0, 0.3, 1),
      maxSpeed: 1400,
      deceleration: 2500,
    });

    map.on("load", () => {
      if (coord) drawRoute(map, coord);
    });

    // Clean up on unmount
    return () => map.remove();
  }, [coord, lat, lng, mapContainerRef, zoom]);


  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef}>
        <div>
          <Paper elevation={1} style={{padding: "44px 60px",
            marginTop: "48px",
            marginBottom: "48px", position: "absolute", top: 0,
            left: "20px"}}>
        {isProfile
          ? <TaxiOrderFormWithAuth/>
          : <FillPaymentDetailsForm/>
        }
          </Paper>
        </div>
      </div>
    </div>
  );
};

export const MapsWithAuth = connect(
  (state) => ({isProfile: state.profile.isProfile, coord: state.route.coord}),
  {}
)(Maps)
