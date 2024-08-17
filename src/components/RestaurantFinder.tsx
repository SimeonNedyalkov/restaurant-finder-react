import GoogleMaps from "./GoogleMaps";

interface MapProps {
    apiKey: string;
  }
export default function RestaurantFinder() {
    return (
        <div className="restaurantFinderBackground">
            <GoogleMaps />
        </div>
    );
}