import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import RestaurantDetails from "../pages/RestaurantDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SimpleRegister from "../pages/SimpleRegister";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import OrderSuccess from "../pages/OrderSuccess";

// All routes for the app.
// Every page is rendered inside the MainLayout (Navbar + Footer).
//
// Props from App.jsx (cart state + auth handlers) are passed down
// to the pages that need them.
function AppRoutes({
  cart,
  cartCount,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  toast,
  user,
  onLogin,
  onLogout,
}) {
  return (
    <Routes>
      <Route
        element={
          <MainLayout
            cartCount={cartCount}
            toast={toast}
            user={user}
            onLogout={onLogout}
          />
        }
      >
        {/* Public routes — anyone can visit these */}
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        {/* RestaurantDetails needs addToCart so the menu can add items */}
        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails addToCart={addToCart} />}
        />
        {/* Login and Register receive the onLogin handler so they can
            update the auth state in App.jsx after a successful login */}
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/simple-register" element={<SimpleRegister />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected routes — only logged-in users can access these.
            ProtectedRoute checks for a token in localStorage.
            If no token exists it redirects to /login. */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
                onRemove={removeFromCart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route
            path="/payment"
            element={<Payment cart={cart} onClearCart={clearCart} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route path="/order-success" element={<OrderSuccess />} />

        {/* The * route matches anything that didn't match above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
