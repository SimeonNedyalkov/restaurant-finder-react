import { useLocation, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

export default function Details() {
    const location = useLocation();
    const { allRestaurants } = location.state;
    const { id } = useParams();
    const currentRestaurant = allRestaurants.find((x:any) => x.id === id);

    console.log(allRestaurants);
    console.log(currentRestaurant);
    
    const types = Array.isArray(currentRestaurant.types) 
        ? `#${currentRestaurant.types.join(', #')}`
        : currentRestaurant.types.split(',');
    
    const googleLocation = currentRestaurant.googleLocation[0]?.split('"')[1] || '';

    return (
        <div className="detailsBackground">
            <div className="detailsContainer">
                <h1 className="restaurantName">{currentRestaurant.name}</h1>
                
                <a href={googleLocation} target="_blank" rel="noopener noreferrer" className="restaurantDescription">
                    {googleLocation ? `Link to Google Maps: ${googleLocation}` : "No photo available."}
                </a>
                <div className="detailsAndImage">
                <ul className="restaurantDetails">
                    <li><strong>Address:</strong> {currentRestaurant.vicinity}</li>
                    <li><strong>Types:</strong> {types}</li>
                    <li><strong>Rating:</strong> {currentRestaurant.rating} / 5</li>
                    <li><strong>Voters:</strong> {currentRestaurant.user_ratings_total}</li>
                    {currentRestaurant.price_level ? (
                        <li><strong>Price Level:</strong> {currentRestaurant.price_level} / 5</li>
                    ) : (
                        <li><strong>Price Level:</strong> No price level / 5</li>
                    )}
                </ul>
                <img className="restaurantImage" src={currentRestaurant.photos} alt={currentRestaurant.name} />
                </div>
                <Link to='/restaurant-finder' className="button">Go To App</Link>
            </div>
            
        </div>
    );
}
