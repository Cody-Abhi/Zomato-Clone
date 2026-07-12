import { useState } from "react";
import { FaQrcode } from "react-icons/fa";
import PaymentCard from "./PaymentCard";

// The checkout form shown on the Payment page.
// It switches between the card form and the UPI form depending on the method.
//
// Props:
// - method: the selected payment method id ("credit-card", "upi", etc.)
// - total: the amount to pay
// - onPay: function called when the Pay button is clicked
function CheckoutForm({ method, total, onPay }) {
  // Card form state
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // UPI state
  const [upiId, setUpiId] = useState("");

  // If the method is a card type, show the card form
  if (method === "credit-card" || method === "debit-card") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-card">
        <h3 className="text-lg font-bold text-text">Card Details</h3>

        {/* Visual card preview */}
        <div className="mt-4 flex justify-center">
          <PaymentCard cardNumber={cardNumber} cardName={cardName} />
        </div>

        {/* Form fields */}
        <div className="mt-6 space-y-4">
          {/* Card holder name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Card Holder Name
            </label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          {/* Card number */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Card Number
            </label>
            <input
              type="text"
              maxLength="16"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          {/* Expiry + CVV (side by side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-text">
                Expiry
              </label>
              <input
                type="text"
                maxLength="5"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text">
                CVV
              </label>
              <input
                type="password"
                maxLength="3"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="•••"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Pay button */}
          <button
            onClick={onPay}
            className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c42f3b] active:scale-95"
          >
            Pay ₹{total} Now
          </button>
        </div>
      </div>
    );
  }

  // If the method is UPI, show the UPI form
  if (method === "upi") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-card">
        <h3 className="text-lg font-bold text-text">Pay with UPI</h3>

        <div className="mt-6 space-y-4">
          {/* UPI ID input */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Enter UPI ID
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yourname@upi"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>

          {/* OR divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* QR code placeholder */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-44 w-44 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-background">
              <FaQrcode className="text-6xl text-gray-300" />
            </div>
            <p className="text-sm text-gray-500">Scan QR to pay</p>
          </div>

          {/* Pay button */}
          <button
            onClick={onPay}
            className="w-full rounded-xl bg-primary py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c42f3b] active:scale-95"
          >
            Pay ₹{total} Now
          </button>
        </div>
      </div>
    );
  }

  // For all other methods (Google Pay, PhonePe, Paytm, COD, Wallet)
  // show a simple message + pay button
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-card">
      <p className="text-gray-500">
        You will be redirected to complete the payment.
      </p>
      <button
        onClick={onPay}
        className="mt-6 w-full rounded-xl bg-primary py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c42f3b] active:scale-95"
      >
        Pay ₹{total} Now
      </button>
    </div>
  );
}

export default CheckoutForm;
