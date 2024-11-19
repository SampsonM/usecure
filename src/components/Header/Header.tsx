import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
      <Link to="/" className="text-lg font-bold text-blue-800">
        usecure
      </Link>

      <div className="text-sm font-medium text-gray-600 hidden sm:block">
        Course Demo
      </div>
    </header>
  )
}