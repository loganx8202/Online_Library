import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(state => state.books.find(b => b.id === Number(id)))

  if (!book) return (
    <div className="container mx-auto p-6 text-red-600 font-semibold">
      Book not found. <Link to="/books" className="text-sunflower-secondary underline">Back to Browse</Link>
    </div>
  )

  return (
    <div className="bg-white shadow rounded p-6 border border-sunflower-secondary flex gap-6">
  <img
    src={book.image}
    alt={book.title}
    className="w-48 h-64 object-cover rounded"
  />
  <div className="flex flex-col justify-start">
    <h1 className="text-3xl font-bold text-sunflower-accent mb-2">{book.title}</h1>
    <p className="text-lg mb-2">by {book.author}</p>
    <p className="text-gray-700 mb-4">{book.description}</p>
    <p className="text-yellow-500 font-semibold mb-4">Rating: {book.rating} ⭐</p>
    <Link
      to="/books"
      className="bg-sunflower-primary text-sunflower-accent rounded px-4 py-2 hover:bg-yellow-300 transition w-max"
    >
      Back to Browse
    </Link>
  </div>
</div>
  )
}
