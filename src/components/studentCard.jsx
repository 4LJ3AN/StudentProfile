export default function StudentCard({
  name = "Aljean Mark A. Angeles",
  course = "BS Computer Science",
  photo = "/profile.jpg",
}) {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-2xl shadow-md p-8 w-80">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-blue-600 mb-4"
      />

      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-500 mb-6">{course}</p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-2.5 rounded-lg">
        View Profile
      </button>
    </div>
  );
}