import CollectionCard from "./CollectionCard";

// Section that shows collection cards in a horizontal row.
//
// Props:
// - collections: array of collection objects
function Collections({ collections }) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text sm:text-3xl">
              Collections
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Curated lists of the best places in town
            </p>
          </div>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
