import { FaHome, FaBriefcase, FaPhone } from "react-icons/fa";

// A single saved address card.
// Used on the Checkout page to pick a delivery address.
//
// Props:
// - address: object with { id, label, name, line, city, phone }
// - selected: is this address currently selected?
// - onSelect: function called when this card is clicked
function AddressCard({ address, selected, onSelect }) {
  // Pick the icon based on the label
  const Icon = address.label === "Home" ? FaHome : FaBriefcase;

  return (
    <button
      onClick={onSelect}
      className={`flex w-full flex-col gap-2 rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
        selected
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-gray-200 bg-white hover:border-primary/40"
      }`}
    >
      {/* Label + icon */}
      <div className="flex items-center gap-2">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            selected ? "bg-primary text-white" : "bg-background text-primary"
          }`}
        >
          <Icon className="text-sm" />
        </div>
        <span className="font-semibold text-text">{address.label}</span>
      </div>

      {/* Name + address line */}
      <div>
        <p className="text-sm text-text">{address.name}</p>
        <p className="text-sm text-gray-500">{address.line}</p>
        <p className="text-sm text-gray-500">{address.city}</p>
      </div>

      {/* Phone */}
      <p className="flex items-center gap-1 text-sm text-gray-500">
        <FaPhone className="text-xs text-primary" /> {address.phone}
      </p>
    </button>
  );
}

export default AddressCard;
