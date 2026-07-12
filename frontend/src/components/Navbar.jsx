import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import Button from "./Button";
import { NAV_LINKS, APP_NAME } from "../utils/constants";

// The sticky top navbar.
// Shows logo, nav links, cart icon with badge, and auth buttons.
//
// Props:
// - cartCount: number of items currently in the cart
// - user: the logged-in user object { id, name, email } or null
// - onLogout: function to call when the Logout button is clicked
function Navbar({ cartCount, user, onLogout }) {
  // State that controls the mobile menu (open / closed)
  const [isOpen, setIsOpen] = useState(false);

  // useNavigate lets us redirect after logout
  const navigate = useNavigate();

  // Helper to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Called when the Logout button is clicked.
  // Calls the onLogout prop (which removes the token + clears user state)
  // then navigates to the home page.
  const handleLogout = () => {
    onLogout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-soft">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo (clicking goes to Home) */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <FaUtensils className="text-primary text-2xl" />
          <span className="text-xl font-bold text-primary">{APP_NAME}</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-text"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* My Orders link (protected — only shows if logged in) */}
          {user && (
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-text"
                  }`
                }
              >
                Orders
              </NavLink>
            </li>
          )}
        </ul>

        {/* Desktop right side: cart + auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Cart icon with item count badge */}
          <Link
            to="/cart"
            className="relative rounded-full p-2 text-text transition hover:text-primary"
            aria-label="Cart"
          >
            <FaShoppingCart className="text-xl" />
            {/* Badge — only shown when there are items */}
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          {/* Conditional auth buttons:
              - If user is logged in → show Profile + Logout
              - If not logged in     → show Login + Register */}
          {user ? (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 text-sm font-medium text-text transition hover:text-primary"
              >
                <FaUserCircle className="text-lg text-primary" />
                {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Button to="/login" variant="outline">
                Login
              </Button>
              <Button to="/register" variant="primary">
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile right side: cart icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative p-2 text-text"
            aria-label="Cart"
          >
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>
          <button
            className="text-2xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-text"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Orders link (only if logged in) */}
            {user && (
              <li>
                <NavLink
                  to="/orders"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-text"
                    }`
                  }
                >
                  Orders
                </NavLink>
              </li>
            )}

            {/* Mobile auth section */}
            <li className="mt-2 flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-2 text-base font-medium text-text"
                  >
                    <FaUserCircle className="text-primary text-lg" />
                    {user.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-primary py-2.5 text-sm font-medium text-primary"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Button to="/login" variant="outline" onClick={closeMenu}>
                    Login
                  </Button>
                  <Button to="/register" variant="primary" onClick={closeMenu}>
                    Register
                  </Button>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
