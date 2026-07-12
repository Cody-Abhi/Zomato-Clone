import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaStore } from "react-icons/fa";
import AddressCard from "../components/orders/AddressCard";
import OrderSummary from "../components/orders/OrderSummary";
import { addresses } from "../utils/addresses";
import { DELIVERY_FEE, GST_RATE } from "../utils/cartData";

// The Checkout page.
// Lets the user pick a delivery address, add instructions,
// and review the order summary before placing the order.
//
// Props (from App.jsx):
// - cart: array of cart items
function Checkout({ cart }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Read the total and discount passed from the Cart page (if any)
  const passedTotal = location.state?.total;
  const passedDiscount = location.state?.discount || 0;

  // State for the selected address
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);
  // State for delivery instructions
  const [instructions, setInstructions] = useState("");
  // State for phone number
  const [phone, setPhone] = useState("+91 98765 43210");

  // Calculate the bill (same as the Cart page)
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * GST_RATE);
  const total = passedTotal || Math.max(0, subtotal + DELIVERY_FEE + tax - passedDiscount);

  // If the cart is empty, send the user back to restaurants
  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">Your cart is empty.</p>
        <Link
          to="/restaurants"
          className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-medium text-white"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  // Called when the Place Order button is clicked
  const handlePlaceOrder = () => {
    // Go to the payment page, passing the total along
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
      >
        <FaArrowLeft /> Back to Cart
      </button>

      <h1 className="mb-8 text-2xl font-bold text-text sm:text-3xl">
        Checkout
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: address + instructions */}
        <div className="space-y-6 lg:col-span-2">
          {/* Delivery address section */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-text">
              Delivery Address
            </h2>

            {/* Saved addresses */}
            <div className="grid gap-4 sm:grid-cols-2">
              {addresses.map((addr) => (
                <AddressCard
                  key={addr.id}
                  address={addr}
                  selected={selectedAddress === addr.id}
                  onSelect={() => setSelectedAddress(addr.id)}
                />
              ))}

              {/* Add new address button */}
              <button className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 p-5 text-gray-400 transition hover:border-primary hover:text-primary">
                <FaPlus className="text-xl" />
                <span className="text-sm font-medium">Add New Address</span>
              </button>
            </div>
          </section>

          {/* Delivery instructions */}
          <section className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 text-lg font-bold text-text">
              Delivery Instructions
            </h2>
            <textarea
              rows="3"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Leave at the door, ring the bell, etc."
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            ></textarea>

            {/* Phone number */}
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-text">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
          </section>

          {/* Order items summary */}
          <section className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-text">
              <FaStore className="text-primary" /> Order Items
            </h2>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="font-medium text-text">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: order summary + place order */}
        <div className="space-y-4">
          <OrderSummary
            subtotal={subtotal}
            deliveryFee={DELIVERY_FEE}
            tax={tax}
            discount={passedDiscount}
            total={total}
          />

          <button
            onClick={handlePlaceOrder}
            className="w-full rounded-full bg-primary py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#c42f3b] hover:shadow-hover active:scale-95"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
