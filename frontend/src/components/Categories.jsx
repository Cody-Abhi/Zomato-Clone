import CategoryCard from "./CategoryCard";

// Section that shows all food categories in a row.
//
// Props:
// - categories: array of category objects
function Categories({ categories }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          What's on your mind?
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Pick your favorite cuisine
        </p>
      </div>

      {/* Horizontal scrollable row of category cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar sm:justify-between">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
