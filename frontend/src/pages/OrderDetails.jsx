import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaCreditCard,
} from "react-icons/fa";
import OrderTimeline from "../components/orders/OrderTimeline";
import { getOrderById, orders } from "../utils/ordersData";

// The Order Details page.
// Reads the order id from the URL using useParams() and shows all details.
function OrderDetails() {
  // useParams() gives us the :id from the route /order/:id
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the order in the dummy data.
  // We try the helper first, then fall back to matching by id.
  const order = getOrderById(id) || orders.find((o) => o.id === id);

  // If no order is found, show a message
  if (!order) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">Order not found.</p>
        <Link
          to="/orders"
          className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-medium text-white"
        >
          View All Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
      >
        <FaArrowLeft /> Back to Orders
      </button>

      {/* Order header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text sm:text-3xl">
            Order Details
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Order #{order.id} · {order.orderDate}
          </p>
        </div>
        {/* Download invoice button (UI only) */}
        <button
          onClick={() => alert("Invoice download is a UI demo only.")}
          className="flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          <FaDownload /> Download Invoice
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: restaurant + items + address + timeline */}
        <div className="space-y-6 lg:col-span-2">
          {/* Restaurant info */}
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card">
            <img
              src={order.restaurantImage}
              alt={order.restaurantName}
              className="h-16 w-16 rounded-xl object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-text">
                {order.restaurantName}
              </h2>
              <p className="text-sm text-gray-500">
                Delivery in {order.deliveryTime}
              </p>
            </div>
          </div>

          {/* Ordered items */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-text">Ordered Items</h3>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-text">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold text-text">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery address */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-text">
              Delivery Address
            </h3>
            <p className="flex items-start gap-2 text-sm text-gray-600">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              {order.address}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <FaPhone className="text-primary" /> {order.phone}
            </p>
          </div>

          {/* Order timeline (tracking) */}
          <OrderTimeline
            steps={order.timeline}
            currentStep={order.currentStep}
          />
        </div>

        {/* Right: payment + order summary */}
        <div className="space-y-6">
          {/* Payment method */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-text">
              Payment Method
            </h3>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <FaCreditCard className="text-primary" /> {order.paymentMethod}
            </p>
          </div>

          {/* Bill summary */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="mb-4 text-lg font-bold text-text">Bill Summary</h3>
            <div className="space-y-3 text-sm">
              {/* Items total */}
              <div className="flex justify-between text-gray-600">
                <span>Items Total</span>
                <span className="font-medium text-text">
                  ₹{order.total - 40}
                </span>
              </div>
              {/* Delivery fee */}
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-medium text-text">₹40</span>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-100"></div>
              {/* Total */}
              <div className="flex justify-between">
                <span className="font-semibold text-text">Total Paid</span>
                <span className="text-lg font-bold text-primary">
                  ₹{order.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
