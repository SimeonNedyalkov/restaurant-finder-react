import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 43.214112818100986,
  lng: 27.9153116244472,
};

interface GoogleMapsProps {
  onRestaurantsUpdate: (restaurants: google.maps.places.PlaceResult[]) => void;
}
const GoogleMaps: React.FC<GoogleMapsProps> = ({ onRestaurantsUpdate }) => {
  const [restaurants, setRestaurants] = useState<google.maps.places.PlaceResult[]>([]);

  const onLoad = useCallback((map: google.maps.Map) => {
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: 20000, // 20 km radius
      type: 'restaurant',
      openNow: true,
      language: 'en',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setRestaurants(results);
        onRestaurantsUpdate(results); // Call the callback with the new restaurants data
      } else {
        setRestaurants([]);
        onRestaurantsUpdate([]); // Ensure to update the parent with an empty array in case of no results
      }
    });
  }, [onRestaurantsUpdate]);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setRestaurants([]);
  }, []);

  return (
    <div className='map'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {restaurants.map((restaurant, index) => (
          restaurant.geometry?.location && (
            <Marker
              key={index}
              position={{
                lat: restaurant.geometry.location.lat(),
                lng: restaurant.geometry.location.lng(),
              }}
              title={restaurant.name}
            />
          )
        ))}
      </GoogleMap>
    </div>
  );
};

export default React.memo(GoogleMaps);
