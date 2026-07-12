import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaShoppingBag } from "react-icons/fa";

// The Order Success page.
// Shown after a successful payment.
// Reads the order info passed from the Payment page via useLocation().
function OrderSuccess() {
  const location = useLocation();

  // Read the order info passed from the Payment page
  const orderNumber = location.state?.orderNumber || "ORD-0000";
  const total = location.state?.total || 0;
  const paymentMethod = location.state?.paymentMethod || "Card";

  // A random estimated delivery time (between 25 and 45 minutes)
  const eta = 25 + Math.floor(Math.random() * 21);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      {/* Large success icon */}
      <FaCheckCircle className="animate-[fadeIn_0.5s_ease] text-7xl text-green-500" />

      {/* Success message */}
      <h1 className="mt-6 text-3xl font-bold text-text">
        Order Placed Successfully!
      </h1>
      <p className="mt-2 text-gray-500">
        Thank you for ordering with Foodie. Your food is on the way!
      </p>

      {/* Order info card */}
      <div className="mt-8 w-full max-w-md rounded-2xl bg-white p-6 shadow-card">
        {/* Order number */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="text-sm text-gray-500">Order Number</span>
          <span className="font-semibold text-text">{orderNumber}</span>
        </div>

        {/* Estimated delivery time */}
        <div className="flex items-center justify-between border-b border-gray-100 py-4">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <FaClock className="text-primary" /> Estimated Delivery
          </span>
          <span className="font-semibold text-text">{eta} minutes</span>
        </div>

        {/* Amount paid */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-gray-500">Amount Paid</span>
          <span className="font-semibold text-primary">₹{total}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* Track order button */}
        <Link
          to={`/order/${orderNumber}`}
          className="rounded-full bg-primary px-6 py-3 font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#c42f3b] hover:shadow-hover active:scale-95"
        >
          Track Order
        </Link>

        {/* Continue shopping button */}
        <Link
          to="/restaurants"
          className="flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          <FaShoppingBag /> Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
