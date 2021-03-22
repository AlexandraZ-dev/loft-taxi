import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Maps.css';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {TaxiOrderFormWithAuth} from "./TaxiOrderForm";

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FzaGEwNDA4IiwiYSI6ImNrbGpvYzB2ZDF1MWkybnByZWVzbDhnc20ifQ.P2w22iyIHtnK63NQcsyphg';

export const Maps = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(49.1221);
  const [lat, setLat] = useState(55.7887);
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

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} >
        <TaxiOrderFormWithAuth />
      </div>
    </div>
  );
};
