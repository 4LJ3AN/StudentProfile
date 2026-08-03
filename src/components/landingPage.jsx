import { useState } from "react";
import LoginModal from "./loginModal";

export default function LandingPage({ onLoginSuccess }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold">Student Portal</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-red-700 hover:scale-101 font-semibold px-6 py-2 rounded-full border-4 hover:bg-gray-100 transition-colors"
        >
          Log In
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Student Portal
        </h2>
        <p className="text-lg text-black max-w-xl mb-8">
          Access your profile, track your academic progress, and stay
          connected with University of Caloocan City.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-800 text-white hover:scale-101  font-semibold px-8 py-3 rounded-full text-lg hover:bg-black transition-colors"
        >
          Get Started
        </button>
      </main>

      <footer className="text-center py-4 text-red-700 text-sm">
        Student Portal © 2026 | University of Caloocan City
      </footer>

      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={onLoginSuccess}
        />
      )}
    </div>
  );
}