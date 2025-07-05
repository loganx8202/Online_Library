import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

export default function BrowseBooks() {
  const books = useSelector(state => state.books)
  const { category } = useParams()
  const [search, setSearch] = useState('')

  const filtered = books.filter(book => {
    const matchCategory = category ? book.category === category : true
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-sunflower-accent mb-4">
        Browse Books {category && `(${category})`}
      </h1>

      <input
        type="text"
        placeholder="Search by title or author"
        className="border border-sunflower-secondary p-2 rounded w-full mb-6"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p className="text-red-600">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filtered.map(book => (
            <div
              key={book.id}
              className="bg-white shadow-md hover:shadow-xl rounded overflow-hidden transition"
            >
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover transform transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h2 className="text-lg font-semibold text-sunflower-accent mb-1 truncate">
                  {book.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1 truncate">by {book.author}</p>
                <p className="text-xs text-sunflower-secondary mb-2">{book.category}</p>
                <Link
                  className="text-sunflower-primary hover:underline text-sm"
                  to={`/book/${book.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
