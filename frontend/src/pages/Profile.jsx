import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaEnvelope, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import RestaurantCard from "../components/RestaurantCard";
import Loader from "../components/Loader";
import { getRestaurants } from "../services/restaurantApi";
import { getProfile, logout as apiLogout } from "../services/authApi";

// The Profile page.
// On load it reads the JWT from localStorage and calls
// GET /api/auth/profile to fetch the real user data.
// Displays avatar, name, email and favorite restaurants.
//
// This is a protected route — ProtectedRoute already ensures
// a token exists before this page renders.
function Profile() {
  const navigate = useNavigate();

  // State for the real user data fetched from the backend
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // State for favorite restaurants (still uses dummy data)
  const [favorites, setFavorites] = useState([]);
  const [favLoading, setFavLoading] = useState(true);

  // Fetch the user profile when the page loads
  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        // Call GET /api/auth/profile.
        // The JWT is auto-attached by the Axios interceptor in authApi.js.
        // The backend verifies the token and returns { id, name, email }.
        const profile = await getProfile();
        if (active) {
          setUser(profile);
          setLoading(false);
        }
      } catch (err) {
        // If the token is invalid or expired, the backend returns 401.
        // We log the user out and redirect to the login page.
        if (active) {
          setError("Session expired. Please log in again.");
          setLoading(false);
          apiLogout();
          navigate("/login");
        }
      }
    }

    loadProfile();
    return () => {
      active = false;
    };
  }, [navigate]);

  // Load favorite restaurants (uses the same dummy data as before)
  useEffect(() => {
    let active = true;

    async function loadFavorites() {
      const all = await getRestaurants();
      // Keep a few restaurants as "favorites" for display
      const favIds = [1, 6, 7, 8];
      const favs = all.filter((r) => favIds.includes(r.id));
      if (active) {
        setFavorites(favs);
        setFavLoading(false);
      }
    }

    loadFavorites();
    return () => {
      active = false;
    };
  }, []);

  // Show loader while the profile is being fetched
  if (loading) return <Loader />;

  // If there was an error, show it
  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Profile header card */}
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-card">
        {/* Avatar — use a generated avatar based on the user's name */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 ring-4 ring-accent">
          <FaUserCircle className="text-5xl text-primary" />
        </div>

        {/* Name and email from the real backend data */}
        <h1 className="mt-4 text-2xl font-bold text-text">{user.name}</h1>
        <p className="mt-1 flex items-center justify-center gap-2 text-sm text-gray-500">
          <FaEnvelope className="text-primary" /> {user.email}
        </p>

        {/* Account info */}
        <p className="mt-3 text-xs text-gray-400">
          Member since {new Date(user.created_at).toLocaleDateString()}
        </p>

        {/* Logout button */}
        <button
          onClick={() => {
            apiLogout();
            navigate("/");
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-[#c42f3b]"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Favorite restaurants */}
      <div className="mt-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-text">
          <FaHeart className="text-primary" /> Favorite Restaurants
        </h2>

        {favLoading ? (
          <Loader />
        ) : favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
