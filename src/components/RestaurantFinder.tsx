import GoogleMaps from "./GoogleMaps";

interface MapProps {
    apiKey: string;
  }
export default function RestaurantFinder({ apiKey }: MapProps) {
    return (
        <div className="restaurantFinderBackground">
            <GoogleMaps apiKey={apiKey} />
        </div>
    );
}