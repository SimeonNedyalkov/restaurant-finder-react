import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 43.214112818100986, 
  lng: 27.9153116244472,
};

interface MapProps {
  apiKey: string;
}

const GoogleMaps: React.FC<MapProps> = ({ apiKey }) => {
  return (
    <div className='map'>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
    
  );
};

export default GoogleMaps;
