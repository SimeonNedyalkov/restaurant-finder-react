import { useLocation, useParams } from "react-router-dom";

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
    
    const photos = currentRestaurant.photos[0]?.split('"')[1] || '';

    return (
        <div className="detailsBackground">
            <div className="detailsContainer">
                <h1 className="restaurantName">{currentRestaurant.name}</h1>
                <a href={photos} target="_blank" rel="noopener noreferrer" className="restaurantDescription">
                    {photos ? `Link to Google Maps: ${photos}` : "No photo available."}
                </a>
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
            </div>
        </div>
    );
}
