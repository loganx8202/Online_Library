import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-5xl font-bold text-sunflower-accent mb-4">404</h1>
      <p className="text-gray-700 mb-4">Page Not Found</p>
      <Link
        to="/"
        className="bg-sunflower-primary text-sunflower-accent rounded px-4 py-2 hover:bg-yellow-300 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
