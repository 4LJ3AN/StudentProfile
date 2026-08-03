export default function StudentCard({
  name = "Aljean Mark A. Angeles",
  course = "BS Computer Science",
  photo = "/profile.jpg",
}) {
  return (
    <div className="flex flex-col items-center hover:scale-102 transition-all duration-200 bg-gray-100 rounded-2xl shadow-md p-8 w-80">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-gradient-to-r from-red-600 to-red-950 mb-4"
      />

      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-500 mb-6">{course}</p>

      <button className="bg-gradient-to-r from-red-600 to-red-950 hover:scale-105 hover:shadow-lg transition-all duration-200 text-white font-semibold w-full py-2.5 rounded-lg">
        View Profile
      </button>
    </div>
  );
}