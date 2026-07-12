import { FaSearch, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// The big hero section at the top of the Home page.
// Has a food background image, headline, subheading, search bar and a CTA button.
//
// Props:
// - search: current search text
// - onSearchChange: function called when the user types in the search bar
function Hero({ search, onSearchChange }) {
  return (
    <section className="relative">
      {/* Background image with a dark overlay so white text is readable */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80"
          alt="Food spread"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content on top of the background */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Discover the Best Food
          <br />
          <span className="text-accent">Around You</span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-gray-200 sm:text-lg">
          Order from your favorite restaurants and get it delivered hot and
          fresh at your doorstep.
        </p>

        {/* Search bar */}
        <div className="mt-8 w-full max-w-2xl">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            placeholder="Search for restaurants or cuisines..."
          />
        </div>

        {/* Call to action button */}
        <Link
          to="/restaurants"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#c42f3b] hover:shadow-hover active:scale-95"
        >
          Explore Restaurants
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
