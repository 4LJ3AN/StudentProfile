import { useState } from "react";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [mode, setMode] = useState("login"); // "login" or "register"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-96 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 pb-3 font-semibold ${
              mode === "login"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-400"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 pb-3 font-semibold ${
              mode === "register"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        {mode === "login" && (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault(); // no backend yet — just simulate success
              onLoginSuccess?.();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2.5 rounded-lg mt-2"
            >
              Log In
            </button>
          </form>
        )}

        {mode === "register" && (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-red-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2.5 rounded-lg mt-2"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}