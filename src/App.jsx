import NavBar from "./components/navBar";
import StudentCard from "./components/studentCard";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <StudentCard />
      </main>
      <Footer />
    </div>
  );
}