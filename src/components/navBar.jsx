export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-200 px-10 py-5 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>

      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
          Students
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
          About
        </a>
        <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
          Contact
        </a>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full">
          Log Out
        </button>
      </div>
    </nav>
  );
}
