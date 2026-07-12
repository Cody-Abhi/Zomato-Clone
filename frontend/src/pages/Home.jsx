import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Collections from "../components/Collections";
import RestaurantGrid from "../components/RestaurantGrid";
import Offers from "../components/Offers";
import DownloadApp from "../components/DownloadApp";
import Loader from "../components/Loader";
import {
  getRestaurants,
  getCategories,
  getCollections,
} from "../services/restaurantApi";
import { offers } from "../utils/dummyData";

// The Home page.
// It fetches data from the fake API and shows all home sections.
function Home() {
  // State for search text typed in the hero search bar
  const [search, setSearch] = useState("");

  // State for the data we load from the fake API
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  // Loading state (true while data is being fetched)
  const [loading, setLoading] = useState(true);

  // useEffect runs once when the page first loads.
  // It calls the fake API functions and saves the results in state.
  useEffect(() => {
    let active = true;

    async function loadData() {
      const [cats, cols, rests] = await Promise.all([
        getCategories(),
        getCollections(),
        getRestaurants(),
      ]);

      // Only update state if the component is still on screen
      if (active) {
        setCategories(cats);
        setCollections(cols);
        setRestaurants(rests);
        setLoading(false);
      }
    }

    loadData();

    // Cleanup function runs if the user leaves the page early
    return () => {
      active = false;
    };
  }, []);

  // Show a loader while data is loading
  if (loading) return <Loader label="Loading delicious food..." />;

  return (
    <div>
      {/* 1. Hero section */}
      <Hero search={search} onSearchChange={(e) => setSearch(e.target.value)} />

      {/* 2. Food categories */}
      <Categories categories={categories} />

      {/* 3. Collections */}
      <Collections collections={collections} />

      {/* 4. Offers */}
      <Offers offers={offers} />

      {/* 5. Popular restaurants (first 12) */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Popular Restaurants
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Most ordered places near you
          </p>
        </div>
        <RestaurantGrid restaurants={restaurants} />
      </section>

      {/* 6. Download app section */}
      <DownloadApp />
    </div>
  );
}

export default Home;
