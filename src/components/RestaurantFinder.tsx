import React, { useEffect, useState } from 'react';
import GoogleMaps from './GoogleMaps';
import Loader from '../loaders/Loader';
import {useNavigate} from 'react-router-dom'

const RestaurantFinder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState<google.maps.places.PlaceResult[]>([]);
  const [viewIndex, setViewIndex] = useState(0);
  const navigation = useNavigate()

  console.log(restaurants)
  const handleRestaurantsUpdate = (updatedRestaurants: google.maps.places.PlaceResult[]) => {
    setRestaurants(updatedRestaurants);
  };

  const getHighestRatedRestaurants = () => {
    return [...restaurants].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  };

  function navDetails(id:any){
    const simplifiedRestaurants = restaurants.map(restaurant => ({
      id: restaurant.place_id,
      name: restaurant.name,
      rating:restaurant.rating,
      vicinity:restaurant.vicinity,
      types : restaurant.types,
      price_level : restaurant.price_level,
      photos : restaurant.photos?.[0].html_attributions || null,
      user_ratings_total : restaurant.user_ratings_total
    }));
      navigation(`/restaurant-finder/details/${id}`,{
        state:{
          allRestaurants: simplifiedRestaurants 
        }
      })
    
    
  }
  const renderRestaurants = () => {
    let displayedRestaurants: google.maps.places.PlaceResult[] = [];

    if (viewIndex === 0) {
      displayedRestaurants = restaurants;
      return displayedRestaurants?.map((restaurant) => (
        <li key={restaurant.place_id} onClick={() => navDetails(restaurant.place_id)}>{restaurant.name}</li>
      ));
    } else if (viewIndex === 1) {
      displayedRestaurants = getHighestRatedRestaurants();
      return displayedRestaurants?.map((restaurant) => (
        <li key={restaurant.place_id} onClick={() => navDetails(restaurant.place_id)}>{restaurant.name} - {restaurant.rating}</li>
      ));
    }

    return displayedRestaurants?.map((restaurant) => (
      <li key={restaurant.place_id}>No restaurants are displayed</li>
    ));
  };

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='restaurantFinderBackground'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='restaurantsList'>
            <h1>{viewIndex === 0 ? 'All Restaurants' : 'Highest Rated Restaurants'}</h1>
            <ul className='restaurantItems'>
              {renderRestaurants()}
            </ul>
            <div className='paginationDots'>
              <span
                className={`dot ${viewIndex === 0 ? 'active' : ''}`}
                onClick={() => setViewIndex(0)}
              ></span>
              <span
                className={`dot ${viewIndex === 1 ? 'active' : ''}`}
                onClick={() => setViewIndex(1)}
              ></span>
            </div>
          </div>

          <GoogleMaps onRestaurantsUpdate={handleRestaurantsUpdate} />
        </>
      )}
    </div>
  );
};

export default RestaurantFinder;
