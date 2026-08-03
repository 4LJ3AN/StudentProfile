export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search students by name..."
        className="w-full border border-gray-300 rounded-full px-5 py-2.5
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-all duration-300 shadow-sm hover:shadow-md"
      />
    </div>
  );
}