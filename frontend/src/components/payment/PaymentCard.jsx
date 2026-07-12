import { FaCreditCard, FaQrcode } from "react-icons/fa";

// A styled card that visually represents a credit/debit card.
// Used at the top of the card payment form.
//
// Props:
// - cardNumber: the card number string (may be partial while typing)
// - cardName: the card holder name
function PaymentCard({ cardNumber, cardName }) {
  // Format the number into groups of 4 for display
  const display = (cardNumber || "").padEnd(16, "•");
  const groups = display.match(/.{1,4}/g) || [];

  return (
    <div className="relative h-48 w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#a02028] p-6 text-white shadow-card">
      {/* Decorative circles */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10"></div>

      <div className="relative flex h-full flex-col justify-between">
        {/* Top row: chip + icon */}
        <div className="flex items-center justify-between">
          <div className="h-8 w-10 rounded-md bg-accent/80"></div>
          <FaCreditCard className="text-2xl text-white/80" />
        </div>

        {/* Card number */}
        <div className="tracking-widest">
          <p className="text-lg font-semibold sm:text-xl">
            {groups.join(" ")}
          </p>
        </div>

        {/* Bottom row: name */}
        <div>
          <p className="text-xs uppercase text-white/60">Card Holder</p>
          <p className="font-medium">{cardName || "YOUR NAME"}</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
