// A single collection card (e.g. "Trending This Week").
// Shows a big image with the title and place count overlaid.
//
// Props:
// - collection: object with { id, title, places, image }
function CollectionCard({ collection }) {
  return (
    <div className="group relative h-64 w-72 shrink-0 overflow-hidden rounded-2xl shadow-card">
      {/* Background image */}
      <img
        src={collection.image}
        alt={collection.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark gradient overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Text at the bottom */}
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h3 className="text-lg font-semibold">{collection.title}</h3>
        <p className="text-sm text-gray-300">{collection.places} Places</p>
      </div>
    </div>
  );
}

export default CollectionCard;
