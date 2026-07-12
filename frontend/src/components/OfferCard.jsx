import { FaTag } from "react-icons/fa";

// A single offer card shown in the Offers section.
//
// Props:
// - offer: object with { id, title, subtitle, code, image }
function OfferCard({ offer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card">
      {/* Background image */}
      <img
        src={offer.image}
        alt={offer.title}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Offer text */}
      <div className="absolute inset-0 flex flex-col justify-center p-5 text-white">
        <FaTag className="text-accent text-xl" />
        <h3 className="mt-2 text-xl font-bold">{offer.title}</h3>
        <p className="text-sm text-gray-200">{offer.subtitle}</p>

        {/* Promo code pill */}
        <span className="mt-3 w-fit rounded-full border border-accent bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
          Code: {offer.code}
        </span>
      </div>
    </div>
  );
}

export default OfferCard;
