import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-sunflower-primary text-sunflower-accent shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold font-heading">🌻 Online Library</h1>
        <div className="space-x-4">
          <Link className="hover:text-sunflower-secondary" to="/">Home</Link>
          <Link className="hover:text-sunflower-secondary" to="/books">Browse Books</Link>
          <Link className="hover:text-sunflower-secondary" to="/add">Add Book</Link>
        </div>
      </div>
    </nav>
  )
}
