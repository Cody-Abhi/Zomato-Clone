import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// A single order card shown on the My Orders page.
//
// Props:
// - order: object with { id, restaurantName, restaurantImage, items, total, status, orderDate }
function OrderCard({ order }) {
  // Choose the badge color based on the order status
  const statusColors = {
    Delivered: "bg-green-100 text-green-600",
    Preparing: "bg-accent/30 text-text",
    "Out for Delivery": "bg-blue-100 text-blue-600",
    Cancelled: "bg-red-100 text-primary",
  };

  // Build a short summary of the items, e.g. "2x Pizza, 1x Garlic Bread"
  const itemSummary = order.items
    .map((item) => `${item.quantity}x ${item.name}`)
    .join(", ");

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-soft sm:flex-row sm:items-center">
      {/* Restaurant image */}
      <img
        src={order.restaurantImage}
        alt={order.restaurantName}
        className="h-20 w-20 shrink-0 rounded-xl object-cover"
      />

      {/* Details */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-text">{order.restaurantName}</h3>
          {/* Status badge */}
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusColors[order.status] || "bg-gray-100 text-gray-500"
            }`}
          >
            {order.status}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500">{itemSummary}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {order.orderDate} · ₹{order.total}
          </span>
          {/* View details link */}
          <Link
            to={`/order/${order.id}`}
            className="flex items-center gap-1 text-sm font-medium text-primary transition hover:gap-2"
          >
            View Details <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
