import { FaTrashAlt, FaStar, FaLeaf, FaDrumstickBite } from "react-icons/fa";
import QuantityButton from "./QuantityButton";

// A single item row in the shopping cart.
//
// Props:
// - item: the cart item object (name, image, price, quantity, restaurantName, veg, rating)
// - onIncrease: function to increase quantity
// - onDecrease: function to decrease quantity
// - onRemove: function to remove the item
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft">
      {/* Food image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
      />

      {/* Details */}
      <div className="flex flex-1 flex-col">
        {/* Veg / Non-veg badge + name */}
        <div className="flex items-center gap-2">
          {item.veg ? (
            <FaLeaf className="text-green-500 text-sm" />
          ) : (
            <FaDrumstickBite className="text-primary text-sm" />
          )}
          <h3 className="font-semibold text-text">{item.name}</h3>
        </div>

        {/* Restaurant name */}
        <p className="text-sm text-gray-500">{item.restaurantName}</p>

        {/* Rating */}
        <span className="mt-1 flex items-center gap-1 text-xs text-gray-500">
          <FaStar className="text-accent" /> {item.rating}
        </span>

        {/* Price + controls (bottom row) */}
        <div className="mt-auto flex items-center justify-between pt-3">
          {/* Price */}
          <span className="font-semibold text-text">
            ₹{item.price * item.quantity}
          </span>

          {/* Quantity + Remove */}
          <div className="flex items-center gap-3">
            <QuantityButton
              quantity={item.quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
            <button
              onClick={onRemove}
              className="text-gray-400 transition hover:text-primary active:scale-90"
              aria-label="Remove item"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
