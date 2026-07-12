import RestaurantCard from "./RestaurantCard";

// A responsive grid of restaurant cards.
//
// Props:
// - restaurants: array of restaurant objects
function RestaurantGrid({ restaurants }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantGrid;
