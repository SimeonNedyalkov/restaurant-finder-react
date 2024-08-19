import React, { useEffect, useState } from 'react';
import GoogleMaps from './GoogleMaps';
import Loader from '../loaders/Loader';

const RestaurantFinder: React.FC = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [restaurants, setRestaurants] = useState<google.maps.places.PlaceResult[]>([]);

  const handleRestaurantsUpdate = (updatedRestaurants: google.maps.places.PlaceResult[]) => {
    setRestaurants(updatedRestaurants);
  };
  console.log(restaurants)
  useEffect(() => {
    setIsLoading(true);
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Restaurant Finder</h1>
          <GoogleMaps onRestaurantsUpdate={handleRestaurantsUpdate} />
          <ul className='bg-black'>
            {restaurants?.map((restaurant, index) => (
              <li key={index}>{restaurant.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RestaurantFinder;
