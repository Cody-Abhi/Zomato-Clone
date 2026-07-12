import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RestaurantGrid from "../components/RestaurantGrid";
import Loader from "../components/Loader";
import { getRestaurants } from "../services/restaurantApi";
import { categories } from "../utils/dummyData";

// The Restaurants listing page.
// Has a banner, search bar, category filter buttons, and the grid.
function Restaurants() {
  // Search text
  const [search, setSearch] = useState("");
  // Currently selected category (default "All")
  const [activeCategory, setActiveCategory] = useState("All");
  // List of restaurants to show
  const [restaurants, setRestaurants] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);

  // Load restaurants whenever the search text or category changes.
  // The useEffect dependencies are [search, activeCategory] so it re-runs
  // automatically when either of those changes.
  useEffect(() => {
    let active = true;
    setLoading(true);

    async function load() {
      const data = await getRestaurants(search, activeCategory);
      if (active) {
        setRestaurants(data);
        setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [search, activeCategory]);

  // Build the list of filter buttons: "All" + every category name
  const filterButtons = ["All", ...categories.map((c) => c.name)];

  return (
    <div>
      {/* Top banner */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Restaurants Near You
          </h1>
          <p className="mt-2 text-white/80">
            Discover and order from the best restaurants in your city
          </p>

          {/* Search bar in the banner */}
          <div className="mt-6 flex justify-center">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search restaurants or cuisines..."
            />
          </div>
        </div>
      </div>

      {/* Category filter buttons */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {filterButtons.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-soft"
                  : "bg-white text-text shadow-soft hover:bg-primary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant grid or loader */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {loading ? (
          <Loader />
        ) : restaurants.length === 0 ? (
          // Shown when no restaurants match the search/filter
          <p className="py-16 text-center text-gray-500">
            No restaurants found. Try a different search or category.
          </p>
        ) : (
          <RestaurantGrid restaurants={restaurants} />
        )}
      </div>
    </div>
  );
}

export default Restaurants;
