import { FaArrowUpRightFromSquare, FaFileArrowDown } from "react-icons/fa6";
import { project } from "../utils/projects";
import ProjectCard from "./ProjectCard";

const selectedIds = ["chichis-bizarre-adventure", "initial-cpp", "travel-planner"];
const sharedIds = ["cgt-assignment", "vr-assignment", "accounting-mobile-app", "ai-assignment"];

const ProjectsSection = ({ projects }: { projects: project[] }) => {
  const selected = selectedIds.map((id) => projects.find((item) => item.id === id)).filter(Boolean) as project[];
  const shared = sharedIds.map((id) => projects.find((item) => item.id === id)).filter(Boolean) as project[];

  return (
    <section className="section projects-section" id="projects-section">
      <div className="page-width">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Built by doing, debugging, and iterating.</h2></div>
          <p>My portfolio spans Unity gameplay, C++ and DirectX, Python desktop software, AI prototypes, VR interaction, and Flutter mobile development.</p>
        </div>

        <div className="selected-grid">
          {selected.map((item, index) => <ProjectCard key={item.id} project={item} variant={index === 0 ? "wide" : "standard"} />)}
        </div>

        <div className="team-intro">
          <div><p className="eyebrow">Shared collaborations</p><h2>The four projects from the reference.</h2></div>
          <p>I participated in all four projects shown in Kong Ji Shou’s portfolio. These cards present them from my side, highlighting my own implementation work where the shared repositories and project files provide evidence.</p>
        </div>
        <div className="team-grid">
          {shared.map((item) => <ProjectCard key={item.id} project={item} variant="team" />)}
        </div>

        <div className="project-archive">
          <div><p className="eyebrow">More code &amp; background</p><h3>Continue exploring</h3></div>
          <div className="archive-list">
            <a href="https://github.com/HongJunChea?tab=repositories" target="_blank" rel="noreferrer">
              <span>All GitHub repositories</span><small>Travel Planner, payroll system, forks &amp; experiments</small><FaArrowUpRightFromSquare />
            </a>
            <a href={`${import.meta.env.BASE_URL}assets/Chea_Hong_Jun_Resume.pdf`} target="_blank" rel="noreferrer">
              <span>Download resume</span><small>Education, experience, skills &amp; selected projects</small><FaFileArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

