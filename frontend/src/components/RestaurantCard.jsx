import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// A single restaurant card.
// Shows image, name, rating, cuisine, location, delivery time, price and badges.
// Clicking the card navigates to /restaurant/:id.
//
// Props:
// - restaurant: object with all restaurant fields
function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      {/* Restaurant image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Offer badge (top-left) */}
        {restaurant.offer && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-soft">
            {restaurant.offer}
          </span>
        )}

        {/* Open / Closed badge (top-right) */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-soft ${
            restaurant.isOpen
              ? "bg-green-500 text-white"
              : "bg-gray-700 text-white"
          }`}
        >
          {restaurant.isOpen ? "Open Now" : "Closed"}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-primary">
          {restaurant.name}
        </h3>

        {/* Rating + Cuisine */}
        <div className="mt-2 flex items-center justify-between">
          {/* Rating with star icon */}
          <span className="flex items-center gap-1 rounded-md bg-accent/30 px-2 py-0.5 text-sm font-semibold text-text">
            <FaStar className="text-primary" />
            {restaurant.rating}
          </span>

          {/* Price for two */}
          <span className="text-sm text-gray-500">
            ₹{restaurant.priceForTwo} for two
          </span>
        </div>

        {/* Cuisine */}
        <p className="mt-2 text-sm text-gray-500">{restaurant.cuisine}</p>

        {/* Location + Delivery time */}
        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-primary" />
            {restaurant.location}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-primary" />
            {restaurant.deliveryTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
