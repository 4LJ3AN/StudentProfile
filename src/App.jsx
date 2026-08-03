import { useState } from "react";
import LandingPage from "./components/landingPage";
import NavBar from "./components/navBar";
import StudentCard from "./components/studentCard";
import Footer from "./components/footer";

export default function App() {
  const [page, setPage] = useState("landing");

  if (page === "landing") {
    return <LandingPage onLoginSuccess={() => setPage("dashboard")} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar onLogout={() => setPage("landing")} />
      <main className="flex-1 flex items-center justify-center">
        <StudentCard />
      </main>
      <Footer />


    </div>
  );
}