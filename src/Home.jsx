import "./css/card.scss";
import "./css/globals.scss";
import { useState } from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";



export default function Home() {
  const [page, setPage] = useState(null);

  const handleSetPage = (newPage) => {
    setPage(newPage);
  }

  return (
    <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar handleSetPage={handleSetPage}/>
      { page == "projects" ?
        <main>
          <Projects /> 
        </main>
        :
        <main>
          <HeroSection />
          <AboutSection />
          <Experience />
          <Skills />
          <Education />
        </main>
      }
    </div>
  )
};