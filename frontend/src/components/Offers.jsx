import OfferCard from "./OfferCard";

// Section that shows all offer cards in a grid.
//
// Props:
// - offers: array of offer objects
function Offers({ offers }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          Latest Offers
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Save big on your favorite meals
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}

export default Offers;
