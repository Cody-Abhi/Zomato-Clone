import { FaMinus, FaPlus } from "react-icons/fa";

// A small + / - button group used to change item quantity.
//
// Props:
// - quantity: current quantity (number)
// - onIncrease: function called when + is clicked
// - onDecrease: function called when - is clicked
function QuantityButton({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1">
      {/* Minus button */}
      <button
        onClick={onDecrease}
        className="flex h-7 w-7 items-center justify-center rounded-full text-primary transition hover:bg-primary/10 active:scale-90"
        aria-label="Decrease quantity"
      >
        <FaMinus className="text-xs" />
      </button>

      {/* Current quantity */}
      <span className="min-w-[20px] text-center text-sm font-semibold text-text">
        {quantity}
      </span>

      {/* Plus button */}
      <button
        onClick={onIncrease}
        className="flex h-7 w-7 items-center justify-center rounded-full text-primary transition hover:bg-primary/10 active:scale-90"
        aria-label="Increase quantity"
      >
        <FaPlus className="text-xs" />
      </button>
    </div>
  );
}

export default QuantityButton;
