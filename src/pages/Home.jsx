import { Link } from 'react-router-dom'

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-sunflower-accent mb-4">Welcome to the Online Library 🌻</h1>
      <p className="mb-6 text-gray-700">Find and share amazing books with others.</p>

      <h2 className="text-2xl font-semibold text-sunflower-secondary mb-2">Categories</h2>
      <div className="flex gap-4 mb-6">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="bg-sunflower-primary text-sunflower-accent rounded px-4 py-2 hover:bg-yellow-300 transition"
          >
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-sunflower-secondary mb-2">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded border border-sunflower-secondary">
          <h3 className="text-lg font-bold text-sunflower-accent">1984</h3>
          <p className="text-gray-600">George Orwell</p>
          <Link className="text-sunflower-secondary hover:underline" to="/book/1">View Details</Link>
        </div>
        <div className="bg-white shadow p-4 rounded border border-sunflower-secondary">
          <h3 className="text-lg font-bold text-sunflower-accent">Sapiens</h3>
          <p className="text-gray-600">Yuval Noah Harari</p>
          <Link className="text-sunflower-secondary hover:underline" to="/book/2">View Details</Link>
        </div>
      </div>
    </div>
  )
}
