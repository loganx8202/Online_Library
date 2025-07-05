import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'

export default function AddBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const books = useSelector(state => state.books)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !author || !description || !category || !rating) {
      alert("Please fill all fields")
      return
    }
    const newBook = {
      id: books.length + 1,
      title,
      author,
      description,
      category,
      rating: Number(rating)
    }
    dispatch(addBook(newBook))
    navigate('/books')
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-sunflower-accent mb-4">Add a New Book</h1>
      <form
        className="bg-white shadow rounded p-6 border border-sunflower-secondary space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          className="border p-2 w-full rounded"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <textarea
          className="border p-2 w-full rounded"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Rating (1-5)"
          type="number"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sunflower-primary text-sunflower-accent rounded px-4 py-2 hover:bg-yellow-300 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  )
}
