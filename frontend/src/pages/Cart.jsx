import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/cart/EmptyCart";
import PromoCode from "../components/cart/PromoCode";
import OrderSummary from "../components/orders/OrderSummary";
import { DELIVERY_FEE, GST_RATE } from "../utils/cartData";

// The Cart page.
// Shows all items in the cart, lets the user change quantities,
// apply promo codes, and see the bill summary.
//
// Props (passed from App.jsx so the cart is shared across pages):
// - cart: array of cart items
// - onIncrease: function to increase an item's quantity
// - onDecrease: function to decrease an item's quantity
// - onRemove: function to remove an item from the cart
function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const navigate = useNavigate();

  // Discount from promo code (default 0)
  const [discount, setDiscount] = useState(0);

  // Calculate the subtotal (sum of price * quantity for all items)
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate tax and total
  const tax = Math.round(subtotal * GST_RATE);
  const total = Math.max(0, subtotal + DELIVERY_FEE + tax - discount);

  // If the cart is empty, show the empty illustration
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to="/restaurants"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
      >
        <FaArrowLeft /> Continue Shopping
      </Link>

      {/* Page title */}
      <h1 className="mb-8 text-2xl font-bold text-text sm:text-3xl">
        Your Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: cart items + promo code */}
        <div className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
              onRemove={() => onRemove(item.id)}
            />
          ))}

          {/* Promo code box */}
          <PromoCode
            onApply={(amount) => setDiscount(amount)}
            onRemove={() => setDiscount(0)}
          />
        </div>

        {/* Right: order summary + buttons */}
        <div className="space-y-4">
          <OrderSummary
            subtotal={subtotal}
            deliveryFee={DELIVERY_FEE}
            tax={tax}
            discount={discount}
            total={total}
          />

          {/* Proceed to checkout button */}
          <button
            onClick={() => navigate("/checkout", { state: { total, discount } })}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#c42f3b] hover:shadow-hover active:scale-95"
          >
            <FaShoppingBag /> Proceed to Checkout
          </button>

          {/* Continue shopping link */}
          <Link
            to="/restaurants"
            className="block w-full rounded-full border-2 border-primary py-3 text-center font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
