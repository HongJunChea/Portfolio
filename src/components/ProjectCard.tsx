import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { ProjectType } from "../types";

type ProjectCardProps = {
  project: ProjectType;
  variant?: "wide" | "standard" | "team";
};

export default function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
    >
      <Link className="project-media" to={`/project/${project.id}`} aria-label={`View ${project.title}`}>
        <img src={project.cover} alt="" loading="lazy" />
        <span className="project-index">{project.collaboration || project.contribution || "Selected work"}</span>
      </Link>
      <div className="project-body">
        <div className="project-meta">
          {project.tags.slice(0, variant === "wide" ? 5 : 3).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <Link to={`/project/${project.id}`} className="project-title-link">
          <h3>{project.title}</h3>
        </Link>
        <p>{project.desc}</p>
        {project.contribution && <div className="contribution"><strong>My focus</strong><span>{project.contribution}</span></div>}
        <div className="project-actions">
          <Link to={`/project/${project.id}`}>Case study <FaArrowRight /></Link>
          {project.code_links?.[0] && (
            <a href={project.code_links[0].url} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
              <FaGithub /> Source <FaArrowUpRightFromSquare />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

