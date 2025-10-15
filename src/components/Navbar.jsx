import { useState } from "react";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">

        <div className="flex flex-shrink-0 items-center">
          <a href="/" className="text-[#16f2b3] text-3xl font-bold">
            Nuno Cunha
          </a>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex md:space-x-6 text-sm">
          <li><a href="/#about" onClick={() => props.handleSetPage(null)} className="text-white hover:text-pink-600">ABOUT</a></li>
          <li><a href="/#experience" onClick={() => props.handleSetPage(null)} className="text-white hover:text-pink-600">EXPERIENCE</a></li>
          <li><a href="/#skills" onClick={() => props.handleSetPage(null)} className="text-white hover:text-pink-600">SKILLS</a></li>
          <li><a href="/#education" onClick={() => props.handleSetPage(null)} className="text-white hover:text-pink-600">EDUCATION</a></li>
          <li><a href="/projects" onClick={() => props.handleSetPage("projects")} className="text-white hover:text-pink-600">PROJECTS</a></li>
          <li><a href="/blog" target="_blank" className="text-white hover:text-pink-600">DESKTOP</a></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#0D1224] bg-opacity-90 backdrop-blur-md md:hidden animate-fade-in-down">
          <ul className="flex flex-col items-start p-4 space-y-3">
            <li><a href="/#about" onClick={() => { props.handleSetPage(null); setMenuOpen(false); }} className="text-white hover:text-pink-600">ABOUT</a></li>
            <li><a href="/#experience" onClick={() => { props.handleSetPage(null); setMenuOpen(false); }} className="text-white hover:text-pink-600">EXPERIENCE</a></li>
            <li><a href="/#skills" onClick={() => { props.handleSetPage(null); setMenuOpen(false); }} className="text-white hover:text-pink-600">SKILLS</a></li>
            <li><a href="/#education" onClick={() => { props.handleSetPage(null); setMenuOpen(false); }} className="text-white hover:text-pink-600">EDUCATION</a></li>
            <li><a href="/projects" onClick={() => { props.handleSetPage("projects"); setMenuOpen(false); }} className="text-white hover:text-pink-600">PROJECTS</a></li>
            <li><a href="/blog" target="_blank" className="text-white hover:text-pink-600">DESKTOP</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
