import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sagar Janjoted. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;
