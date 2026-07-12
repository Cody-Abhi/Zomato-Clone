import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowLeft,
  FaLeaf,
  FaDrumstickBite,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import RestaurantGrid from "../components/RestaurantGrid";
import Loader from "../components/Loader";
import Button from "../components/Button";
import {
  getRestaurantById,
  getSimilarRestaurants,
  getReviews,
  getMenuItems,
} from "../services/restaurantApi";

// The Restaurant Details page.
// It reads the restaurant id from the URL using useParams().
//
// Props (from App.jsx):
// - addToCart: function to add a menu item to the cart
function RestaurantDetails({ addToCart }) {
  // useParams() gives us the :id from the route /restaurant/:id
  const { id } = useParams();
  // useNavigate() lets us go back programmatically
  const navigate = useNavigate();

  // State for the restaurant, similar restaurants, reviews and menu
  const [restaurant, setRestaurant] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  // State that tracks how many of each menu item the user has selected
  // before adding to cart. It's an object like { 1: 2, 3: 1 } where the
  // key is the item id and the value is the selected quantity.
  const [quantities, setQuantities] = useState({});

  // Load all data for this restaurant when the id changes
  useEffect(() => {
    let active = true;
    setLoading(true);

    async function load() {
      // Fetch restaurant, similar places, reviews and menu in parallel
      const [rest, sim, rev, items] = await Promise.all([
        getRestaurantById(id),
        getSimilarRestaurants(id),
        getReviews(),
        getMenuItems(),
      ]);

      if (active) {
        setRestaurant(rest);
        setSimilar(sim);
        setReviewList(rev);
        setMenu(items);
        setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [id]);

  // Show loader while data is loading
  if (loading) return <Loader />;

  // If no restaurant found with that id, show a message
  if (!restaurant) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">Restaurant not found.</p>
        <Button to="/restaurants" className="mt-4">
          Browse Restaurants
        </Button>
      </div>
    );
  }

  // ----- Cart helper functions for the menu items -----

  // Get the currently selected quantity for a menu item (default 0)
  const getQty = (itemId) => quantities[itemId] || 0;

  // Increase the selected quantity for a menu item
  const increaseQty = (itemId) => {
    setQuantities((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  // Decrease the selected quantity (minimum 0)
  const decreaseQty = (itemId) => {
    setQuantities((prev) => {
      const next = (prev[itemId] || 0) - 1;
      // If quantity goes below 0, keep it at 0
      const updated = { ...prev, [itemId]: Math.max(0, next) };
      return updated;
    });
  };

  // Add the selected quantity of a menu item to the cart
  const handleAddToCart = (item) => {
    // If the user hasn't selected a quantity, add 1 by default
    const qty = getQty(item.id) || 1;

    // Add the item to the cart "qty" times.
    // addToCart handles duplicates (increases quantity if already in cart).
    for (let i = 0; i < qty; i++) {
      addToCart(item, restaurant.name);
    }

    // Reset the selected quantity for this item
    setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <div>
      {/* Banner with restaurant image */}
      <div className="relative h-72 sm:h-96">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-text shadow-soft transition hover:bg-white"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Name + rating over the image */}
        <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
          <h1 className="text-3xl font-bold sm:text-4xl">{restaurant.name}</h1>
          <p className="mt-1 text-gray-200">{restaurant.cuisine}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1 rounded-md bg-accent/40 px-2 py-1 font-semibold">
              <FaStar className="text-primary" /> {restaurant.rating}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-accent" /> {restaurant.deliveryTime}
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-accent" /> {restaurant.location}
            </span>
            <span>₹{restaurant.priceForTwo} for two</span>
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {restaurant.offer && (
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {restaurant.offer}
              </span>
            )}
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                restaurant.isOpen
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {restaurant.isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
          <Button to="/cart" variant="primary">
            View Cart
          </Button>
        </div>
      </div>

      {/* Menu section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-text">Menu</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {menu.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft transition hover:shadow-card"
            >
              {/* Food image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 shrink-0 rounded-xl object-cover"
              />

              {/* Details */}
              <div className="flex flex-1 flex-col">
                {/* Veg / non-veg badge + name */}
                <div className="flex items-center gap-2">
                  {item.veg ? (
                    <FaLeaf className="text-green-500 text-sm" />
                  ) : (
                    <FaDrumstickBite className="text-primary text-sm" />
                  )}
                  <h3 className="font-semibold text-text">{item.name}</h3>
                </div>

                {/* Rating */}
                <span className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                  <FaStar className="text-accent" /> {item.rating}
                </span>

                {/* Description */}
                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>

                {/* Price + quantity + add to cart */}
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="font-semibold text-primary">
                    ₹{item.price}
                  </span>

                  <div className="flex items-center gap-3">
                    {/* Quantity selector (only shows when quantity > 0) */}
                    {getQty(item.id) > 0 && (
                      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-primary transition hover:bg-primary/10 active:scale-90"
                        >
                          <FaMinus className="text-[10px]" />
                        </button>
                        <span className="min-w-[16px] text-center text-sm font-semibold">
                          {getQty(item.id)}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-primary transition hover:bg-primary/10 active:scale-90"
                        >
                          <FaPlus className="text-[10px]" />
                        </button>
                      </div>
                    )}

                    {/* Add to cart button */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white transition hover:bg-[#c42f3b] active:scale-95"
                    >
                      {getQty(item.id) > 0
                        ? `Add ${getQty(item.id)}`
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-text">Reviews</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewList.map((review) => (
              <div key={review.id} className="rounded-xl bg-background p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-text">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                {/* Star rating */}
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "text-accent" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar restaurants */}
      {similar.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-text">
            Similar Restaurants
          </h2>
          <RestaurantGrid restaurants={similar} />
        </section>
      )}
    </div>
  );
}

export default RestaurantDetails;
