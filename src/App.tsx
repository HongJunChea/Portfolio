import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import { projects } from "./utils/projects";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    window.setTimeout(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [location.hash]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Profile />
      <ProjectsSection projects={projects} />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;
