import { useState, useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { getProfile, logout as apiLogout } from "./services/authApi";

// The main App component.
// It holds the shared cart state, toast notification state, and
// auth (logged-in user) state so that multiple pages can access them.
//
// We use only useState and pass things down as props (no Redux / Context).
function App() {
  // ----- Cart state -----
  // cart is an array of items. Each item looks like:
  // { id, name, price, image, rating, veg, quantity, restaurantName }
  const [cart, setCart] = useState([]);

  // ----- Toast state -----
  // toast holds { show, message }. It appears briefly at the bottom.
  const [toast, setToast] = useState({ show: false, message: "" });

  // ----- Auth state -----
  // user holds the logged-in user object { id, name, email } or null.
  // This is used by the Navbar to show Login/Register vs Profile/Logout.
  const [user, setUser] = useState(null);

  // Helper: show a toast message for 2.5 seconds, then hide it.
  // useCallback keeps the same function reference between renders.
  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    // Hide the toast after 2.5 seconds
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  }, []);

  // ----- Check login status on app load -----
  // When the app first loads (or the page is refreshed), check if a
  // JWT token exists in localStorage. If it does, fetch the user's
  // profile from the backend so the Navbar shows the correct state.
  useEffect(() => {
    let active = true;

    async function checkLogin() {
      const token = localStorage.getItem("token");
      if (!token) return; // no token → not logged in

      try {
        // Call GET /api/auth/profile with the token (auto-attached by Axios)
        const profile = await getProfile();
        if (active) setUser(profile);
      } catch (error) {
        // If the token is invalid or expired, remove it and stay logged out
        console.error("Profile fetch failed:", error);
        apiLogout();
      }
    }

    checkLogin();
    return () => {
      active = false;
    };
  }, []);

  // Add an item to the cart. If it's already there, increase the quantity.
  const addToCart = useCallback(
    (item, restaurantName) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          // Item already in cart -> increase quantity by 1
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        // New item -> add with quantity 1
        return [...prev, { ...item, quantity: 1, restaurantName }];
      });
      showToast("Added to Cart");
    },
    [showToast]
  );

  // Increase the quantity of a cart item by its id
  const increaseQty = useCallback((id) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }, []);

  // Decrease the quantity. If it reaches 0, remove the item.
  const decreaseQty = useCallback((id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  // Remove an item from the cart completely
  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  // Empty the entire cart (used after payment)
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Total number of items in the cart (sum of all quantities)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ----- Auth handler functions -----

  // Called after a successful login (from the Login page).
  // Saves the user in state so the Navbar updates immediately.
  const handleLogin = useCallback((loggedInUser) => {
    setUser(loggedInUser);
  }, []);

  // Called when the Logout button is clicked.
  // Removes the token from localStorage and clears the user state.
  const handleLogout = useCallback(() => {
    apiLogout();
    setUser(null);
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes
        // Cart data + handlers passed to pages
        cart={cart}
        cartCount={cartCount}
        addToCart={addToCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        // Toast state passed to MainLayout (shown on every page)
        toast={toast}
        // Auth state + handlers passed to Navbar and pages
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </BrowserRouter>
  );
}

export default App;
