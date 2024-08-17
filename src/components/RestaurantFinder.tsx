import React, { useState } from 'react';
import GoogleMaps from './GoogleMaps'; // Adjust the path to your GoogleMaps component

const RestaurantFinder: React.FC = () => {
  const [restaurants, setRestaurants] = useState<google.maps.places.PlaceResult[]>([]);

  const handleRestaurantsUpdate = (updatedRestaurants: google.maps.places.PlaceResult[]) => {
    setRestaurants(updatedRestaurants);
  };
  console.log(restaurants)
  return (
    <div>
      <h1>Restaurant Finder</h1>
      <GoogleMaps onRestaurantsUpdate={handleRestaurantsUpdate} />
      <ul className='bg-black'>
        {restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantFinder;
