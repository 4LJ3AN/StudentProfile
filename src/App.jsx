import navBar from "./components/navBar";
import studentCard from "./components/studentCard";
import footer from "./components/footer";

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