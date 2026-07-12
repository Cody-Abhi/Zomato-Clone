import {
  FaCreditCard,
  FaMobileAlt,
  FaGoogle,
  FaWallet,
  FaMoneyBillWave,
} from "react-icons/fa";

// A small map from icon name (string) to the actual icon component.
// This lets us store icon names in the dummy data file and look them up here.
const iconMap = {
  FaCreditCard,
  FaMobileAlt,
  FaGoogle,
  FaWallet,
  FaMoneyBillWave,
};

// A single selectable payment method card.
// When selected, it gets a highlighted border.
//
// Props:
// - method: object with { id, name, icon, description }
// - selected: boolean - is this method currently selected?
// - onSelect: function called when this card is clicked
function PaymentMethod({ method, selected, onSelect }) {
  // Look up the icon component from the map
  const Icon = iconMap[method.icon] || FaWallet;

  return (
    <button
      onClick={onSelect}
      className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all duration-300 active:scale-[0.98] ${
        selected
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-gray-200 bg-white hover:border-primary/40 hover:shadow-soft"
      }`}
    >
      {/* Icon circle */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
          selected ? "bg-primary text-white" : "bg-background text-primary"
        }`}
      >
        <Icon className="text-lg" />
      </div>

      {/* Name + description */}
      <div>
        <h3 className="font-semibold text-text">{method.name}</h3>
        <p className="text-xs text-gray-500">{method.description}</p>
      </div>

      {/* Selected check indicator */}
      {selected && (
        <div className="ml-auto h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">
          ✓
        </div>
      )}
    </button>
  );
}

export default PaymentMethod;
