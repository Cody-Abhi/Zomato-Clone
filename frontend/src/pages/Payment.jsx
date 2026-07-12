import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PaymentMethod from "../components/payment/PaymentMethod";
import CheckoutForm from "../components/payment/CheckoutForm";
import { paymentMethods } from "../utils/paymentMethods";

// The Payment page.
// Lets the user pick a payment method and fill in the required details.
//
// Props (from App.jsx):
// - cart: array of cart items (used to clear the cart after payment)
// - onClearCart: function to empty the cart after a successful payment
function Payment({ cart, onClearCart }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Read the total passed from the Checkout page
  const total = location.state?.total || 0;

  // State for the selected payment method (default: credit-card)
  const [selectedMethod, setSelectedMethod] = useState("credit-card");

  // Called when any Pay Now button is clicked
  const handlePay = () => {
    // Clear the cart since the order is "paid"
    onClearCart();

    // Generate a random order number for the success page
    const orderNumber = "ORD-" + Math.floor(1000 + Math.random() * 9000);
    const methodName = paymentMethods.find((m) => m.id === selectedMethod)?.name;

    // Go to the order success page, passing the order info
    navigate("/order-success", {
      state: {
        orderNumber,
        total,
        paymentMethod: methodName,
      },
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary"
      >
        <FaArrowLeft /> Back to Checkout
      </button>

      <h1 className="mb-8 text-2xl font-bold text-text sm:text-3xl">
        Payment
      </h1>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: payment method list */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-text">
            Select Payment Method
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {paymentMethods.map((method) => (
              <PaymentMethod
                key={method.id}
                method={method}
                selected={selectedMethod === method.id}
                onSelect={() => setSelectedMethod(method.id)}
              />
            ))}
          </div>
        </div>

        {/* Right: form for the selected method */}
        <div>
          <CheckoutForm
            method={selectedMethod}
            total={total}
            onPay={handlePay}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
