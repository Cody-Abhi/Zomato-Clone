import { useState } from "react";
import { FaTag, FaCheck } from "react-icons/fa";
import { promoCodes } from "../../utils/cartData";

// A promo code input box with an Apply button.
// When a valid code is entered, the discount is passed to the parent.
//
// Props:
// - onApply: function called with the discount amount when a valid code is applied
// - onRemove: function called when the promo is removed
function PromoCode({ onApply, onRemove }) {
  // The text the user types
  const [code, setCode] = useState("");
  // Whether a valid code is currently applied
  const [applied, setApplied] = useState(false);
  // Error message if the code is invalid
  const [error, setError] = useState("");

  // Called when the Apply button is clicked
  const handleApply = () => {
    const upper = code.trim().toUpperCase();
    const found = promoCodes.find((p) => p.code === upper);

    if (found) {
      // Valid code: tell the parent the discount and mark as applied
      onApply(found.discount);
      setApplied(true);
      setError("");
    } else {
      // Invalid code: show an error
      setError("Invalid promo code");
      setApplied(false);
    }
  };

  // Called when the Remove button is clicked
  const handleRemove = () => {
    setCode("");
    setApplied(false);
    setError("");
    onRemove();
  };

  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-4">
      <div className="flex items-center gap-2">
        <FaTag className="text-primary" />
        <h3 className="font-semibold text-text">Apply Promo Code</h3>
      </div>

      {/* Input + button row */}
      <div className="mt-3 flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={applied}
          placeholder="Enter promo code"
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-primary disabled:bg-gray-50"
        />

        {applied ? (
          // Show Remove button when a code is applied
          <button
            onClick={handleRemove}
            className="shrink-0 rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-200"
          >
            Remove
          </button>
        ) : (
          // Show Apply button otherwise
          <button
            onClick={handleApply}
            className="shrink-0 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-[#c42f3b]"
          >
            Apply
          </button>
        )}
      </div>

      {/* Success or error message */}
      {applied && (
        <p className="mt-2 flex items-center gap-1 text-sm text-green-600">
          <FaCheck /> Code applied successfully!
        </p>
      )}
      {error && <p className="mt-2 text-sm text-primary">{error}</p>}

      {/* Show available codes as hints */}
      <div className="mt-3 flex flex-wrap gap-2">
        {promoCodes.map((p) => (
          <span
            key={p.code}
            className="rounded-full bg-background px-3 py-1 text-xs text-gray-500"
          >
            {p.code} - {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PromoCode;
