import CategoryCard from './CategoryCard'

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-8 text-center text-sm text-neutral-400 shadow-soft backdrop-blur-md">
        No categories found. Please check back soon.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
      {categories.map((category, index) => (
        <CategoryCard
          key={category._id || category.slug || category.categoryId || index}
          category={category}
          index={index}
        />
      ))}
    </div>
  )
}
